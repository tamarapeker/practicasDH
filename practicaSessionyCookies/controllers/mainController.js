const mainController = {
    vista: function(req,res,next){
        var numero = req.cookies.numero;
        if(typeof numero == "undefined"){
            numero = 1;
            res.cookie('numero', numero)
        }
        res.render('numero', {numero});
    },
    
    sumar: function(req,res,next){
        var numero = req.cookies.numero;
        numero = Number(numero) + 1;
        res.cookie("numero", numero);
        res.redirect('/numero')
    },

    resetear: function(req,res,next){
        res.cookie("numero", 0);
        res.redirect('/numero')
    }
}

module.exports = mainController;