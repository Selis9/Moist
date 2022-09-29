const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/plants');

const plantsSchema = new mongoose.Schema({
  plant: String,
  name: String,
  plantAge: Date,
  location: String,
  container: String,
  lastWatered: Date,
  lastFertilized: Date,
  soilType: String,
  addedToGarden: Date,
  imageURL: String,
})

const weatherSchema = new mongoose.Schema({
  weatherData: String,
  pullDate: Date,
})

const Plants = mongoose.model('plants', plantsSchema);
const Weather = mongoose.model('weather', weatherSchema);

module.exports.Plants = Plants;
module.exports.Weather = Weather;


