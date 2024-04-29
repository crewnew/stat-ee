"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dto_1 = __importDefault(require("../src/dto"));
const data_1 = require("./data");
describe("Data Transfer Object", () => {
    it('should throw Error if provided data for serialization if incorrect', () => {
        expect(() => dto_1.default.deserialize(data_1.testData)).toThrow();
    });
    test('deserialize', () => {
        let companyData = dto_1.default.deserialize(data_1.testData);
        expect(companyData).toMatchObject(data_1.testData);
    });
});
