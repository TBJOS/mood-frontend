'use strict';

/**
 * @ngdoc function
 * @name moodFrontendApp.controller:WhyCtrl
 * @description
 * # WhyCtrl
 * Controller of the moodFrontendApp
 */
angular.module('moodFrontendApp')
  .controller('WhyCtrl', function ($routeParams, $scope, $http, $location) {
      var vm = this;
      vm.moodid = $routeParams.id;
      vm.submit = submit;
      vm.inProgress = false;
      vm.formData = {
        moodid: vm.moodid
      };

      ////////////////////////
      function submit(form){
        console.log('datos!', vm.formData);
        var data = {
            moodid: vm.moodid,
            options: [],
            comment: vm.formData.comment
        };
        for(var i=1; i<16; i++){
            if (vm.formData.because > 0 && vm.formData.because[i]) {
                data.options.push(i);
            }
        }

        var url = 'http://chile-mobile.demotbj.com/moods';
        vm.inProgress = true;
        var req = $http.post(url, data);
        req.then(function(result){
            $location.path('/exit/' + vm.moodid);
        }, function(err){
            vm.error = true;
        });
      }
  });
