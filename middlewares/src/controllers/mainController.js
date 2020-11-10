const mainController = {
    admin: function(req,res,next){
        let user = req.query.user;
        if (user == ("Ada" || "Greta" || "Vim" || "Tim") ){
            res.send('Hola Admin: ' + user);
        }else{
            res.send('No tienes los privilegios para ingresar');
        }
    }
}

module.exports = mainController;