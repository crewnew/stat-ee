import { Model } from "../src/model";

describe("Model", () => {
    test("should stringify to estonian", () => {
        expect(Model.Liquidity).toBe("likviidsus");
        expect(Model.Efficiency).toBe("efektiivsus");
        expect(Model.Structure).toBe("struktuur");
        expect(Model.Profitability).toBe("tasuvus");
    });
});