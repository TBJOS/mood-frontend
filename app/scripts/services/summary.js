'use strict';

/**
 * @ngdoc service
 * @name moodFrontendApp.summary
 * @description
 * # summary
 * Service in the moodFrontendApp.
 */
angular.module('moodFrontendApp')
  .service('summary', function ($http) {
      var service = {
          today: today,
          yesterday: yesterday
      };

      return service;

      ////////////////////////////////
      function today(cb){
        console.log('today!');
        cb({})
      }

      function yesterday(cb){
          var url = 'http://chile-mobile.demotbj.com/moods/yesterday';
          var req = $http.get(url);
          req.then(function(result){
              console.log('result', result);
              var sum = result.data;
              sum = order(sum);
              cb(sum);
          }, function(err){
              console.log('error:', err)
          })
      }

      function order(sum){
          var total = 0;
          //cantidad de respuestas
          for(var mod in sum) {
              if (sum[mod].total) {
                total +=  sum[mod].total;
              }
          }

          //porcentaje
          if (total > 0) {
              for(var mod in sum) {
                  sum[mod].percent = parseInt((sum[mod].total/total) * 100);
              }
          }
          sum.sort(compare);
          return sum;
      }

      //Ordena de mayor a menor
      function compare(a,b) {
        if (a.percent > b.percent)
            return -1;
        if (a.percent < b.percent)
            return 1;
        return 0;
      }
  });
