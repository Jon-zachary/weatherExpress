
function success(position) {
   const pos = position.coords;
   document.querySelector("#lat").innerHTML=pos.latitude;
   document.querySelector("#lng").innerHTML=pos.longitude;

}
function useCurrentLoc() {
  document.querySelector("#lat").innerHTML="loading...";
  document.querySelector("#lng").innerHTML="loading...";
  navigator.geolocation.getCurrentPosition(success);
}