import pool  from "../db/index.js";

export async function getRandomGratitude() {
  const sqlQuery = "SELECT * FROM gratitudes";
  const result = await pool.query(sqlQuery);
  const gratitude = result.rows;

  return gratitude;
}

export async function addGratitude(newGratitude) {
  const result = await pool.query(`INSERT INTO gratitudes (gratitude) VALUES ($1)RETURNING *`, [newGratitude])
  let gratitude = result.rows[0];
  return gratitude;
}

export async function getAllGratitudes() {
  const query = "SELECT * FROM gratitudes";
  const result = await pool.query(query);
  const allGratitudes = result.rows;
  return allGratitudes;
}
