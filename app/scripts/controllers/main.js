'use strict';

/**
 * @ngdoc function
 * @name moodFrontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the moodFrontendApp
 */
angular.module('moodFrontendApp')
  .controller('MainCtrl', function ($routeParams, $timeout, $scope, $location, summary) {
    var vm = this;
    vm.mainClass = '';
    vm.showSuccessMsj = false;
    vm.success = ($routeParams.success)? true: false;
    //Catalogo parche
    vm.moods = [];
    vm.moods[1] = "Contento";
    vm.moods[2] = "Motivado";
    vm.moods[3] = "Desanimado";
    vm.moods[4] = "Estresado";
    
    vm.summaryYesterday = {};
    summary.yesterday(function(sum){
        console.log('sum:',sum);
        vm.summaryYesterday = sum;
    });

    ////////////////////////////
    //Clase de boy dinamica por seccion
    $scope.$on('$routeChangeStart', function(next, current) {
      var path = 'path' + $location.path().replace(/\//g, '-');
      vm.mainClass = path;
    });

  });
