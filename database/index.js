
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/homes');

const homeSchema = new mongoose.Schema({
  propertyId: Number,
  imageId: Number,
  description: String
});

const Home = mongoose.model('Home', homeSchema);

module.exports = Home;
