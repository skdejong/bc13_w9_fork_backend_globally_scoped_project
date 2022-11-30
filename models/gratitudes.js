import pool from "../db/index.js";

/**
 * Get all gratitudes.
 * @returns all gratitudes from the gratitudes table as an array.
 */
export async function getAllGratitudes() {
  const query = "SELECT * FROM gratitudes";
  const result = await pool.query(query);
  const allGratitudes = result.rows;
  return allGratitudes;
}

/**
 * Add a gratitude to the database.
 * @param {Object} newGratitude - passed in as the body of the request.
 * @returns the object which was just added to the database.
 */
export async function addGratitude(newGratitude) {
  const result = await pool.query(
    `INSERT INTO gratitudes (gratitude) VALUES ($1)RETURNING *`,
    [newGratitude]
  );
  let gratitude = result.rows[0];
  return gratitude;
}

/**
 * Delete a gratitude
 * @param {*} id - request body contains id of row to be deleted from table
 * @returns the deleted object from the table.
 */
export async function deleteGratitude(id) {
  const result = await pool.query(
    `DELETE FROM gratitudes WHERE id = $1 RETURNING *`,
    [id]
  );
  let deletedQuery = result.rows[0];
  return deletedQuery;
}
