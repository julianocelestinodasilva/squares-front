angular.module('squares-front').controller('SquaresController', function($scope, recursoTerritory) {

    $scope.territoriesByMostPaintedArea = [];
    $scope.territoriesByMostProportionalPaintedArea = [];

    recursoTerritory('mostPaintedArea').query(function(territoriesByMostPaintedArea) {
        $scope.territoriesByMostPaintedArea = territoriesByMostPaintedArea;
    }, function(erro) {
        console.log(erro);
    });
    
    recursoTerritory('mostProportionalPaintedArea').query(function(territoriesByMostProportionalPaintedArea) {
        $scope.territoriesByMostProportionalPaintedArea = territoriesByMostProportionalPaintedArea;
    }, function(erro) {
        console.log(erro);
    });

});
