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