import pg from 'pg';

const databaseURL = process.env.DATABASE_URL;

export const pool = new pg.Pool({
    connectionString: databaseURL,
  });
