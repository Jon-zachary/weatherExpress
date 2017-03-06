var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('request------>',)
  res.render('index', { title: 'WeatherExpress',coords:{},temp:'',forecast:[],loc:''});
});



module.exports = router;
