const path = require('path');
var express = require('express');
var router = express.Router();

const actorsController = require(path.resolve(__dirname, '../controllers/actorsController'))

router.get('/', actorsController.listar);

router.get('/detail/:id', actorsController.detalle);

router.get('/recommended', actorsController.recommended);

router.post('/search', actorsController.search);

router.get('/create', actorsController.create);
router.post('/create', actorsController.store);

router.get('/edit/:id', actorsController.edit);
router.post('/edit/:id', actorsController.upload);

router.post('/delete/:id', actorsController.destroy);

module.exports = router;