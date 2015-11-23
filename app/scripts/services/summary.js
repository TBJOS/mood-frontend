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
          var total = 0;
          var sum = [
            {
                moodid: 1,
                total: 2
            },
            {
                moodid: 4,
                total: 3
            },
            {
                moodid: 2,
                total: 5
            }
        ];
        //cantidad de respuestas
        for(var mod in sum) {
            total +=  sum[mod].total;
        }

        //porcentaje
        if (total > 0) {
            for(var mod in sum) {
                sum[mod].percent = parseInt((sum[mod].total/total) * 100);
            }
        }
        sum.sort(compare);
        cb(sum);
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
