(function () {
'use strict';
var x = "hello";
angular.module('LunchCheck', [])

.controller('LunchCheckController', function ($scope ) {
  $scope.items = "";
  $scope.ifMore = false;
  $scope.iMessage = "";
  $scope.itemdetail = "";
  $scope.warning = "";
  $scope.customeClass ="";

  $scope.sayWarning = function () {
    return $scope.warning;
  };

  $scope.sayHello = function () {
    return $scope.itemdetail[2];
  };

  $scope.sayMessage = function() {
        return $scope.iMessage;
  };

  $scope.itemCheck = function () {
    if ($scope.items == "") {
      $scope.iMessage = "Please enter data first";
      $scope.customeClass = "color-red";
    } else {
      var tempstring = $scope.items.split(',');
      if( emptyCheck(tempstring) )
        return;
      if(tempstring.length  <= 3)
      {
        $scope.iMessage = "Enjoy";
      }
      else {
        $scope.iMessage = "Too much";
      }
      $scope.customeClass = "color-green";
      $scope.itemdetail = tempstring;
    }
  };
  function emptyCheck(string) {
    for (var i = 0; i < string.length; i++) {
      if (string[i] == "") {
        $scope.warning =
        "Pls make sure no empty item in your string and your last string is not comma !!";
        $scope.iMessage = "";
        $scope.customeClass = "color-blue";
        return true;
      }
    }
    $scope.warning = "";
    return false;
  }

});

})();
