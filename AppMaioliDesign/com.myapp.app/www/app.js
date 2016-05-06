var myApp = angular.module('myApp', []);

myApp.controller('TextoListCtrl', function ($scope) {
  $scope.textos = [
   {'logo': 'Nome do Logo'},
   {'titulo': 'Painel'}
  ];
});