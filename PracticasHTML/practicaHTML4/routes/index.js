var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/carta',function(req,res){
  res.render('carta');
})

router.get('/contacto',function(req,res){
  res.render('contacto');
})

router.get('/formulario',function(req,res){
  res.render('formulario');
})

module.exports = router;
