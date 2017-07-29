angular.module('squares-front').controller('SquaresController', function($scope, recursoTerritory) {

    $scope.territories = [];
    $scope.filtro = '';
    $scope.mensagem = '';

    recursoTerritory('mostPaintedArea').query(function(territories) {
        $scope.territories = territories;
    }, function(erro) {
        console.log(erro);
    });
    
});
