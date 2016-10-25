(function() {
  'use strict';
  
  angular.module('app')
    .factory('weatherFactory', weatherFactory);
  
  weatherFactory.$inject = ['$resource'];
  
  function weatherFactory($resource) {
    var res = {
      getWeather: getWeather
    };
    
    return res;
    
    function getWeather(city, days) {
      var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily", {callback: "JSON_CALLBACK"}, {get: {method: "JSONP"}});
      return weatherAPI.get({q: city, cnt: days, APPID: '676a2c360a8fd3a14de4610ba5a4cdf4'});
    }
  }
})();