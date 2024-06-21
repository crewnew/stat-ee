import { Request, Response } from 'express';
import { getYearly } from '../../../../data_sources';
import { logger, sendError } from '../../../../utils';
import { computeYearly } from 'src/model';

export default async function(req: Request, res: Response): Promise < any > {
    try {
        const id = parseInt(req.params.id as string);
        const aastased = await getYearly(id);
        let prediction = await computeYearly(aastased);
        // For 200 OK responses, the body should directly include the actual data as defined by Palgastatistka.
        const response = {
            ...prediction.serialize(),
            ...aastased.serialize()
        };
        res.send({ response: response });
    } catch(error) {
        console.log(error);
        switch (error.message) {
            case 'Insufficient data':
                return sendError(res, "insufficient-data");
            case "Company not found":
                return sendError(res, "company-not-found");
            case "Cluster not found":
                return sendError(res, "cluster-not-found");
            default:
                console.log(error);
                logger.debug(error);
                return sendError(res, "bad-request");
        }
    }
}