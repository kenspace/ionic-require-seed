define([
    'ionic'
], function () {
    'use strict';
    angular.module('starter.index', [])
        .controller('IndexCtrl', function (service) {
            console.log('IndexCtrl OK');
            service.init();
        });
});


