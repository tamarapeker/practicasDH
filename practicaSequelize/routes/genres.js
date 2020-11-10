const path = require('path');
var express = require('express');
var router = express.Router();

const genresController = require(path.resolve(__dirname, '../controllers/genresController'))

router.get('/', genresController.listado);

router.get('/:id', genresController.detail);

module.exports = router;