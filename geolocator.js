//console.log("hello");
var gMapKey = "AIzaSyAKdsnOl2BvH43AjHXyPDPB9S0ZuF2TgIo";

function geoFindMe() {
  var output = document.getElementById("myGeoLocation");

  if (!navigator.geolocation){
    output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
    return;
  }

  function caughtYa(theLocation) {
    var latitude  = theLocation.coords.latitude;
    var longitude = theLocation.coords.longitude;
    // console.log(latitude);
    // console.log(longitude);
    output.innerHTML = '<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>';

    var img = new Image();
    img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=13&maptype=terrain&markers=color:orange%7C" + latitude + "," + longitude + "&size=600x600&key=" + gMapKey + "";
    // console.log(img.src);

    output.appendChild(img);
  };

  function whoops() {
    output.innerHTML = "Whoops, we weren't able to find the location";
  };

  output.innerHTML = "<p>Turning some gears.</p>";

  navigator.geolocation.getCurrentPosition(caughtYa, whoops);
}