(function() {
  'use strict';
  
  angular.module('app.home')
    .controller('HomeController', HomeController);
  
  HomeController.$inject = [
    '$scope',
    'cityFactory'
  ];
  
  function HomeController($scope, cityFactory) {
    // My home controller
    var vm = this;
    vm.city = cityFactory.city;
    
    
    $scope.$watch('vm.city', function() {
      cityFactory.city = vm.city;
    })
  }
})();