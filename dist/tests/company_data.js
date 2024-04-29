"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const company_data_1 = __importDefault(require("../src/company_data"));
const test_company_response_1 = require("./test_company_response");
describe("Company Data", () => {
    test('should deserialize', () => {
        let companyData = company_data_1.default.deserialize(test_company_response_1.testCompanyResponse);
        expect(companyData).toBeInstanceOf(company_data_1.default);
        expect(companyData).toMatchObject(test_company_response_1.testCompanyResponse);
    });
    test('should serialize', () => {
        let companyData = company_data_1.default.deserialize(test_company_response_1.testCompanyResponse);
        let serializedData = companyData.serialize();
        expect(serializedData).toMatchObject(test_company_response_1.testCompanyResponse);
    });
});
