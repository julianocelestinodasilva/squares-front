// public/js/servicos/meus-servicos.js

angular.module('meusServicos', ['ngResource'])
    .factory('recursoTerritory', function($resource) {

        return $resource('http://localhost:4567/territories', null, {
            'update': {
                method: 'PUT'
            }
        });

    });
