'use strict';

angular.module('myApp', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise(function ($injector, $location) {
        var $state = $injector.get('$state');
        if ($location.$$path === '/' || $location.$$url === '/') {
            $state.go('homepage');
            return;
        }
        $state.go('404');
    });
    //
    // Now set up the states
    $stateProvider
        .state('homepage', {
            url: "/home",
            templateUrl: "home.html",
            controller: 'homeCtrl as ctrl'
        })
        .state('room', {
            url: '/room/:roomName',
            templateUrl: 'room.html',
            controller: 'roomCtrl as ctrl',
            params : {
                name : { value : true }
            },

            resolve: {
                name: function($stateParams) {
                    return $stateParams.name;
                },
                roomName : function ($stateParams) {
                    return $stateParams.roomName;
                }
            }
        })
        .state('404', {
            url: "/404",
            templateUrl: "404.html"
        })


});