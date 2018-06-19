var express = require('express');
var router = express.Router();

var respuestas = []

router.get('/', function(req, res, next) {
    console.log(JSON.stringify(respuestas))
    res.send(JSON.stringify(respuestas));
  });


router.post("/", function(req,res){
    var respuesta = {};
    respuesta.pais = req.body.pais;
    respuesta.respuesta1 = req.body.respuesta1;
    respuesta.respuesta2 = req.body.respuesta2;
    respuesta.respuesta3 = req.body.respuesta3;
    respuesta.respuesta4 = req.body.respuesta4;
    
    respuestas.push(respuesta);
    
    return res.send(respuesta);
});


  
  module.exports = router;
  