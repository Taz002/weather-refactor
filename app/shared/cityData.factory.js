(function() {
  'use strict';
  
  angular.module('app')
    .factory('cityFactory', cityFactory);
  
  function cityFactory() {
    return {
      city: "New York, NY"
    }
  }
})();