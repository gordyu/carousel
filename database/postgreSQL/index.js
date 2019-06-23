const {Pool} = require('pg')
const pool = new Pool({
  user: 'jianing',
  host: 'localhost',
  database: 'homeinfo',
  password: 'gjlong',
  port: 5432,
})

pool.connect((err) => {
  if (err) {
    console.error('connection error', err.stack)
  } else {
    console.log('connected')
  }
})


// First in order to drop the table run
// drop table homeInfo
// then run
// CREATE TABLE IF NOT EXISTS
// homeinfo(
//     propertyId SERIAL PRIMARY KEY,
//     imageURL VARCHAR(240) NOT NULL,
//     description VARCHAR(300) NOT NULL
// );
// think  though 
const getHomeinfo = function (query, callback) {
    pool.query('SELECT * FROM homeinfo ORDER BY propertyId ASC fetch first 12 rows only', callback);
   //console.log(results.rows)
 };
 const createHomeinfo= function (req, res) {
    pool.query('INSERT INTO homeinfo (propertyId, imageURL, description) VALUES ($1, $2, $3) RETURNING *',  [req.propertyId, req.imageURL, req.description])
      .then(res => {
       console.log(res.rows[0])
      })
      .catch(e => console.error(e.stack))
  }
  module.exports= {
    getHomeinfo,
    createHomeinfo
  }
