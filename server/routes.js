const { getPlants, postPlants, putPlants, deletePlants } = require('./controllers');
const router = require('express').Router();

router.get('/plants', getPlants);
router.post('/plants', postPlants);
router.put('/plants', putPlants);
router.delete('/plants', deletePlants)

module.exports = router;
