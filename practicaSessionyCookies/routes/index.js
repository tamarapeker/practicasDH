var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

const mainController = require('../controllers/mainController');

router.get('/numero', mainController.vista);

router.get('/sumaruno', mainController.sumar);
router.get('/volvera0', mainController.resetear);

module.exports = router;
