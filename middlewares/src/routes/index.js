var express = require('express');
var router = express.Router();



router.get('/', function(req,res,next){
    res.send('Index');
});

router.get('/services', function(req,res,next){
    res.send('services');
});

router.get('/services/design', function(req,res,next){
    res.send('Design');
});

router.get('/adminis', function(req,res,next){
    res.render('usuarios');
})

router.get('/admin', function(req,res,next){
    let user = req.query.user;
    if (user == "Ada" || user =="Greta" || user =="Vim" || user =="Tim" ){
        res.send('Hola Admin: ' + user);
    }else{
        res.send('No tienes los privilegios para ingresar');
    }
});

module.exports = router;