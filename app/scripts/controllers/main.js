'use strict';

/**
 * @ngdoc function
 * @name moodFrontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the moodFrontendApp
 */
angular.module('moodFrontendApp')
  .controller('MainCtrl', function ($routeParams, $timeout) {
    var vm = this;
    vm.showSuccessMsj = false;
    vm.success = ($routeParams.success)? true: false;
    vm.showSuccessMsj = vm.success;

    if (vm.showSuccessMsj) {
        $timeout(function(){
            vm.showSuccessMsj = false;
        }, 5000);
    }

    console.log('vm.success', vm.success);
  });
