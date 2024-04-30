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

        if (!regNr) {
            return sendError(res, 'company-not-found');
        }
        let analyzer = new ModelRunner();
        let prediction = await analyzer.response(`${regNr}`);
        const response = prediction.serialize();
        res.send(response);
    }

    public async response(registCo: string ) : Promise<PredictionEntity>  {
        let dummyData = dummyCompanyResponse;
        let dummyCompany = CompanyEntity.deserialize(dummyData);

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

        

        response.county = dummyCompany.Maakond;
        response.kov = dummyCompany.KOV;

        // response.LVKK = dummyCompany.LVKK;
        // response.MVK = dummyCompany.MVK;
        // response.RK = dummyCompany.RK;
        // response.LLLK = dummyCompany.LLLK;
        // response.LLVK = dummyCompany.LLVK;
        // response.LLOK = dummyCompany.LLOK;
        // response.VaKK = dummyCompany.VaKK;
        // response.LVKaK = dummyCompany.LVKaK;
        // response.VKK = dummyCompany.VKK;
        // response.VK = dummyCompany.VK;
        // response.KOS = dummyCompany.KOS;
        // response.LKKKK = dummyCompany.LKKKK;
        // response.PKKKK = dummyCompany.PKKKK;
        // response.AKM = dummyCompany.AKM;
        // response.PKM = dummyCompany.PKM;
        // response.ROA = dummyCompany.ROA;
        // response.ROE = dummyCompany.ROE;

        // Transfering values from company to response
        Object.keys(dummyCompany).forEach((key) => {
            if (Object.keys(response).includes(key)) {
                logger.debug('Transfering values from company:' + 'Key: ' + key + ' Value: ' + dummyCompany[key]);
                response[key] = dummyCompany[key];
            }
        })

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