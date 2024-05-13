import CompanyData from "../company/company_entity";
import * as tf from '@tensorflow/tfjs';
import { Model } from "./model";
import ClusterRepository from "../cluster/cluster_repository";
import ClusterEntity from "./../cluster/cluster_entity";
import PredictionEntity from "../prediction/response_entity";
import CompanyRepository from "../company/company_repository";
import  { Request, Response } from 'express';
import { sendError } from "../utils/errors";
import { Prediction } from "./../prediction/prediction";

export default class ModelRunner {
    public async handleRequest(req: Request, res: Response): Promise<any> {
        try {
            const id = parseInt(req.params.id as string);
            let prediction = await this.response(id);
            const response = prediction.serialize();
            res.send(response);
        } catch (error) {
            switch (error.message) {
                case 'Company not found':
                    return sendError(res, 'company-not-found');
                case 'Cluster not found':
                    return sendError(res, 'cluster-not-found');
                default:
                    console.log(error);
                    return sendError(res, 'bad-request');
            }
        }

    }


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
        return tf.loadLayersModel(`http://localhost:${process.env.PORT}` + '/static/' + model + '_' + cluster + '/model.json');
    }


    private async response(registCo: number ) : Promise<PredictionEntity>  {
        let repository =  new CompanyRepository();
        // TODO: Change this with findById when the query is implemented
        let company = await repository.fakeFindById(registCo);

        const response = new PredictionEntity();

        response.registCo = registCo;
        const liquidity = await this.predict(company, Model.Liquidity);
        response.model1y1 = liquidity.x;
        response.model1y2 = liquidity.y;
        response.model1y3 = liquidity.z;
        const profitability = await this.predict(company, Model.Profitability);
        response.model2y1 = profitability.x;
        response.model2y2 = profitability.y;
        response.model2y3 = profitability.z;
        const efficiency = await this.predict(company, Model.Efficiency);
        response.model3y1 = efficiency.x;
        response.model3y2 = efficiency.y;
        response.model3y3 = efficiency.z;
        const structure = await this.predict(company, Model.Structure);
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
            const size = this.parseString(company.Ettevotte_suurusklass);
            response.size_min = size.min;
            response.size_max = size.max;
        } catch (error) {
            response.size_min = 0;
            response.size_max = 0;
        }

        response.county = company.Maakond;
        response.kov = company.KOV;

        response.LVKK = company.LVKK;
        response.MVK = company.MVK;
        response.RK = company.RK;
        response.LLLK = company.LLLK;
        response.LLVK = company.LLVK;
        response.LLOK = company.LLOK;
        response.VaKK = company.VaKK;
        response.LVKaK = company.LVKaK;
        response.VKK = company.VKK;
        response.VK = company.VK;
        response.KOS = company.KOS;
        response.LKKKK = company.LKKKK;
        response.PKKKK = company.PKKKK;
        response.AKM = company.AKM;
        response.PKM = company.PKM;
        response.ROA = company.ROA;
        response.ROE = company.ROE;

        // Eff
        response.Eff_p_Sect = company.sektor_efektiivsus_protsentiil;
        response.Eff_n_Sect = 0;
        response.Eff_p_Size = 0;
        response.Eff_n_Size = 0;
        response.Eff_p_Count = 0;
        response.Eff_n_Count = 0;
        // Liq
        response.Liq_p_Sect = 0;
        response.Liq_n_Sect = 0;
        response.Liq_p_Size = 0;
        response.Liq_n_Size = 0;
        response.Liq_p_Count = 0;
        response.Liq_n_Count = 0;
        // Lev
        response.Lev_p_Count = 0;
        response.Lev_n_Count = 0;
        response.Lev_p_Size = 0;
        response.Lev_n_Size = 0;
        response.Lev_p_Sect = 0;
        response.Lev_n_Sect = 0;
        // Ret
        response.Ret_p_Count = 0;
        response.Ret_n_Count = 0;
        response.Ret_p_Size = 0;
        response.Ret_n_Size = 0;
        response.Ret_p_Sect = 0;
        response.Ret_n_Sect = 0;
        // Emp
        response.Emp_p_Count = 0;
        response.Emp_n_Count = 0;
        response.Emp_p_Size = 0;
        response.Emp_n_Size = 0;
        response.Emp_p_Sect = 0;
        response.Emp_n_Sect = 0;
        
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


    private async predict(companyData: CompanyData, model: Model): Promise<Prediction> {
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