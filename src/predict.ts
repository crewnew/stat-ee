import CompanyData from "./company_data";
import * as tf from '@tensorflow/tfjs';
enum PredictionType {
    Liquidity,
    Efficiency,
    Structure,
    Profitability
}

interface PredictionModel {
    cluster: string;
    type: PredictionType;
    model: any;
}

export default class Predict {
    
    private async tensorflow(company: CompanyData): Promise<any> {
        return tf.tensor2d([], [1, 64])
    }

    public  async predict(companyData: CompanyData, predictionModel: PredictionModel): Promise<any> {
        
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