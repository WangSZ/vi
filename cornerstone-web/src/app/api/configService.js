(function() {
    'use strict';

    angular
        .module('viModule')
        .factory('configService', configService);

    /** @ngInject */
    function configService($log, $http, ApiService) {
        var apiUrl = 'config/';

        var service = {
            apiUrl: apiUrl,
            getAll: function(func) {
                return ApiService.doGet(apiUrl + 'all').then(func);
            },
            get: function(key, func) {
                var rtn = ApiService.doGet(apiUrl + 'get', {
                    'key': key
                });
                if (func) {
                    rtn = rtn.then(func);
                }
                return rtn;
            },
            getRemarks: function(func) {
                return ApiService.doGet(apiUrl + 'remarks').then(func);
            },
            update: function(data, func) {
                return ApiService.doPost(data, apiUrl + 'update').then(func);
            }

        };

        return service;
    }
})();
