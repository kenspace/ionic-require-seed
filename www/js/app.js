define([
    'ionic',
    'modules/index/controllers',
    'modules/pages/controllers',
    'services/services'
], function (ionic) {
    'use strict';
    return angular.module('starter', [
        'ionic',
        'starter.index',
        'starter.pages',
        'starter.services'
    ])
        .run(['$ionicPlatform',function ($ionicPlatform) {
            $ionicPlatform.ready(function () {
            });
        }])

        .config(['$stateProvider','$urlRouterProvider',function ($stateProvider, $urlRouterProvider) {

            $stateProvider

                .state('index', {
                    url: '/index',
                    templateUrl: 'js/modules/index/index.html',
                    controller: 'IndexCtrl'
                })

                .state('pages', {
                    url: '/pages',
                    templateUrl: 'js/modules/pages/pages.html',
                    controller: 'PagesCtrl'
                });

            $urlRouterProvider.otherwise('/index');

        }]);
});

