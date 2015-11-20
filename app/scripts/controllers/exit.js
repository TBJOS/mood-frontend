'use strict';

/**
 * @ngdoc function
 * @name moodFrontendApp.controller:ExitCtrl
 * @description
 * # ExitCtrl
 * Controller of the moodFrontendApp
 */
angular.module('moodFrontendApp')
  .controller('ExitCtrl', function ($location, $timeout) {
      var vm = this;
      $timeout(function(){
          $location.path('/home/1');
      }, 1000);
  });
