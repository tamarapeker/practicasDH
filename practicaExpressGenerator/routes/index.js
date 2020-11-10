var express = require('express');
var router = express.Router();
const mainController = require('../controllers/mainController')

/* GET home page. */
router.get('/', mainController.vistaIndex);

router.get('/creditos', mainController.vistaCreditos);

router.get('*', mainController.vistaError);

module.exports = router;
