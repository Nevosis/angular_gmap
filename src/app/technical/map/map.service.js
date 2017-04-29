(function() {
  'use strict';

  angular
    .module('technical.map')
    .factory('mapService',mapService);

    /* @ngInject */
    function mapService(logService, $q) {

        var markerList = [];
        var map;
        var geocoder;

        var service = {
            initMap: initMap,
            markerList: markerList,
            addMarkerFromCoords: addMarkerFromCoords,
            getCoordsFromAddress: getCoordsFromAddress
    	}

    	return service;


        function initMap(mapToInit) {
            map = mapToInit;
            geocoder = new google.maps.Geocoder();
        }


        function addMarkerFromCoords(coords) {
            logService.log("add marker at coord [" + coords.lat + "," + coords.lng + "]");

            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(coords.lat, coords.lng)
            });
            markerList.push(marker);
            marker.setMap(map);
        }

        function getCoordsFromAddress(address) {
            var deferred = $q.defer();
            logService.log("get coord from address : " + address)

            geocoder.geocode({'address': address}, function(results, status) {
                if (status === 'OK') {
                    var coords = {
                        lat : results[0].geometry.location.lat(),
                        lng : results[0].geometry.location.lng()
                    }
                    logService.log("Coord from address : " + address + " : ", coords);

                    deferred.resolve(coords);
                } else {
                    logService.warn("err geocoding");
                    deferred.reject();
                }
            });
            return deferred.promise;
        }


    }

})();
