// api.openweathermap.org/data/2.5/forecast/daily?q=London&cnt=2&APPID=676a2c360a8fd3a14de4610ba5a4cdf4
(function() {
  'use strict';
  
  angular.module('app.forecast')
    .controller('ForecastController', ForecastController);
  
  ForecastController.$inject = [
    '$scope',
    '$routeParams',
    'cityFactory',
    'weatherFactory'
  ];
  
  function ForecastController($scope, $routeParams, cityFactory, weatherFactory) {
    // My forecast Controller
    var vm = this;
    vm.city = cityFactory.city;
    vm.days = $routeParams.days || 2;
    vm.weatherResult = weatherFactory.getWeather(vm.city, vm.days);
    vm.convertToFahrenheit = convertToFahrenheit;
    vm.convertToDate = convertToDate;
    
    function convertToFahrenheit(degK) {
      return Math.round((1.8 * (degK - 273)) + 32);
    }
    
    function convertToDate(dt) {
      return new Date(dt * 1000);
    }
  }
})();