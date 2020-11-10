const db = require('../database/models');

const genresController = {
    listado: function(req,res){
        db.Genres.findAll()
            .then(function(generos){
                res.render("listadoGeneros", {generos})
            })
    },
    detail: function(req,res){
        db.Genres.findByPk(req.params.id, {include: [{association: "peliculas"}]})
            .then(function(genero){
                console.log(genero.peliculas)
                res.render("detalleGenero", {genero})
            })
    }
};

module.exports = genresController;