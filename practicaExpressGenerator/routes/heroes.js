var express = require('express');
var router = express.Router();
const heroesController = require('../controllers/heroesController')

router.get('/', heroesController.vistaHeroes);

router.get('/detalle/:id', heroesController.vistaHeroesDetalle);

router.get('/bio/:id/:ok?', heroesController.vistaHeroesBio);

module.exports = router;