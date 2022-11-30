import pg from "pg";

/**
 * The database URL is stored in our local .env file, which should not be pushed to GitHub.
 * Instead we use this variable to store it.
 */
const databaseURL = process.env.DATABASE_URL;

/**
 * Pool manages connections to the database (think librarian with hoses!)
 */
const pool = new pg.Pool({
  connectionString: databaseURL,
});

export default pool;
