import { Request, Response } from 'express';
import {  sendError } from '../../../../utils';
import { ModelService } from '../../../../../application';

export  async function handle(req: Request, res: Response): Promise<any> {
    try {
        const jykood = parseInt(req.params.id as string);
        let response = await new ModelService().predictJykood(jykood);
        res.send({ response: response });
    } catch (error) {
        console.log(error);
        switch (error.message) {
            case 'Insufficient data':
                return sendError(res, "insufficient-data");
            case "Company not found":
                return sendError(res, "company-not-found");
            case "Cluster not found":
                return sendError(res, "cluster-not-found");
            default:
                return sendError(res, "bad-request");
        }
    }
}