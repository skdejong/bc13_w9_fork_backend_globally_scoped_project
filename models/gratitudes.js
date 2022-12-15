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


/*
This app is a simple gratitude journal where users can add and delete items from a list. 
The app uses React for its frontend, and Express for its backend. 
The app also uses a PostgreSQL database to store the gratitudes. 
The app includes a few different components, including Gratitude, GratitudeInput, GratitudeList, and Joke. 

Gratitude is the main component and it is responsible for rendering the other components and handling data manipulation. 

GratitudeInput is responsible for capturing the user input and adding it to the gratitude list. 

GratitudeList displays the items on the gratitude list, and Joke is a separate component that fetches a random joke from an external API.
*/