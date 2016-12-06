(function () {
'use strict';
var x = "hello";
angular.module('myFirstApp', [])

.controller('MyFirstController', MyFirstController)
.filter('loves', LovesFilter)
.filter('truth', TruthFilter);

  MyFirstController.$inject = ['$scope', '$filter','lovesFilter','$timeout'];
  function MyFirstController($scope, $filter, lovesFilter,$timeout) {

  $scope.name = "Jack zhao";
  $scope.stateOfBeing = "hungry";
  $scope.cookieCost = .45;

  $scope.onceCounter = 0;
  $scope.counter = 0;

  $scope.sayHello = function () {
    var msg = "Yaakov likes to eat healthy snacks at night!";
    var output = $filter('uppercase')(msg);
    return output;
  };

  $scope.saymessage = function() {
    return "I am trying to learn AngularJS!!";
  };
  $scope.sayLovesMessage = function () {
  var msg = "Yaakov likes to eat healthy snacks at night!";
  msg = lovesFilter(msg)
  return msg;
};

  $scope.feedYaakov = function () {
    $scope.stateOfBeing = "fed";
  };
  $scope.showNumberOfWatchers = function () {
    console.log("# of Watchers: ", $scope.$$watchersCount);
  };
  $scope.countOnce = function () {
  $scope.onceCounter = 1;
  };

// $scope.upCounter = function () {
//   $scope.counter++;
//   };
  $scope.upCounter = function () {
    $timeout(function () {
      $scope.counter++;
      console.log("Counter incremented!");
      }, 2000);
    };
  $scope.$watch(function () {
    console.log("Digest Loop Fired!");
  })

};
function LovesFilter() {
return function (input) {
  input = input || "";
  input = input.replace("likes", "loves");
  return input;
  };
}
function TruthFilter() {
  return function (input, target, replace) {
    input = input || "";
    input = input.replace(target, replace);
    return input;
  }
}


})();
