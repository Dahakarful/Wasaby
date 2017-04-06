wasaby.controller('appController', function ($scope, appFactory, uiGmapGoogleMapApi) {

    $scope.map = {
        center: {
            latitude: 45,
            longitude: -73
        },
        zoom: 8
    };
    
    uiGmapGoogleMapApi.then(function (maps) {
        console.log("console.log");

    });

    //    var map;
    //
    //    var json2 = "buoys.json";
    //        
    //    function initMap() {
    //        var mapOptions = {
    //            zoom: 2,
    //            center: new google.maps.LatLng(48.4000, -4.4833)
    //        };
    //
    //        map_document = document.getElementById('map')
    //        map = new google.maps.Map(map_document, mapOptions);
    //        
    //        appFactory.loadBuoys().then(
    //            function success(response){
    //                var data = resposne.data;
    //                
    //                for (var i = 0; i < data.length; i++) {
    //                //Current object
    //                var obj = data[i]
    //
    //                //Add new marker for the object
    //                var marker = new google.maps.Marker({
    //                    position: new google.maps.LatLng(obj.latitude, obj.longitude),
    //                    map: map,
    //                    title: obj.title
    //                });
    //
    //                //Add new info window for the object
    //                var clicker = addClicker(marker, obj.title + " - " + obj.id);
    //            }
    //        });
    //
    //        //Add new click event listener for the object
    //        function addClicker(marker, content) {
    //            google.maps.event.addListener(marker, 'click', function() {
    //                var infowindow = new google.maps.InfoWindow({
    //                    content: content
    //                });
    //                if (infowindow) {
    //                    infowindow.close();
    //                }
    //                infowindow.open(map, marker);
    //            });
    //        }
    //
    //        //Initialize the map
    //        google.maps.event.addDomListener(window, 'load', initMap);
    //
    //    }
    //
    //    google.maps.event.addDomListener(window, 'load', initMap);
});