import { query } from "../db/index.js";

export async function getRandomGratitude() {
  const sqlQuery = "SELECT * FROM gratitudes";
  const result = await query(sqlQuery);
  const gratitude = result.rows;

  return gratitude;
}

export async function addGratitude(newGratitude) {
  const result = await query(`INSERT INTO gratitudes (gratitude) VALUES ($1)RETURNING *`, [newGratitude])
  let gratitude = result.rows[0];
  return gratitude;
}

export async function getAllGratitudes() {
  const query = "SELECT * FROM gratitudes";
  const result = await query(query);
  const allGratitudes = result.rows;
  console.log(allGratitudes);
  return allGratitudes;
}
