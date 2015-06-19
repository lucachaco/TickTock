'use strict';

/* Controllers */

var tickTockControllers = angular.module('tickTockControllers', []);

tickTockControllers.controller('ClockCtrl', ['$scope', '$timeout',
    function ($scope, $timeout) {
        var _formatTimeUnit,
            _tick;

        _formatTimeUnit = function (i) {
            if (i < 10) {
                i = "0" + i;
            }
            return i;
        };
        $scope.tickInterval = 1000; //ms

        _tick = function () {
            var today = new Date();


            $scope.hour = today.getHours();
            $scope.minute = _formatTimeUnit(today.getMinutes());
            $scope.second = _formatTimeUnit(today.getSeconds());

            $timeout(_tick, $scope.tickInterval); // reset the timer
        };

        // Start the timer
        $timeout(_tick, $scope.tickInterval);


    }]);

