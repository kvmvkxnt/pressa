import pkg, { PoolClient } from "pg";
import { pgConfig } from "../config/index.js";

const pool = new pkg.Pool(pgConfig);

export async function fetch(SQL: string, ...params: any[]) {
  const client: PoolClient = await pool.connect();
  try {
    const { rows: [row] } = await pool.query(SQL, params.length ? params : undefined);
    return row;
  } catch (e) {
    //console.error(e);
    return e;
  } finally {
    client.release();
  }
};

export async function fetchAll(SQL: string, ...params: any[]) {
  const client: PoolClient = await pool.connect();
  try {
    const { rows } = await pool.query(SQL, params.length ? params : undefined);
    return rows;
  } catch (e) {
    //console.error(e);
    return e;
  } finally {
    client.release();
  }
};
