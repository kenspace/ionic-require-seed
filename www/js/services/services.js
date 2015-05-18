define([
    'ionic'
], function () {
    'use strict';
    angular.module('starter.services', [])
        .factory('service', [function () {
            var service = {
                init:function(){
                    console.log("service is ok!");
                }
            };
            return service;
        }]);
});