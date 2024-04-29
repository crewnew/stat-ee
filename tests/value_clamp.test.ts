import ValueClamper from "../src/value_clamp";
import CompanyDto from "../src/company_data";
import { testCompanyResponse } from "./test_company_response";

describe("ValueClamp", () => {
    let valueClamper: ValueClamper;

    beforeEach(() => {
        valueClamper = new ValueClamper();
    });

    test("should clamp maximum values in the Dto object", () => {
        let data = testCompanyResponse;
        data.Kaibevarad = 250000001;
        data.Raha = 50000001;
        data.Lyhiajalised_nouded = 250000001;
        data.Lyhiajalised_finantsinvesteeringud = 25000001;
        data.Varud = 75000001;
        data.Pohivarad = 250000001;
        data.Pikaajalised_nouded = 250000001;
        data.Pikaajalised_finantsinvesteeringud = 325000001;
        data.Kinnisvarainvesteeringud = 50000001;
        data.Materiaalne_pohivara = 250000001;
        data.Immateriaalne_pohivara = 25000001;
        data.Varad_kokku = 350000001;
        data.Lyhiajalised_kohustused = 100000001;
        data.Lyhiajalised_volad = 75000001;
        data.Pikaajalised_kohustused = 100000001;
        data.Pikaajalised_volad = 75000001;
        data.Pikaajalised_laenud = 150000001;
        data.Omakapital = 250000001;
        data.Kohustused_Omakapital_kokku = 350000001;
        data.Myygitulu = 150000001;
        // data.Muud_aritulud = 150000001;
        data.Muud_arikulud = 5000001;
        data.Toojoukulud = 15000001;
        data.Intressikulud = 7500001;
        data.Arikasum = 250000001;
        data.Aruandeaasta_kasum = 125000001;
        


        let dto = CompanyDto.deserialize(data);
        const clampedData = valueClamper.apply(dto);

        expect(clampedData.Kaibevarad).toEqual(250000000);
        expect(clampedData.Raha).toEqual(50000000);
        expect(clampedData.Lyhiajalised_nouded).toEqual(250000000);
        expect(clampedData.Lyhiajalised_finantsinvesteeringud).toEqual(25000000);
        expect(clampedData.Varud).toEqual(75000000);
        expect(clampedData.Pohivarad).toEqual(250000000);
        expect(clampedData.Pikaajalised_nouded).toEqual(250000000);
        expect(clampedData.Pikaajalised_finantsinvesteeringud).toEqual(325000000);
        expect(clampedData.Kinnisvarainvesteeringud).toEqual(50000000);
        expect(clampedData.Materiaalne_pohivara).toEqual(250000000);
        expect(clampedData.Immateriaalne_pohivara).toEqual(25000000);
        expect(clampedData.Varad_kokku).toEqual(350000000);
        expect(clampedData.Lyhiajalised_kohustused).toEqual(100000000);
        expect(clampedData.Lyhiajalised_volad).toEqual(75000000);
        expect(clampedData.Pikaajalised_kohustused).toEqual(100000000);
        expect(clampedData.Pikaajalised_volad).toEqual(75000000);
        expect(clampedData.Pikaajalised_laenud).toEqual(150000000);
        expect(clampedData.Omakapital).toEqual(250000000);
        expect(clampedData.Kohustused_Omakapital_kokku).toEqual(350000000);
        expect(clampedData.Myygitulu).toEqual(150000000);
        // expect(clampedData.Muud_aritulud).toEqual(150000000);
        expect(clampedData.Muud_arikulud).toEqual(5000000);
        expect(clampedData.Toojoukulud).toEqual(15000000);
        expect(clampedData.Intressikulud).toEqual(7500000);
        expect(clampedData.Arikasum).toEqual(250000000);
        expect(clampedData.Aruandeaasta_kasum).toEqual(125000000);
        
    });

    test("should clamp minimum values in the Dto object", () => {
        let data = testCompanyResponse;
        data.Arikasum = -125000001;
        data.Aruandeaasta_kasum = -125000001;



        let dto = CompanyDto.deserialize(data);
        const clampedData = valueClamper.apply(dto);

        expect(clampedData.Arikasum).toEqual(-125000000);
        expect(clampedData.Aruandeaasta_kasum).toEqual(-125000000);
    });
});