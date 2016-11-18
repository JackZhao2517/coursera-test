(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController ($scope) {
    // Initialize
    $scope.menu = '';
    $scope.result = '';

    $scope.nullCheck = function () {
        $scope.nullWarning = /,\s*,/.test($scope.menu)
    };

    $scope.scanMenu = function () {
        // Extract items
        var items = $scope.menu.split(/\s*,\s*/);

        // Discard null values
        items = items.filter(function (x) { return x != '' });

        // Clean up the input field
        $scope.menu = items.join(', ');
        $scope.nullCheck();

        // Update the result message
        $scope.result = '';
        $scope.validationState = '';
        if (items.length == 0) {
            $scope.result = 'Please enter data first.';
            $scope.validationState = 'has-error';
        } else {
            if (items.length <= 3) {
                $scope.result = 'Enjoy!';
            } else {
                $scope.result = 'Too much!';
            }
            $scope.validationState = 'has-success';
        }
    };
}

})();
