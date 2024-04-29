import CompanyDto from "../src/company_data";
import { testCompanyResponse } from "./test_company_response";

describe("Company Data", () => {
    test('should deserialize', () => {
        let companyData = CompanyDto.deserialize(testCompanyResponse);

        expect(companyData).toBeInstanceOf(CompanyDto);
        expect(companyData).toMatchObject(testCompanyResponse);
    });

    test('should serialize', () => {
        let companyData = CompanyDto.deserialize(testCompanyResponse);

        let serializedData = companyData.serialize();

        expect(serializedData).toMatchObject(testCompanyResponse);
    });
});

