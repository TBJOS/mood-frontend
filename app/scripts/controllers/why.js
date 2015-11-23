'use strict';

/**
 * @ngdoc function
 * @name moodFrontendApp.controller:WhyCtrl
 * @description
 * # WhyCtrl
 * Controller of the moodFrontendApp
 */
angular.module('moodFrontendApp')
  .controller('WhyCtrl', function ($routeParams, $scope) {
      var vm = this;
      vm.moodid = $routeParams.id;
      vm.submit = submit;
      console.log(vm.moodid);
      vm.formData = {
        moodid: vm.moodid
      };

      ////////////////////////
      function submit(form){
        console.log('datos!', vm.formData);
        console.log('form:', $scope.whyForm.$isValid);
        //Location a : #/exit
      }
  });
