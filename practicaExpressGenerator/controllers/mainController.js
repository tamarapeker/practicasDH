const mainController = {
    vistaIndex: function(req,res){
        res.send('Ni Superman, Iron Man o La Mujer Maravilla son tan importantes cómo las y los Heroes de carne y hueso que encontrarás en este sitio. Esperamos que ellas y ellos te sirvan como inspiración para poder cumplir tus objetivos. Recuerda: ¡nunca pares de creer en ti!.')
    },

    vistaCreditos: function(req,res){
        res.send('Grupo 2: ML, JMR, TP');
    },

    vistaError: function(req,res){
        res.status(404).send('404 not found. <br> ¡Houston, poseemos problemas!');
    }

}

module.exports = mainController;