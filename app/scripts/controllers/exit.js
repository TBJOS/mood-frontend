'use strict';

/**
 * @ngdoc function
 * @name moodFrontendApp.controller:ExitCtrl
 * @description
 * # ExitCtrl
 * Controller of the moodFrontendApp
 */
angular.module('moodFrontendApp')
  .controller('ExitCtrl', function ($location, $timeout, $routeParams) {
      var vm = this;
      vm.id = $routeParams.id;
      $timeout(function(){
          if (vm.id != 0) {
            $location.path('/home/' + vm.id);
        } else {
            $location.path('/home/');
        }
      }, 2000);
  });
