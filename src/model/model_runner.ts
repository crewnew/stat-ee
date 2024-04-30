import CompanyData from "../company/company_entity";
import * as tf from '@tensorflow/tfjs';
import { Model } from "./model";
import ClusterRepository from "../cluster/cluster_repository";



export default class ModelRunner {
    
    private async tensor(company: CompanyData): Promise<tf.Tensor2D> {

        const clusters = new ClusterRepository();
        const clusterName = company.Klaster;



        let companyCluster = clusters.findByName(clusterName);

        if (!companyCluster) {
            throw new Error('Cluster not found');
        }
       
        let companyClusterData = companyCluster.withCompanyData(company);
        let values = Object.values(companyClusterData).filter((value) => value !== clusterName);    

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
        const tensor = await this.tensor(companyData);
        const loadedModel = await this.loadModel(companyData.Klaster, model);

        return (loadedModel.predict(tensor) as tf.Tensor);
    }

    public getClusterFields(cluster: String): Array<number> {

        switch (cluster) {
            case 'k4_1':
                return [

                    
                ];
        
            default:
                break;
        }
    }

    public getCompanyFields(data: CompanyData): Array<number> {
        return [
            data.Kaibevarad,
            data.Raha,
            data.Lyhiajalised_nouded,
            data.Lyhiajalised_finantsinvesteeringud,
            data.Varud,
            data.Pohivarad,
            data.Pikaajalised_nouded,
            data.Pikaajalised_finantsinvesteeringud,
            data.Kinnisvarainvesteeringud,
            data.Materiaalne_pohivara,
            data.Immateriaalne_pohivara,
            data.Varad_kokku,
            data.Lyhiajalised_kohustused,
            data.Lyhiajalised_volad,
            data.Lyhiajalised_laenud,
            data.Pikaajalised_kohustused,
            data.Pikaajalised_volad,
            data.Pikaajalised_laenud,
            data.Kohustused_kokku,
            data.Omakapital,
            data.Kohustused_Omakapital_kokku,
            data.Myygitulu,
            // t != k
            data.Muud_aritulud,
            data.Muud_arikulud,
            data.Toojoukulud,
            data.Arikasum,
            data.Intressikulud,
            data.Aruandeaasta_kasum,
            data.ds_Kaibevarad,
            data.ds_Raha,
            data.ds_Lyhiajalised_nouded,
            data.ds_Lyhiajalised_finantsinvesteeringud,
            data.ds_Varud,
            data.ds_Pohivarad,
            data.ds_Pikaajalised_nouded,
            data.ds_Pikaajalised_finantsinvesteeringud,
            data.ds_Kinnisvarainvesteeringud,
            data.ds_Materiaalne_pohivara,
            data.ds_Immateriaalne_pohivara,
            data.ds_Varad_kokku,
            data.ds_Lyhiajalised_kohustused,
            data.ds_Lyhiajalised_volad,
            data.ds_Lyhiajalised_laenud,
            data.ds_Pikaajalised_kohustused,
            data.ds_Pikaajalised_volad,
            data.ds_Pikaajalised_laenud,
            data.ds_Kohustused_kokku,
            data.ds_Omakapital,
            data.ds_Kohustused_Omakapital_kokku,
            data.ds_Myygitulu,
            data.ds_Muud_aritulud,
            data.ds_Muud_arikulud,
            data.ds_Toojoukulud,
            data.ds_Arikasum,
            data.ds_Intressikulud,
            data.ds_Aruandeaasta_kasum,
            data.SKP_jooksevhindades,
            data.SKP_nominaalkasv,
            data.SKP_pysivhindades,
            data.SKP_reaalkasv,
            data.Tarbijahinnaindeks,
            data.Keskmine_kuupalk,
            data.Palgakasv,
            data.Tooviljakuse_kasv,
        ]
    }
}