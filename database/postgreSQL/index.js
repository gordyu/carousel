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
const getHomeinfo = function (req, res) {
    pool.query('SELECT * FROM homeinfo ORDER BY propertyId ASC fetch first 12 rows only', (error, results)=> {
      if (error) {
        throw error
      }
   //  console.log( res)
      res.json(results.rows)
    })
   //console.log(results.rows)
 };
 const createHomeinfo= function (req, res) {
    pool.query('INSERT INTO Homeinfos (propertyId, imageURL, description) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *',  [req.propertyId, req.imageURL, req.description])
      .then(res => {
       console.log(res.rows[0])
      })
      .catch(e => console.error(e.stack))
  }

