// public/js/controllers/foto-controller.js

angular.module('squares-front')
    .controller('FotoController', function($scope, $resource, $routeParams) {

        var recursoFoto = $resource('/v1/fotos/:fotoId', null, {
            'update': {
                method: 'PUT'
            }
        });

        $scope.foto = {};
        $scope.mensagem = '';

        if ($routeParams.fotoId) {
            recursoFoto.get({ fotoId: $routeParams.fotoId }, function(foto) {
                $scope.foto = foto;
            }, function(erro) {
                console.log(erro);
                $scope.mensagem = 'Não foi possível obter a foto'
            });
        }

        $scope.submeter = function() {

            if ($scope.formulario.$valid) {

                if ($routeParams.fotoId) {

                    // Novidade aqui! Usando nosso update!

                    recursoFoto.update({ fotoId: $scope.foto._id },
                        $scope.foto,
                        function() {
                            $scope.mensagem = 'Foto alterada com sucesso';
                        },
                        function(erro) {
                            console.log(erro);
                            $scope.mensagem = 'Não foi possível alterar';
                        });

                } else {
                    recursoFoto.save($scope.foto, function() {
                        $scope.foto = {};
                        $scope.mensagem = 'Foto cadastrada com sucesso';
                    }, function(erro) {
                        console.log(erro);
                        $scope.mensagem = 'Não foi possível cadastrar a foto';
                    });
                }
            }
        };

    });