require('dotenv').config();
var axios = require('axios');

function googleCall(req,res,next){
const google_key=process.env.GOOGLE_KEY; 
const dark_sky_key=process.env.DARK_SKY_KEY;
const url = 'https://maps.googleapis.com/maps/api/geocode/json?address='+req.query.location+'&key=' + google_key;
axios.get(url)
.then(function(response) {
 res.locals.lat =response.data.results[0].geometry.location.lat;
 res.locals.lng=response.data.results[0].geometry.location.lng;
 res.locals.loc = response.data.results[0].address_components[2].long_name;
  });
console.log('locals>>>>>>',res.locals);
next();
}

function darkskyCall(req,res,next) {

  const google_key=process.env.GOOGLE_KEY; 
  const dark_sky_key=process.env.DARK_SKY_KEY;
  const url2=`https://api.darksky.net/forecast/${dark_sky_key}/${res.locals.lat},${res.locals.lng}/`;
   axios.get(url2)
  .then(function(response) {
    const temp= response.data.currently.temperature;
    const forecast = response.data.daily.data;
    res.render("index",{title: "WeatherExpress",coords:coords,temp:temp,forecast:forecast,loc:res.locals.loc});
  });
  next();
}

module.exports = {
  googleCall,
  darkskyCall
};