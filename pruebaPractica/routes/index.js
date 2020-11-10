var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

const colorController = require('../Controllers/colorController')

router.get('/color/:nombrecolor', colorController.color);

const calcuController = require('../Controllers/calcuController');

router.get('/:operacion/:num1/:num2', calcuController.calculadora);

module.exports = router;
