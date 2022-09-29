const { findPlants, createPlants, updatePlants, removePlants } = require('../models');

const getPlants = async (req, res) => {
  try {
    let result = await findPlants();
    console.log('result sending back', result)
    res.send(result);
  } catch {
    res.sendStatus(404);
  }
}

const postPlants = async (req, res) => {
  try {
    let params = {
      plant: req.body.plant,
      name: req.body.name,
      plantAge: req.body.planted,
      location: req.body.location,
      lastWatered: req.body.watered,
      lastWateredTime: req.body.time,
      lastFertlized: req.body.fertilized,
      soilType: req.body.soilType,
      addedToGarden: Date.now(),
    }
    console.log('HERE IN CONTROLLER!')
    await createPlants(params);
    res.sendStatus(204);
  } catch {
    res.sendStatus(404);
  }
}

const putPlants = async (req, res) => {
  let params = {
    name: req.body.name,
    lastWatered: req.body.watered,
    lastFertlized: req.body.fertlized,
  };
  try {
    await updatePlants(req.body.id, params);
    res.sendStatus(204);
  } catch {
    res.sendStatus(404);
  }
}

const deletePlants = async (req, res) => {
  try {
    await removePlants(req.body.id);
    res.sendStatus(204);
  } catch {
    res.sendStatus(404);
  }
}

module.exports.getPlants = getPlants;
module.exports.postPlants = postPlants;
module.exports.putPlants = putPlants;
module.exports.deletePlants = deletePlants;