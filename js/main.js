// function myMap() {
//     var mapOptions = {
//         center: new google.maps.LatLng(40.801145, -73.957511),
//         zoom: 15,
//         mapTypeId: 'roadmap'
//     };
// var map = new google.maps.Map(document.getElementById("map"), mapOptions);
//
// }
// // google.maps.event.addDomListener(window, "load", myMap);
//
// document.addEventListener("DOMContentLoaded", () => {
//   myMap();
// });

// function myMap() {
//   var pin = {lat:40.800545, lng:-73.958111}
//     var mapOptions = {
//         center: new google.maps.LatLng(40.800545, -73.958111),
//         zoom: 15,
//         mapTypeId: 'roadmap'
//     };
//
// var map = new google.maps.Map(document.getElementById("map"), mapOptions);
// var marker = new google.maps.Marker({
//         position: pin,
//         map: map
//       });
//
// brooklynMap();
// }
//
// function brooklynMap(){
//   var pin = {lat:40.717536, lng:-73.950475}
//   var mapOptions = {
//       center: new google.maps.LatLng(40.717536, -73.950475),
//       zoom: 17,
//       mapTypeId: 'roadmap'
//   };
// var bkmap = new google.maps.Map(document.getElementById("bkmap"), mapOptions);
// var marker = new google.maps.Marker({
//       position: pin,
//       map: bkmap
//     });
// }
// var GOOGLE_MAP_KEY = config.MAP_KEY;
//
// function loadScript() {
//   var script = document.createElement('script');
//   script.type = 'text/javascript';
//   script.src = 'https://maps.googleapis.com/maps/api/js\?' +
//     '&key=' + GOOGLE_MAP_KEY + "&callback=myMap";
//     document.body.appendChild(script);
//   }
//
//   window.onload = loadScript;
