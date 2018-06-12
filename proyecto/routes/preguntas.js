var express = require('express');
var router = express.Router();

var pregRes = [
    {
        'pregunta': '¿Lenguaje de programación preferido?',
        'rta1': 'Javascript',
        'rta2': 'Java',
        'rta3': 'C#'
    },
    {
        'pregunta': '¿Sistema operativo preferido?',
        'rta1': 'Windows',
        'rta2': 'Linux',
        'rta3': 'Solaris'
    },
    {
        'pregunta': '¿Cuál es browser preferido?',
        'rta1': 'Chrome',
        'rta2': 'Safari',
        'rta3': 'Mozilla Firefox'
    },
    {
        'pregunta': '¿Cuál es su editor de texto preferido?',
        'rta1': 'Sublime',
        'rta2': 'Atom',
        'rta3': 'Visual Studio Code'
    }
    ]

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log(JSON.stringify(pregRes))
    res.send(JSON.stringify(pregRes));
  });
  
  module.exports = router;
  