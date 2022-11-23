import { pool } from "../db/index.js";

export async function getRandomGratitude() {
  const sqlQuery = "SELECT * FROM gratitudes";
  const result = await pool.query(sqlQuery);
  const gratitude = result.rows;

  return gratitude;
}

export async function getAllGratitudes() {
  const query = "SELECT * FROM gratitudes";
  const result = await pool.query(query);
  const allGratitudes = result.rows;
  console.log(allGratitudes);
  return allGratitudes;
}
