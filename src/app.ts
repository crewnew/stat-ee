import express, { Request, Response } from 'express';
import { logger } from './utils/logger';
import { sendError } from './utils/errors';
import { ReasonPhrases } from 'http-status-codes';
import ModelRunner from './model/model_runner';


const app = express();
const port = process.env.PORT || 3000;

app.use('/static',express.static('models'))
app.get('/', async (req: Request, res: Response) => new ModelRunner().handleRequest(req, res));

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

