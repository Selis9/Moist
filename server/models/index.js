const { Plants, Weather } = require('../database/db');

const findPlants = () => Plants.find();

const createPlants = (data) => Plants.create(data);

const updatePlants = (plantId, data) => Plants.findByIdAndUpdate(plantId, data);

const updateAllPlants = (data) => Plants.updateMany({}, data);

const removePlants = (plantId) => Plants.findByIdAndDelete(plantId);

const pullWeather = () => Weather.find();

const addWeather = (data) => Weather.create({pullDate: Date.now(), weatherData: data})

module.exports.findPlants = findPlants;
module.exports.createPlants = createPlants;
module.exports.updatePlants = updatePlants;
module.exports.removePlants = removePlants;
module.exports.updateAllPlants = updateAllPlants;
module.exports.addWeather = addWeather;
module.exports.pullWeather = pullWeather;
