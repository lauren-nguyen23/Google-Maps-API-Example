function myMap() {
  var mapProp = {center: new google.maps.LatLng(38.55313948523645, -99.36995093084856), zoom:4}; //center: Kansas
  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
  var marker1 = new google.maps.Marker({position: new google.maps.LatLng(42.35867709790442, -71.06230357608882), map: map}); //Boston
}
