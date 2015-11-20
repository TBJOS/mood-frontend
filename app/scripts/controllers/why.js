'use strict';

/**
 * @ngdoc function
 * @name moodFrontendApp.controller:WhyCtrl
 * @description
 * # WhyCtrl
 * Controller of the moodFrontendApp
 */
angular.module('moodFrontendApp')
  .controller('WhyCtrl', function ($routeParams) {
      var vm = this;
      vm.fellingId = $routeParams.id;
  });
