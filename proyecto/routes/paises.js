var express = require('express');
var router = express.Router();

var paises = {
    "paises":[
        {"nombre":"Argentina", "codigo":"AR"},
        {"nombre":"Bolivia", "codigo":"BO"}, 
        {"nombre":"Brasil", "codigo":"BR"},
        {"nombre":"Chile", "codigo":"CL"},
        {"nombre":"Paraguay", "codigo":"PY"},
        {"nombre":"Uruguay", "codigo":"UY"}
    ]
    }

    /* GET home page. */
router.get('/', function(req, res, next) {
    console.log(JSON.stringify(paises))
    res.send(JSON.stringify(paises));
  });
  
  module.exports = router;