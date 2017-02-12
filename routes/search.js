var express = require('express');
var router = express.Router();
var axios = require('axios');


router.get('/', function(req,res,next){
const google_key=process.env.GOOGLE_KEY; 
const dark_sky_key=process.env.DARK_SKY_KEY;
const val = req.query.location;
const url = 'https://maps.googleapis.com/maps/api/geocode/json?address='+ val+'&key=' + google_key;
axios.get(url)
.then(function(response) {
  const coords ={lat:response.data.results[0].geometry.location.lat,
                 lng:response.data.results[0].geometry.location.lng};
                 res.locals.coords=coords;
  res.render("index",{title: "WeatherExpress",coords:coords});
  const url2='https://api.darksky.net/forecast/e65e7156ea5f28a13d13f2e0f05128c2/'+ coords.lat + ',' +coords.lng;
  axios.get(url2)
  .then(function(response) {
    console.log(response.data.currently.temperature);
  });

  });
});



module.exports = router;