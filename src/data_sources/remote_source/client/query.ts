import { oracleQuery } from "./oracle";
import { pgQuery } from "./postgres";
import cleanifyJson from "../../../utils/json_cleaner";

require('dotenv').config();
let { DATABASE } = process.env;

export async function query(pg: string, oracle: string, values: any[] | undefined): Promise<Record<string, any>> {
    switch (DATABASE) {
        case 'postgres':
            const pgResponse = await pgQuery(pg, values);
            const pgJson = cleanifyJson(pgResponse.rows[0]);
            return pgJson;
        case 'oracle':
            const oracleResponse =await oracleQuery(oracle, values);
            const oracleJson = cleanifyJson(oracleResponse.rows[0]);
            return oracleJson;
        default:
            throw new Error('Database not found');
    }
}
