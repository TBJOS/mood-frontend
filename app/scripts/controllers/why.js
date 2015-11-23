'use strict';

/**
 * @ngdoc function
 * @name moodFrontendApp.controller:WhyCtrl
 * @description
 * # WhyCtrl
 * Controller of the moodFrontendApp
 */
angular.module('moodFrontendApp')
  .controller('WhyCtrl', function ($routeParams, $scope, $http) {
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
        var data = {
            moodid:1,
            options:[1,2,3,4],
            comment:"hola"
        };
        var url = 'http://chile-mobile.demotbj.com/moods';
        var req = $http.post(url, data);
        req.then(function(result){
            console.log('EXITO!',result);
        }, function(err){
            console.log('PROBLEMAS!',err);
        });
        //Location a : #/exit
      }
  });
