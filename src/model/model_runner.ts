import CompanyData from "../company/company_entity";
import * as tf from '@tensorflow/tfjs';
import { Model } from "./model";
import ClusterRepository from "../cluster/cluster_repository";
import ClusterEntity from "src/cluster/cluster_entity";



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
        let port = process.env.PORT || 3000;
        let domain = process.env.DOMAIN || 'localhost';
        let protocol = process.env.PROTOCOL || 'http';

        let path = `${protocol}://${domain}:${port}/static/`;
            
        // return tf.loadLayersModel(root + 'models/' + model + '_' + cluster + '.h5');
        return tf.loadLayersModel(path + 'efektiivsus_k4_1/model.json');
    }



    public async predict(companyData: CompanyData, model: Model): Promise<tf.Tensor> {
        const data = this.prepareData(companyData);
        const tensor = await this.tensor(data);
        const loadedModel = await this.loadModel(companyData.Klaster, model);

        return (loadedModel.predict(tensor) as tf.Tensor);
    }

    
}