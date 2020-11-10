const fs = require('fs')

const userMiddleware = {
    logMiddleware: function (req,res,next){
        fs.appendFileSync('userLogs.txt', 'El usuario ingreso a la ruta: ' + req.url);
        next();
    }
}



module.exports = userMiddleware;