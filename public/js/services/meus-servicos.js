angular.module('meusServicos', ['ngResource'])
    .factory('recursoTerritory', function($resource) {

    	return function(order){
    		return $resource('http://localhost:4567/territories?order=' + order, null, {});
    	}

    });