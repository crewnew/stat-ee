require('dotenv').config();

let { ORACLE_HOST, ORACLE_DATABASE, ORACLE_USER, ORACLE_PASSWORD, ORACLE_SSL, ORACLE_PORT } = process.env;



export async function oracleQuery(textQuery: string, values: any[] | undefined): Promise<any> {
   
}

