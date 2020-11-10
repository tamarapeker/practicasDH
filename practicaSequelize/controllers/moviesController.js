const db = require('../database/models');

const moviesController = {
    listar: function(req,res,next){
        db.Movies.findAll()
        .then(function(peliculas){
            res.render("listadoPeliculas", {peliculas});
        })
    },
    detalle: function(req,res,next){
        db.Movies.findByPk(req.params.id, {include: [{association: "generos"}, {association: "actores"}, {association: "actor_movie"}]})
            .then(function(pelicula){
                console.log(pelicula)
                res.render("detallePelicula", {pelicula});
            })
    },
    new: function(req,res,next){
        db.Movies.findAll({order: [
            ["release_date", "DESC"]
        ],
        limit: 5
    })
            .then(function(peliculas){
                res.render("UltimasPeliculas", {peliculas})
            })
    },
    recommended: function(req,res,next){
        db.Movies.findAll({
            where: {
                rating: {[db.Sequelize.Op.gte]:8}
            }
        })
        .then(function(peliculas){
            res.render("peliculasRecomendadas", {peliculas})
        })
    },
    search: function(req,res,next){
        db.Movies.findAll({
            where: {
                title: {[db.Sequelize.Op.like]: '%'+req.body.busqueda+'%'}
            }
        })
        .then(function(peliculas){
            res.render("resultadoBusquedaPeliculas", {peliculas})
        })
    },
    create: function(req, res){
        db.Genres.findAll()
            .then(function(generos){
                return res.render("crearPelicula", {generos})
            })
    },
    store: function(req,res){
        db.Movies.create({
            title: req.body.title,
            rating: req.body.rating,
            awards: req.body.awards,
            release_date: req.body.release_date,
            length: req.body.length,
            genre_id: req.body.genre
        })
        res.redirect('/movies')
    },
    edit: function(req,res){
        let pedidoPelicula = db.Movies.findByPk(req.params.id)
        let pedidoGeneros = db.Genres.findAll()

        Promise.all([pedidoPelicula, pedidoGeneros])
            .then(function([pelicula, generos]){
                res.render("editarPelicula", {pelicula, generos})
            })
    },
    upload: function(req,res){
        db.Movies.update({
            title: req.body.title,
            rating: req.body.rating,
            awards: req.body.awards,
            release_date: req.body.release_date,
            length: req.body.length,
            genre_id: req.body.genre  
        }, {
            where: {
                id: req.params.id
            }
        });
        res.redirect('/movies/detail/' + req.params.id)
    },
    destroy: function(req,res){
        db.Movies.destroy({
            where: {
                id: req.params.id
            }
        });
        res.redirect('/movies')
    },
    agregarRelacion: function(req,res,next){
        let pedidoPeliculas = db.Movies.findAll()
        let pedidoActores = db.Actors.findAll()

        Promise.all([pedidoPeliculas, pedidoActores])
        .then(function([peliculas, actores]){
            res.render('relaciones', {peliculas, actores})
        })
    },
    guardarRelacion: function(req,res,next){
        db.Actor_Movie.create({
            actor_id: req.body.actor,
            movie_id: req.body.movie
        })
        res.redirect('/movies')
    }
};

module.exports = moviesController;