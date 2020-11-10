const db = require('../database/models');

const actorsController = {
    listar: function(req,res,next){
        db.Actors.findAll()
        .then(function(actores){
            res.render("listadoActores", {actores});
        })
    },
    detalle: function(req,res,next){
        db.Actors.findByPk(req.params.id, {include: [{association: "peliculas"}]})
            .then(function(actor){
                res.render("detalleActor", {actor});
            })
    },
    recommended: function(req,res,next){
        db.Actors.findAll({
            where: {
                rating: {[db.Sequelize.Op.gte]:6}
            }
        })
        .then(function(actores){
            res.render("actoresRecomendados", {actores})
        })
    },
    search: function(req,res,next){
        db.Actors.findAll({
            where: {
                first_name: {[db.Sequelize.Op.like]: '%req.body.busqueda%'}
            }
        })
        .then(function(actores){
            console.log(actores)
            res.render("resultadoBusquedaActores", {actores})
        })
    },
    create: function(req, res){
        
        res.render("crearActor")
    },
    store: function(req,res){
        db.Actors.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            rating: req.body.rating
        })
        res.redirect('/actors')
    },
    edit: function(req,res){
        db.Actors.findByPk(req.params.id)
            .then(function(actor){
                res.render("editarActor", {actor})
            })
    },
    upload: function(req,res){
        db.Actors.update({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            rating: req.body.rating 
        }, {
            where: {
                id: req.params.id
            }
        });
        res.redirect('/actors/detail/' + req.params.id)
    },
    destroy: function(req,res){
        db.Actors.destroy({
            where: {
                id: req.params.id
            }
        });
        res.redirect('/actors')
    }
};

module.exports = actorsController;