const calcuController = {
    calculadora: function(req,res){
        var operacion = req.params.operacion;
        var num1 = parseInt(req.params.num1);
        var num2 = parseInt(req.params.num2);
        if (operacion == 'sumar') {
            let suma = num1 + num2;
            res.send(String(suma));
        } else {
            if(operacion == 'restar'){
                let resta = num1-num2;
                res.send(String(resta));
            }else {
                if (operacion == 'multiplicar') {
                    let multip = num1*num2;
                    res.send(String(multip));
                }else {
                    if(operacion == 'dividir'){
                        if (num2 != 0) {
                            let division = num1/num2;
                            res.send (String(division));
                        } else {
                            res.send('No se puede hacer la division');
                        }
                    }else{
                        res.send('No es una operacion valida');
                    }
                }
            }
        }
    }
}

module.exports = calcuController