const path = require('path');
var express = require('express');
var router = express.Router();

const moviesController = require(path.resolve(__dirname, '../controllers/moviesController'))

router.get('/', moviesController.listar);

router.get('/detail/:id', moviesController.detalle);

router.get('/new', moviesController.new);

router.get('/recommended', moviesController.recommended);

router.post('/search', moviesController.search);

router.get('/create', moviesController.create);
router.post('/create', moviesController.store);

router.get('/edit/:id', moviesController.edit);
router.post('/edit/:id', moviesController.upload);

router.post('/delete/:id', moviesController.destroy);

router.get('/agregarRelacion', moviesController.agregarRelacion)
router.get('/agregarRelacion', moviesController.guardarRelacion)

module.exports = router;