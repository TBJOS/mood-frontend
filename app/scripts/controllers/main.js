'use strict';

/**
 * @ngdoc function
 * @name moodFrontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the moodFrontendApp
 */
angular.module('moodFrontendApp')
  .controller('MainCtrl', function ($routeParams, $timeout, $scope, $location) {
    var vm = this;
    vm.mainClass = '';
    vm.showSuccessMsj = false;
    vm.success = ($routeParams.success)? true: false;
    vm.showSuccessMsj = vm.success;

    if (vm.showSuccessMsj) {
        $timeout(function(){
            vm.showSuccessMsj = false;
        }, 5000);
    }

    console.log('vm.success', vm.success);

    ////////////////////////////
    //Clase de boy dinamica por seccion
    $scope.$on('$routeChangeStart', function(next, current) {
      var path = 'path' + $location.path().replace(/\//g, '-');
      vm.mainClass = path;
    });

  });
