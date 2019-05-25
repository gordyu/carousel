
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/homes');

const homeSchema = new mongoose.Schema({
  propertyId: Number,
  imageId: Number,
  description: String
});

const Home = mongoose.model('Home', homeSchema);

let getHomesForServer = function(callback) {
  Home.find(function(err, repos) {
    if (err) {
      console.log('You done goofed!');
    } else {
      callback(repos);
    }
  })
  .limit(5)
  .sort({ 'name': 1});
}

module.exports.getHomesForServer = getHomesForServer;
module.exports.Home = Home;
