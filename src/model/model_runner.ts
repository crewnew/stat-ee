import CompanyData from "../company/company_entity";
import * as tf from '@tensorflow/tfjs';
import { Model } from "./model";
import ClusterRepository from "../cluster/cluster_repository";
import ClusterEntity from "./../cluster/cluster_entity";
import {storageUrl} from '../utils/config';
import PredictionEntity from "../prediction/response_entity";
import { logger } from "../utils/logger";
import CompanyEntity from "../company/company_entity";
import dummyCompanyResponse from './../company/company_static_data';
import  { Request, Response } from 'express';
import { sendError } from "../utils/errors";
import { Prediction } from "./../prediction/prediction";

export default class ModelRunner {

    private prepareData(company: CompanyData): Array<number> {
        const clusters = new ClusterRepository();
        const clusterName = company.Klaster;

        // Retrieves the cluster values for the company.
        const companyCluster = ClusterEntity.fromCompany(company);

        // Subtracts the corresponding `mea` value from each retrieved field based on the cluster.
        const meaCluster = clusters.findMeaByCluster(clusterName);
        const substractedData = meaCluster.substract(companyCluster);

        // Divides each field by the corresponding `sds` value based on the cluster.
        const sdsCluster = clusters.findSdsByCluster(clusterName);
        const dividedData = sdsCluster.divide(substractedData);
        
        return Object.values(dividedData);
    }

    private async tensor(values: Array<number>): Promise<tf.Tensor2D> {
        return tf.tensor2d(values, [1, 64]);
    }

    // Note: LoadLayersModel is only loading the model from a url, not from a local file
    private async loadModel(cluster: string, model: Model): Promise<tf.LayersModel> {
        const storage = storageUrl();
        return tf.loadLayersModel(storage + model + '_' + cluster + '/model.json');
    }

    public async handleRequest(req: Request, res: Response) : Promise<any> {
        const regNr = req.query.reg_nr;

        try {
            if (!regNr || regNr.length === 0) {
                throw new Error('Company not found');
            }
            let prediction = await this.response(`${regNr}`);
            const response = prediction.serialize(); 
            res.send(response);
        } catch (error) {
            switch (error.message) {
                case 'Company not found':
                    return sendError(res, 'company-not-found');
                case 'Cluster not found':
                    return sendError(res, 'cluster-not-found');
                default:
                    return sendError(res, 'bad-request');
            }
        }
        
    }

   

    public async response(registCo: string ) : Promise<PredictionEntity>  {
        let dummyData = dummyCompanyResponse;
        let dummyCompany = CompanyEntity.deserialize(dummyData);

        // If no response is found, throw an error
        if (dummyCompany === undefined) {
            throw new Error('Company not found');
        }
        // If the cluster is 'muu', throw an error
         if (dummyCompany.Klaster === 'muu') {
            throw new Error('Cluster not found');
        }
        logger.debug('Company with cluster: ' + dummyCompany.Klaster);

        const response = new PredictionEntity();

        response.registCo = registCo;
        const liquidity = await this.predict(dummyCompany, Model.Liquidity);
        response.model1y1 = liquidity.x;
        response.model1y2 = liquidity.y;
        response.model1y3 = liquidity.z;
        const profitability = await this.predict(dummyCompany, Model.Profitability);
        response.model2y1 = profitability.x;
        response.model2y2 = profitability.y;
        response.model2y3 = profitability.z;
        const efficiency = await this.predict(dummyCompany, Model.Efficiency);
        response.model3y1 = efficiency.x;
        response.model3y2 = efficiency.y;
        response.model3y3 = efficiency.z;
        const structure = await this.predict(dummyCompany, Model.Structure);
        response.model4y1 = structure.x;
        response.model4y2 = structure.y;
        response.model4y3 = structure.z;
        const other = '';
        response.model5y1 = 0;
        response.model5y2 = 0;
        response.model5y3 = 0;
        // 
        response.sektorNo = 0;

        try {
            const size = this.parseString(dummyCompany.Ettevotte_suurusklass);
            response.size_min = size.min;
            response.size_max = size.max;
        } catch (error) {
            response.size_min = 0;
            response.size_max = 0;
        }

        response.county = dummyCompany.Maakond;
        response.kov = dummyCompany.KOV;

        response.LVKK = dummyCompany.LVKK;
        response.MVK = dummyCompany.MVK;
        response.RK = dummyCompany.RK;
        response.LLLK = dummyCompany.LLLK;
        response.LLVK = dummyCompany.LLVK;
        response.LLOK = dummyCompany.LLOK;
        response.VaKK = dummyCompany.VaKK;
        response.LVKaK = dummyCompany.LVKaK;
        response.VKK = dummyCompany.VKK;
        response.VK = dummyCompany.VK;
        response.KOS = dummyCompany.KOS;
        response.LKKKK = dummyCompany.LKKKK;https://i.imgur.com/04Te6hu_d.webp?maxwidth=760&fidelity=grand
        response.PKKKK = dummyCompany.PKKKK;
        response.AKM = dummyCompany.AKM;
        response.PKM = dummyCompany.PKM;
        response.ROA = dummyCompany.ROA;
        response.ROE = dummyCompany.ROE;

        // Eff
        response.EffSect = dummyCompany.sektor_efektiivsus_protsentiil;
        response.EffSize = 0;
        response.EffCount = 0;
        // Liq
        response.LiqSect = 0;
        response.LiqSize = 0;
        response.LiqCount = 0;
        // Lev
        response.LevCount = 0;
        response.LevSize = 0;
        response.LevSect = 0;
        // Ret
        response.RetCount = 0;
        response.RetSize = 0;
        response.RetSect = 0;
        // Emp
        response.EmpCount = 0;
        response.EmpSize = 0;
        response.EmpSect = 0;
        
        return response;
    }

    private parseString(str: string): { min: number; max: number } {
        const parts = str.split("_");
        // Check if there are at least 3 parts (minimum for 1, value, and 9)
        if (parts.length < 3) {
            throw new Error("Invalid format: String must have at least three parts separated by underscores");
        }
        const min = parseInt(parts[1]);
        const max = parseInt(parts[parts.length - 1]); // Access last element

        if (isNaN(min) || isNaN(max)) {
            throw new Error("Invalid format: Both values must be numbers");
        }
        return { min, max };
    }


    public async predict(companyData: CompanyData, model: Model): Promise<Prediction> {
        const data = this.prepareData(companyData);
        const tensor = await this.tensor(data);
        const loadedModel = await this.loadModel(companyData.Klaster, model);

        // This has to be awaited
        const prediction = await (loadedModel.predict(tensor) as tf.Tensor);
        const dataSync =  prediction.dataSync();

        return {
            x: dataSync[0],
            y: dataSync[1],
            z: dataSync[2]
        }
    }

    
}