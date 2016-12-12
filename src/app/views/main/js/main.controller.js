(function() {
  'use strict';

  angular
    .module('views.main')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(users,toastr, $scope) {
    var vm = this;

    vm.users = users;

    vm.showToastr = showToastr ;
console.log(vm);
    function showToastr(){
      var i = Math.trunc((Math.random()*10)/5);
    	toastr.success('Hello world!',users[i].firstName+" "+users[i].lastName);
    }
$scope.$on('mapInitialized', function(event, evtMap) {
      console.log(event);
      console.log(evtMap);
      vm.map = evtMap;

      var markers = [];
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(51.5074, 0.1278)
        });
        markers.push(marker);
        marker.setMap(vm.map);
  /*    for (var i=0; i<1000; i++) {
        var latLng = new google.maps.LatLng(markers[i].position[0], markers[i].position[1]);
        $scope.dynMarkers.push(new google.maps.Marker({position:latLng}));
        
        google.maps.event.addListener(markers[i], 'click', function() {
            map.setZoom(8);
            map.setCenter(markers[i].getPosition());
            alert("this is marker" + i);
        })
        
      }
      $scope.markerClusterer = new MarkerClusterer(map, $scope.dynMarkers, {});
*/    });

  }
})();
