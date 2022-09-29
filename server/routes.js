const { getPlants, postPlants, putPlants, deletePlants, getWeather, postWeather } = require('./controllers');
const router = require('express').Router();

router.get('/plants', getPlants);
router.post('/plants', postPlants);
router.put('/plants', putPlants);
router.delete('/plants/:id', deletePlants)
router.get('/weather', getWeather)
router.post('/weather', postWeather)

module.exports = router;
