var express = require('express');
var router = express.Router();
var axios = require('axios');
const GoogleMaps = require('../services/GoogleMaps');

router.get('/', function(req,res,next){

  const dark_sky_key=process.env.DARK_SKY_KEY;
  const val = req.query.location;

  GoogleMaps.fetchCoordinates(val)
            .then((googleData) => {
              const { coords, loc } = googleData;
              const url2=`https://api.darksky.net/forecast/${dark_sky_key}/${coords.lat},${coords.lng}/`;
              axios.get(url2)
                   .then(function(response) {
                     const temp= response.data.currently.temperature;
                     const forecast = response.data.daily.data;
                     res.render("index",{title: "WeatherExpress",coords:coords,temp:temp,forecast:forecast,loc:loc});
                    })
                   .catch(err => res.status(500).json(err));
            })
            .catch(err => res.status(500).json(err));
});

module.exports = router;