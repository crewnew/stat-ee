"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("../src/model");
describe("Model", () => {
    test("should stringify to estonian", () => {
        expect(model_1.Model.Liquidity).toBe("likviidsus");
        expect(model_1.Model.Efficiency).toBe("efektiivsus");
        expect(model_1.Model.Structure).toBe("struktuur");
        expect(model_1.Model.Profitability).toBe("tasuvus");
    });
});
