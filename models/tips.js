import { pool } from "../db/index.js";

export async function getRandomTip() {
    const sqlQuery = 'SELECT * FROM tips ORDER BY RANDOM() LIMIT 1';
    const result = await pool.query(sqlQuery);
    const tip = result.rows;

    return tip;
}