import express, { Request, Response } from 'express';
import { logger } from './utils/logger';
import { sendError } from './utils/errors';
import { ReasonPhrases } from 'http-status-codes';
import {handleVitality} from './routes';

require('dotenv').config();

const app = express();
app.use(require('express-status-monitor')());
app.use('/static', express.static('models'))
app.get('/eestat/1/elujoud/:id', async (req: Request, res: Response) => handleVitality(req, res));

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

app.listen(8080, () => {
    logger.info(`Running on port ${8080}`);
});
