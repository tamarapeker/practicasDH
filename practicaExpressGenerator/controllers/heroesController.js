const fs = require('fs');
const heroes = JSON.parse(fs.readFileSync(__dirname + '/../data/heroes.json', 'utf-8'));

const heroesController = {
    vistaHeroes: function (req,res){
        res.send(heroes);
    },

    vistaHeroesDetalle: function(req,res){
        let heroe = req.params.id;
	    for (let i=0; i<heroes.length;i++){
		    if(heroes[i].id == heroe){
			    res.send( 'Hola, mi nombre es ' + heroes[i].nombre + ' y soy ' + heroes[i].profesion);
		    }
        }
        res.send('No encontrado');
    },

    vistaHeroesBio: function(req,res){
        let heroe = req.params.id;
	    for (let i=0; i<heroes.length; i++){
		    if (heroes[i].id == heroe){
			    if (req.params.ok == 'ok'){
				    res.send(heroes[i].nombre + ' ' + heroes[i].resenia);
			    }else{
				    res.send(heroes[i].nombre + ' Lamento que no desees saber más de mi :(');
			    }
		    }
        }
        res.send('No encontramos un héroe para mostrarte su biografía');
    }
}

module.exports = heroesController;