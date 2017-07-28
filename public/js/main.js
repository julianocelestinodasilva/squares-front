// public/js/main.js

angular.module('squares-front', ['minhasDiretivas', 'ngAnimate', 'ngRoute', 'ngResource', 'meusServicos'])
    .config(function($routeProvider, $locationProvider) {

        $locationProvider.html5Mode(true);

        $routeProvider.when('/fotos', {
            templateUrl: 'partials/principal.html',
            controller: 'SquaresController'
        });

        $routeProvider.otherwise({ redirectTo: '/fotos' });

    });
