
const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index');
const port = 3004;
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/../public'));

app.get('/homes', (req, res) => {
  res.status(200);
  console.log('GET success');
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
