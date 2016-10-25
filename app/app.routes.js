(function() {
  'use strict';
  angular.module('app')
    .config(appRun);
  
  appRun.$inject = [
    '$routeProvider'
  ]
  
  function appRun($routeProvider) {
    $routeProvider
    
    .when('/', {
      templateUrl: 'dist/views/home.html',
      controller: 'HomeController',
      controllerAs: 'vm',
    })
    
    .when('/forecast', {
      templateUrl: 'dist/views/forecast.html',
      controller: 'ForecastController',
      controllerAs: 'vm'
    })
    
    .when('/forecast/:days', {
      templateUrl: 'dist/views/forecast.html',
      controller: 'ForecastController',
      controllerAs: 'vm'
    });
  }
})();