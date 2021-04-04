var locations = [
    ['Khulna Branch', 41.1454454,-74.07848],
];

var Center=new google.maps.LatLng(41.1454454,-74.07848);

function initialize() {
    var xzopromap = {
        center:Center,
        zoom:10,
        mapTypeId:google.maps.MapTypeId.ROADMAP
    };

    var map=new google.maps.Map(document.getElementById("googleMap"),xzopromap);

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++){
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            icon:'assets/images/marker.png',
            animation:google.maps.Animation.BOUNCE,
            map: map
        });

        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infowindow.setContent(locations[i][0]);
                infowindow.open(map, marker);
            }
        })(marker, i));
    }

    marker.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);