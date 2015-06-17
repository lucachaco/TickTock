'use strict';

/* Controllers */

var tickTockControllers = angular.module('tickTockControllers', []);

tickTockControllers.controller('ClockCtrl', ['$scope',
    function($scope) {
        $scope.hour = '12';
    }]);

