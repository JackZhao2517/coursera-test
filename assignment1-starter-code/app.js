(function () {
'use strict';
var x = "hello";
angular.module('myFirstApp', [])

.controller('MyFirstController', function ($scope ) {
  $scope.name = "Jack zhao";
  $scope.stateOfBeing = "hungry";
  $scope.cookieCost = .45;
  
  $scope.sayHello = function () {
    return "Hello My Coursera page!!" ;
  };

  $scope.saymessage = function() {
    return "I am trying to learn AngularJS!!";
  };

  $scope.feedYaakov = function () {
    $scope.stateOfBeing = "fed";
  };

});

})();
