// public/js/main.js

angular.module('squares-front', ['ngAnimate', 'ngRoute', 'ngResource', 'meusServicos'])
    .config(function($routeProvider, $locationProvider) {

        $locationProvider.html5Mode(true);

        $routeProvider.when('/dashboard', {
            templateUrl: 'partials/principal.html',
            controller: 'SquaresController'
        });

        $routeProvider.otherwise({ redirectTo: '/dashboard' });

    });
