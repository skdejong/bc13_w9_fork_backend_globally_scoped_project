import pg from 'pg';

const databaseURL = process.env.DATABASE_URL;

export const pool = new pg.Pool({
    connectionString: databaseURL,
  });

  module.exports = {
    query: (text, params, callback) => {
      return pool.query(text, params, callback)
    },
  }  
