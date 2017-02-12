var express = require('express');
var router = express.Router();
var axios = require('axios');

router.get('/current',function(req,res,next){
  res.send('hello');
});

router.get('/', function(req,res,next){
const google_key=process.env.GOOGLE_KEY; 
const dark_sky_key=process.env.DARK_SKY_KEY;
const val = req.query.location;
const url = 'https://maps.googleapis.com/maps/api/geocode/json?address='+ val+'&key=' + google_key;
axios.get(url)
.then(function(response) {
  const coords ={lat:response.data.results[0].geometry.location.lat,
                 lng:response.data.results[0].geometry.location.lng};
  
  const url2=`https://api.darksky.net/forecast/${dark_sky_key}/${coords.lat},${coords.lng}/`;
  axios.get(url2)
  .then(function(response) {
    const temp= response.data.currently.temperature;
    const forecast = response.data.daily.data;
    console.log(forecast);
    res.render("index",{title: "WeatherExpress",coords:coords,temp:temp,forecast:forecast});
    });
  });
});



module.exports = router;