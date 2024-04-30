import CompanyEntity from "../../src/company/company_entity";
import { testCompanyResponse } from "./company_test_data";

describe("Company Data", () => {
    test('should deserialize', () => {
        let companyData = CompanyEntity.deserialize(testCompanyResponse);

        expect(companyData).toBeInstanceOf(CompanyEntity);
        expect(companyData).toMatchObject(testCompanyResponse);
    });

    test('should serialize', () => {
        let companyData = CompanyEntity.deserialize(testCompanyResponse);

        let serializedData = companyData.serialize();

        expect(serializedData).toMatchObject(testCompanyResponse);
    });

    test("should clamp maximum values in the entity", () => {
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

        let company = CompanyEntity.deserialize(data);
        const clampedCompany = company.clamp();

        expect(clampedCompany.Kaibevarad).toEqual(250000000);
        expect(clampedCompany.Raha).toEqual(50000000);
        expect(clampedCompany.Lyhiajalised_nouded).toEqual(250000000);
        expect(clampedCompany.Lyhiajalised_finantsinvesteeringud).toEqual(25000000);
        expect(clampedCompany.Varud).toEqual(75000000);
        expect(clampedCompany.Pohivarad).toEqual(250000000);
        expect(clampedCompany.Pikaajalised_nouded).toEqual(250000000);
        expect(clampedCompany.Pikaajalised_finantsinvesteeringud).toEqual(325000000);
        expect(clampedCompany.Kinnisvarainvesteeringud).toEqual(50000000);
        expect(clampedCompany.Materiaalne_pohivara).toEqual(250000000);
        expect(clampedCompany.Immateriaalne_pohivara).toEqual(25000000);
        expect(clampedCompany.Varad_kokku).toEqual(350000000);
        expect(clampedCompany.Lyhiajalised_kohustused).toEqual(100000000);
        expect(clampedCompany.Lyhiajalised_volad).toEqual(75000000);
        expect(clampedCompany.Pikaajalised_kohustused).toEqual(100000000);
        expect(clampedCompany.Pikaajalised_volad).toEqual(75000000);
        expect(clampedCompany.Pikaajalised_laenud).toEqual(150000000);
        expect(clampedCompany.Omakapital).toEqual(250000000);
        expect(clampedCompany.Kohustused_Omakapital_kokku).toEqual(350000000);
        expect(clampedCompany.Myygitulu).toEqual(150000000);
        // expect(clampedData.Muud_aritulud).toEqual(150000000);
        expect(clampedCompany.Muud_arikulud).toEqual(5000000);
        expect(clampedCompany.Toojoukulud).toEqual(15000000);
        expect(clampedCompany.Intressikulud).toEqual(7500000);
        expect(clampedCompany.Arikasum).toEqual(250000000);
        expect(clampedCompany.Aruandeaasta_kasum).toEqual(125000000);

    });

    test("should clamp minimum values in the entity", () => {
        let data = testCompanyResponse;
        data.Arikasum = -125000001;
        data.Aruandeaasta_kasum = -125000001;



        let company = CompanyEntity.deserialize(data);
        const clampedCompany = company.clamp();

        expect(clampedCompany.Arikasum).toEqual(-125000000);
        expect(clampedCompany.Aruandeaasta_kasum).toEqual(-125000000);
    });
});

