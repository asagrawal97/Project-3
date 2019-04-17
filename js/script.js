function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 41.921057, lng: -87.633503},
    zoom: 8    });
    
    var infoWindow = new google.maps.InfoWindow({
      content: 'Lincoln Park Zoo';
      });
    
    var marker = new google.maps.Marker({
      position: center,
      map: map,
      icon: 'pics/map.png'
    });
    
    marker.addListener('click', function() {
      infoWindow.open(map, marker);
    });
  }