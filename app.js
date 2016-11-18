(function () {
'use strict';
var x = "hello";
angular.module('myFirstApp', [])

.controller('MyFirstController', MyFirstController);

  MyFirstController.$inject = ['$scope', '$filter'];
  function MyFirstController($scope, $filter) {

  $scope.name = "Jack zhao";
  $scope.stateOfBeing = "hungry";
  $scope.cookieCost = .45;

  $scope.sayHello = function () {
    var msg = "Yaakov likes to eat healthy snacks at night!";
    var output = $filter('uppercase')(msg);
    return output;
  };

  $scope.saymessage = function() {
    return "I am trying to learn AngularJS!!";
  };

  $scope.feedYaakov = function () {
    $scope.stateOfBeing = "fed";
  };

};

})();
