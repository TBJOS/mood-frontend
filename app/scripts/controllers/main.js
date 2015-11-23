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
    vm.groupMood = $routeParams.success;
    vm.summaryFeelling = 0;
    //Catalogo parche
    vm.moods = [];
    vm.moods[1] = "Contento";
    vm.moods[2] = "Motivado";
    vm.moods[3] = "Desanimado";
    vm.moods[4] = "Estresado";

    vm.summaryToday = [];
    vm.summaryYesterday = [];
    vm.summaryMonth = [];

    if (vm.groupMood != 0) {
        summary.todayById(vm.groupMood, function(sum){
            console.log('BYID:',sum);
            vm.summaryFeelling = sum;
        });
    }

    summary.today(function(sum){
        vm.summaryToday = sum;
    });

    summary.yesterday(function(sum){
        vm.summaryYesterday = sum;
    });

    summary.month(function(sum){
        vm.summaryMonth = sum;
    });

    ////////////////////////////
    //Clase de boy dinamica por seccion
    $scope.$on('$routeChangeStart', function(next, current) {
      var path = 'path' + $location.path().replace(/\//g, '-');
      vm.mainClass = path;
    });

  });
