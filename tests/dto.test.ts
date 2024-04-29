import CompanyDTO from "../src/dto";
import { testData } from "./data";

describe("Data Transfer Object", () => {

    test('deserialize', () => {
        let cleanedJSON = JSON.stringify(testData).replace(/"NA"/g, "0");

        let cleanedData = JSON.parse(cleanedJSON);
        
        let companyData = CompanyDTO.deserialize(cleanedData);

        expect(companyData).toBeInstanceOf(CompanyDTO);
        expect(companyData.companyID).toBe(11344088);
    });
});

