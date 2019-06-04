
const express = require('express');
const port = 3004;
const db = require('../database/index');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/../public'));

app.get('/homes', function(req, res) {
  res.status(200);
  db.getHomesForServer(function(home) {
    res.json(home);
  });

});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
