
function success(position) {
   const pos = position.coords;
   document.querySelector('#location').value=pos.latitude+","+pos.longitude;
   document.forms["searchForm"].submit();

}
function useCurrentLoc() {
 document.querySelector('#location').value='Loading...';
  navigator.geolocation.getCurrentPosition(success);
}