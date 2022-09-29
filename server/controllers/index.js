const { findPlants, createPlants, updatePlants, updateAllPlants, removePlants, pullWeather, addWeather } = require('../models');

const getPlants = async (req, res) => {
  try {
    let result = await findPlants();
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
      lastFertilized: req.body.fertilized,
      soilType: req.body.soilType,
      addedToGarden: Date.now(),
    }
    await createPlants(params);
    res.sendStatus(204);
  } catch {
    res.sendStatus(404);
  }
}

const putPlants = async (req, res) => {
  try {
    if (req.body.id === undefined) {
      if (req.body.watered !== undefined) {
        await updateAllPlants({lastWatered: req.body.watered});
        res.sendStatus(204);
      } else {
        await updateAllPlants({lastFertilized: req.body.fertilized});
        res.sendStatus(204);
      }
    } else {
      if (req.body.watered !== undefined) {
        await updatePlants({_id: req.body.id}, {lastWatered: req.body.watered});
        res.sendStatus(204);
      } else {
        await updatePlants({_id: req.body.id}, {lastFertilized: req.body.fertilized});
        res.sendStatus(204);
      }
    }
  } catch {
    res.sendStatus(404);
  }
}

const getWeather = async (req, res) => {
  try {
    let result = await pullWeather();
    res.send(result)
  } catch {
    res.sendStatus(404);
  }
}

const postWeather = async (req, res) => {
  try {
    await addWeather(JSON.stringify(req.body.weather))
    res.sendStatus(204)
  } catch {
    res.sendStatus(404);
  }
}

const deletePlants = async (req, res) => {
  try {
    await removePlants(req.params.id);
    res.sendStatus(204);
  } catch {
    res.sendStatus(404);
  }
}

module.exports.getPlants = getPlants;
module.exports.postPlants = postPlants;
module.exports.putPlants = putPlants;
module.exports.deletePlants = deletePlants;
module.exports.getWeather = getWeather;
module.exports.postWeather = postWeather;