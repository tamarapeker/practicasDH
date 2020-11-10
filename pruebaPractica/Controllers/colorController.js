const colorController = {
    color: function(req,res){
        var color= req.params.nombrecolor
        res.render('color',{color:color});
    }
}

module.exports = colorController;