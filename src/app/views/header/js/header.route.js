(function() {
  'use strict';

  angular
    .module('views.header')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider) {
    $stateProvider
      .state('home.header', {
        url : "/header",
        templateUrl: 'app/views/header/header.html',
        controller: 'HeaderController',
        controllerAs: 'header'
      });

  }

})();
