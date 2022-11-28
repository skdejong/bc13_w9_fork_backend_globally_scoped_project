import pg from 'pg';

const databaseURL = process.env.DATABASE_URL;

const pool = new pg.Pool({
    connectionString: databaseURL,
  });

  export default pool
  // module.exports = {
  //   query: (text, params, callback) => {
  //     return pool.query(text, params, callback)
  //   },
  // }  
