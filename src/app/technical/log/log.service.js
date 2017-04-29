(function() {
  'use strict';

  angular
    .module('technical.log')
    .factory('logService',logService);

    /* @ngInject */
    function logService($log, CONFIG){
    	var service = {
            log: log,
            warn: warn,
            info: info,
            error: error,
            debug: debug
    	}

    	return service;

        function log(message) {
            if (CONFIG.LOG_LEVEL < 2)
                $log.log(message);
        }
        function warn(message) {
            if (CONFIG.LOG_LEVEL < 3)
                $log.warn(message);
        }
        function info(message) {
            if (CONFIG.LOG_LEVEL < 1)
                $log.info(message);
        }
        function error(message) {
            if (CONFIG.LOG_LEVEL < 4)
                $log.error(message);
        }
        function debug(message) {
            if (CONFIG.LOG_LEVEL < 1)
                $log.debug(message);
        }

    }

})();
