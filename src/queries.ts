import oracledb from "oracledb";

const dbConfig = {
  user: process.env.ORACLE_USER as string,
  password: process.env.ORACLE_PASSWORD as string,
  connectString: process.env.ORACLE_CONNECTION_STRING as string,
};

interface Row {
  [key: string]: any;
}

async function getLatestAastased(jykood: number): Promise<Row[]> {
  let connection: oracledb.Connection | undefined;

  try {
    connection = await oracledb.getConnection(dbConfig);

    const query = `
      SELECT * FROM (
        SELECT *
        FROM "elujoulisuseindeks"."aastased"
        WHERE "jykood" = :jykood
        ORDER BY "aastased".aasta DESC
      ) WHERE ROWNUM = 1`;

    const result = await connection.execute(query, [jykood]);
    return result.rows as Row[];
  } catch (err) {
    console.error(err);
    throw err;
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
}

async function getFilteredAastased(jykood: number): Promise<Row[]> {
  let connection: oracledb.Connection | undefined;

  try {
    connection = await oracledb.getConnection(dbConfig);

    const query = `
      SELECT * FROM (
        SELECT *
        FROM "elujoulisuseindeks"."aastased"
        WHERE "jykood" = :jykood
        AND "maa_protsent" >= 0.9
        ORDER BY "aastased".aasta DESC
      ) WHERE ROWNUM = 1`;

    const result = await connection.execute(query, [jykood]);
    return result.rows as Row[];
  } catch (err) {
    console.error(err);
    throw err;
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
}

export { getLatestAastased, getFilteredAastased };
