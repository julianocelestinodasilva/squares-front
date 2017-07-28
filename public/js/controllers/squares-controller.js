angular.module('squares-front').controller('SquaresController', function($scope, recursoTerritory) {

    $scope.territories = [];
    $scope.filtro = '';
    $scope.mensagem = '';

    recursoTerritory.query(function(territories) {
        $scope.territories = territories;
    }, function(erro) {
        console.log(erro);
    });
    
});
