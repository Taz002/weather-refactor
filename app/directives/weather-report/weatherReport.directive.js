(function() {
  'use strict';
  
  angular.module('app.weatherReport')
    .directive('weatherReport', weatherReport);
  
  function weatherReport() {
    return {
      restrict: 'E',
      templateUrl: 'dist/views/weatherReport.html',
      replace: true,
      scope: {
        weatherDay: "=",
        convertToStandard: "&",
        convertToDate: "&",
        dateFormat: "@"
      }
    }
  }
})();