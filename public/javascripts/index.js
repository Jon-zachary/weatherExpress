
function useCurrentLoc() {
 document.querySelector('#location').value='Loading...';
  navigator.geolocation.getCurrentPosition(success());
}

function success(position) {
   const pos = position.coords;
   console.log(pos);
   document.querySelector('#location').value=pos.latitude+","+pos.longitude;
   document.forms["searchForm"].submit();
}

