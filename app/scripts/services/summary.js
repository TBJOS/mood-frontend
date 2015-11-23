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
          yesterday: yesterday,
          month: month,
          todayById: todayById
      };

      return service;

      ////////////////////////////////
      function today(cb){
          var url = 'http://192.168.1.113:3000/moods/today';
          var req = $http.get(url);
          req.then(function(result){
              var sum = result.data;
              sum = order(sum);
              cb(sum);
          }, function(err){
              console.log('error:', err)
          })
      }

      function yesterday(cb){
          var url = 'http://192.168.1.113:3000/moods/yesterday';
          var req = $http.get(url);
          req.then(function(result){
              var sum = result.data;
              sum = order(sum);
              cb(sum);
          }, function(err){
              console.log('error:', err)
          })
      }

      function month(cb){
          var url = 'http://192.168.1.113:3000/moods/thismonth';
          var req = $http.get(url);
          req.then(function(result){
              var sum = result.data;
              sum = order(sum);
              cb(sum);
          }, function(err){
              console.log('error:', err)
          })
      }

      function todayById(id, cb) {
          today(function(sum){
            for(var i in sum){
                console.log('sum[i]', sum[i]);
                if (sum[i].id == id) {
                    cb(sum[i].percent);
                }
            }
          });
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
