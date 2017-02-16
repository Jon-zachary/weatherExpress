require('dotenv').config(); 

var axios = require('axios');

const apiKey=process.env.GOOGLE_KEY; 
const baseURL = 'https://maps.googleapis.com/maps/api/geocode/json?address=';

class GoogleMaps {
  static fetchCoordinates(val) {
    const url = `${baseURL}${val}&key=${apiKey}`;
    return axios.get(url)
         .then((response) => {
           const coords = {
             lat:response.data.results[0].geometry.location.lat,
             lng:response.data.results[0].geometry.location.lng
           };
           const loc = response.data.results[0].address_components[2].long_name;
           return { coords, loc };
         })
         .catch(err => err);
  }
}

module.exports = GoogleMaps;