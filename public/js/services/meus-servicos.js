angular.module('meusServicos', ['ngResource'])
    .factory('recursoTerritory', function($resource) {

        return $resource('http://localhost:4567/territories?order=mostPaintedArea', null, {
        });

    });