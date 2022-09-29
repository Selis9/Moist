const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/plants');

const plantsSchema = new mongoose.Schema({
  plant: String,
  name: String,
  plantAge: Date,
  location: String,
  container: String,
  lastWatered: Date,
  lastFertlized: Date,
  soilType: String,
  addedToGarden: Date,
  imageURL: String,
})

const Plants = mongoose.model('plants', plantsSchema);

module.exports.Plants = Plants;


