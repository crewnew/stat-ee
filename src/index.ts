import express, { Request, Response } from 'express';
import { logger } from './logger';
import { sendError } from './errors';
import { ReasonPhrases } from 'http-status-codes';
import Analyzer from './analyzer';
import { dummyCompanyResponse } from './dummy_company_response';
import CompanyDto from './company_data';
import { Model } from './model';

const app = express();
const port = process.env.PORT || 3000;

app.use('/static',express.static('models'))
app.get('/', async (req: Request, res: Response) => {
    let analyzer = new Analyzer();

    let dummyData = dummyCompanyResponse;

    let dummyCompany = CompanyDto.deserialize(dummyData);

    let prediction = await analyzer.predict(dummyCompany, Model.Liquidity);
    res.send(prediction.dataSync());
    // res.send('Hello, TypeScript Express!');
});





/**
 * GET /healthz
 * @summary Check if the server is up and running
 * @return 200 - Success - application/json
 * @tags General
 */
app.get('/healthz', (_req, res) => res.json(ReasonPhrases.OK));

// all other routes should throw 404 not found
app.use('*', (_req, res) => {
    return sendError(res, 'route-not-found');
});

app.listen(port, () => {
    logger.info(`Running on port ${port}`);
});

