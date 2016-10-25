(function() {
  'use strict';
  
  angular.module('app')
    .config(appRun);
  
  appRun.$inject = [
    '$locationProvider'
  ]
  
  function appRun($locationProvider) {
    $locationProvider.html5Mode(true);
  }
})();