const { Plants } = require('../database/db');

const findPlants = () => Plants.find();

const createPlants = (data) => Plants.create(data);

const updatePlants = (plantId, data) => Plants.findByIdAndUpdate(plantId, data);

const removePlants = (plantId) => Plants.findOneAndDelete({_id: plantId});

module.exports.findPlants = findPlants;
module.exports.createPlants = createPlants;
module.exports.updatePlants = updatePlants;
module.exports.removePlants = removePlants;

