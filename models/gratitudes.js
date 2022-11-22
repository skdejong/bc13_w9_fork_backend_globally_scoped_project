import { pool } from "../db/index.js";

export async function getRandomGratitude() {
    const sqlQuery = 'SELECT * FROM gratitudes ORDER BY RANDOM() LIMIT 1';
    const result = await pool.query(sqlQuery);
    const gratitude = result.rows;

    return gratitude;
}