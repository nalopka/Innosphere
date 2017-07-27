function myMap() {
  	var map;
    map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 45.777555, lng: 15.989414},
  	scrollwheel: false,
    zoom: 16,
    navigationControl: false,
   	mapTypeControl: false,
   	scaleControl: false,
   	draggable: false
    });
}