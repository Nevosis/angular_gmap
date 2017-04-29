(function() {
  'use strict';

  angular
    .module('views.main')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        views: {

            // the main template will be placed here (relatively named)
            '': { 
              templateUrl: 'app/views/main/main.html',
              controller: 'MainController',
              controllerAs: 'main',
              resolve:{
                users: function(usersService){
                  return usersService.getUser();
                }
              } 
            },
            'header' : { //TODO, rien a foutre ici, mettre un main router qui contient header ET content
              templateUrl: 'app/views/header/header.html',
              controller: 'HeaderController',
              controllerAs: 'header'
            }

        }

      });

  }

})();
