var express = require('express');
var router = express.Router();
var axios = require('axios');


router.get('/', function(req,res,next){
const google_key=process.env.GOOGLE_KEY;
const val = req.query.location;
console.log(val);
const url = 'https://maps.googleapis.com/maps/api/geocode/json?address='+ val+'&key=' + google_key;

axios.get(url)
.then(function(response) {
  const coords ={lat:response.data.results[0].geometry.location.lat,
                 lng:response.data.results[0].geometry.location.lng};
                 console.log(coords.lat);
  res.send(coords);
  });
    
});



module.exports = router;