var axios = require('axios');

function useCurrentLoc() {
 document.querySelector('#location').value='Loading...';
  navigator.geolocation.getCurrentPosition(success);
}

function success(position) {
   const pos = position.coords;
   document.querySelector('#location').value=pos.latitude+","+pos.longitude;
   document.forms["searchForm"].submit();
}

