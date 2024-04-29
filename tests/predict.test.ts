import CompanyDto from "../src/company_data";
import Predict from "../src/predict";
import { testCompanyResponse } from "./test_company_response";

describe("ValueClamp", () => {


    test("company values should have 64 fields", () => {
        let dummy = {
            "Kaibevarad": 1264534.138,
            "Raha": 263665.0973,
            "Lyhiajalised_nouded": 547916.9381,
            "Lyhiajalised_finantsinvesteeringud": 23347.654,
            "Varud": 410520.6071,
            "Pohivarad": 1103715.564,
            "Pikaajalised_nouded": 228958.1001,
            "Pikaajalised_finantsinvesteeringud": 253953.3118,
            "Kinnisvarainvesteeringud": 83400.31548,
            "Materiaalne_pohivara": 591456.6594,
            "Immateriaalne_pohivara": 34186.38307,
            "Varad_kokku": 2323796.305,
            "Lyhiajalised_kohustused": 658842.9039,
            "Lyhiajalised_volad": 470139.1775,
            "Lyhiajalised_laenud": 198327.8557,
            "Pikaajalised_kohustused": 338982.024,
            "Pikaajalised_volad": 34909.32281,
            "Pikaajalised_laenud": 308294.6126,
            "Kohustused_kokku": 1035645.349,
            "Omakapital": 1327399.716,
            "Kohustused_Omakapital_kokku": 2006638.19,
            "Myygitulu": 2900158.961,
            "Muud_aritulud": 71949.50085,
            "Muud_arikulud": 14413.31745,
            "Toojoukulud": 252457.2673,
            "Arikasum": 189494.8282,
            "Intressikulud": 17141.95433,
            "Aruandeaasta_kasum": 183260.6049,
            "ds_Kaibevarad": 2.314965195,
            "ds_Raha": 33.00497836,
            "ds_Lyhiajalised_nouded": 39.5767172,
            "ds_Lyhiajalised_finantsinvesteeringud": 10.56023103,
            "ds_Varud": 42.22992801,
            "ds_Pohivarad": 35.98033038,
            "ds_Pikaajalised_nouded": 20.01081741,
            "ds_Pikaajalised_finantsinvesteeringud": 15.32600522,
            "ds_Kinnisvarainvesteeringud": 12.98256408,
            "ds_Materiaalne_pohivara": 46.44322675,
            "ds_Immateriaalne_pohivara": 9.405760298,
            "ds_Varad_kokku": 0.4339570232,
            "ds_Lyhiajalised_kohustused": 18.38682061,
            "ds_Lyhiajalised_volad": 36.58764401,
            "ds_Lyhiajalised_laenud": 56.61310282,
            "ds_Pikaajalised_kohustused": 45.27585993,
            "ds_Pikaajalised_volad": 10.66983451,
            "ds_Pikaajalised_laenud": 44.20017742,
            "ds_Kohustused_kokku": 14.74808086,
            "ds_Omakapital": 1.205476876,
            "ds_Kohustused_Omakapital_kokku": 0.9957483498,
            "ds_Myygitulu": 8.375342492,
            "ds_Muud_aritulud": 93.10179726,
            "ds_Muud_arikulud": 54.92724289,
            "ds_Toojoukulud": 31.39984714,
            "ds_Arikasum": 2.741359497,
            "ds_Intressikulud": 29.74109701,
            "ds_Aruandeaasta_kasum": 3.545564192,
            "SKP_jooksevhindades": 27724.98571,
            "SKP_nominaalkasv": 0.08413577234,
            "SKP_pysivhindades": 23867.22857,
            "SKP_reaalkasv": 0.03226959632,
            "Tarbijahinnaindeks": 0.04698830625,
            "Keskmine_kuupalk": 1378.571429,
            "Palgakasv": 0.06448934247,
            "Tooviljakuse_kasv": 0.02431706111,
            "klaster": "k4_1"
        };


        let companyData = CompanyDto.deserialize(testCompanyResponse);

        let dummyFields = Object.values(dummy).length;

        expect(new Predict().getCompanyFields(companyData).length).toEqual(dummyFields);
    });
});