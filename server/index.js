const express = require('express');
const bodyParser = require('body-parser');
// const dbController = require('../database/mongoDB/homeImgController.js/index.js');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
// const db = require('../database/mongoDB/index');
const db = require('../database/postgreSQL/index');
const port = 3004;

app.use(morgan('tiny'));
app.use(express.static(__dirname + '/../public'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));




app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.post('/homes', (req, res) => {//CREATE
  let newHome = req.body.home;
 db.getLastId((err, lastId) => {
    if(err){
      console.log(err);
      return;
    }
    newHome.id = lastId + 1;
   db.postRelatedHome(newHome, (err) => {
      if(err){
        console.log(err);
        return;
      }
      res.sendStatus(200);
    })
  });
});

app.get('/homes', (req, res) => {//READ
  //trigger database query for 12 entries
  //sorting and establishing of relation should be handled within the function that makes the query
  let thisHome = req.body;
 db.getHomeinfo(thisHome, (err, result) => {
    if(err) {
      console.log(err);
      res.status(403).send(err);
    } else {
      // sends the sorted results back to the client
      res.status(200).send(result);
    }
  });
});
// app.put('/homes/:id', (req, res) => {//UPDATE
//   if (req.params.id ){
//    db.updateRelatedHome(req.params.id, req.body.updates, (err, document) => {
//       if (err){
//         console.log(err);
//         return;
//       }
//       console.log('Successfully updated Home', document.id);
//       res.sendStatus(200);
//     });
//   } else {
//     res.sendStatus(200);
//   }
// });
// app.delete('/homes/:id', (req, res) => {//DELETE
//   console.log('Deleting Home', req.params.id);
//   if(req.params.id){
//     dbController.deleteRelatedHome(req.params.id, (err) => {
//       if(err){
//         console.log(err);
//         return;
//       }
//       res.sendStatus(200);
//       console.log('Successfully deleted Home', req.params.id);
//     });
//   } else {
//     res.sendStatus(200);
//   }
// });

app.use((req, res) => {
  console.log('Invalid path');
  res.sendStatus(404);
});


module.exports = app;