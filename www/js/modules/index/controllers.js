define([
    'ionic'
], function () {
    'use strict';
    /*
    return (function () {
            var IndexCtrl = function (service) {
                console.log('IndexCtrl OK');
                service.init();
            };
            IndexCtrl.$inject = ['service'];
            angular.module('starter.index')
                .controller('IndexCtrl', IndexCtrl);
        }());
        */


    angular.module('starter.index', [])
        .controller('IndexCtrl', ['service',function (service) {
            console.log('IndexCtrl OK');
            service.init();
        }]);


});
