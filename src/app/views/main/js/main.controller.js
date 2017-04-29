(function() {
  'use strict';

  angular
    .module('views.main')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(logService, mapService, $scope) {
    var vm = this;

    $scope.$on('mapInitialized', function(event, evtMap) {
      mapService.initMap(evtMap);

      mapService.getCoordsFromAddress("Paris Bercy").then(function(coords) {
        mapService.addMarkerFromCoords(coords);
      });
    });

  }
})();
