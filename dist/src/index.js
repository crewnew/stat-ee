"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const logger_1 = require("./logger");
const errors_1 = require("./errors");
const http_status_codes_1 = require("http-status-codes");
const analyzer_1 = __importDefault(require("./analyzer"));
const dummy_company_response_1 = require("./dummy_company_response");
const company_data_1 = __importDefault(require("./company_data"));
const model_1 = require("./model");
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use('/static', express_1.default.static('models'));
app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let analyzer = new analyzer_1.default();
    let dummyData = dummy_company_response_1.dummyCompanyResponse;
    let dummyCompany = company_data_1.default.deserialize(dummyData);
    let prediction = yield analyzer.predict(dummyCompany, model_1.Model.Liquidity);
    res.send(prediction.dataSync());
    // res.send('Hello, TypeScript Express!');
}));
/**
 * GET /healthz
 * @summary Check if the server is up and running
 * @return 200 - Success - application/json
 * @tags General
 */
app.get('/healthz', (_req, res) => res.json(http_status_codes_1.ReasonPhrases.OK));
// all other routes should throw 404 not found
app.use('*', (_req, res) => {
    return (0, errors_1.sendError)(res, 'route-not-found');
});
app.listen(port, () => {
    logger_1.logger.info(`Running on port ${port}`);
});
