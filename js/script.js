function initMap() {
  var zoo = {lat: 41.921057, lng: -87.633503}
  var map = new google.maps.Map(document.getElementById('map'), {center:zoo,zoom: 18});
    
  var marker = new google.maps.Marker({
    position: zoo,
    map: map,
    icon: 'pics/map.png'
  });
  var infoWindow = new google.maps.InfoWindow({
    content: 'Lincoln Park Zoo'
  });
  marker.addListener('click', function() {
    infoWindow.open(map, marker);
  });
}
google.maps.event.addDomListener(window,'load',init);