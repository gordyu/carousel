const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
// const db = require('../database/index');
const db = require('../cassDB/cassandra');
const app = express();
const port = 3004;

app.use(morgan('tiny'));
app.use(express.static(__dirname + '/../public'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/homes', function(req, res) {
  res.status(200);
  db.getHomesForServer(function(home) {
    res.json(home);
  });

});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
