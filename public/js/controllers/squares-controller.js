angular.module('squares-front').controller('SquaresController', function($scope, recursoSquare) {

    $scope.fotos = [];
    $scope.filtro = '';
    $scope.mensagem = '';

    recursoSquare.query(function(fotos) {
        $scope.fotos = fotos;
    }, function(erro) {
        console.log(erro);
    });
    
});
