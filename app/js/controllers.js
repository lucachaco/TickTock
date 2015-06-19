'use strict';

/* Controllers */

var tickTockControllers = angular.module('tickTockControllers', []);

tickTockControllers.controller('ClockCtrl', ['$scope', '$timeout',
    function ($scope, $timeout) {

        $scope.digits = [];
        $scope.digits.push("zero");
        $scope.digits.push("one");
        $scope.digits.push("two");
        $scope.digits.push("three");
        $scope.digits.push("four");
        $scope.digits.push("five");
        $scope.digits.push("six");
        $scope.digits.push("seven");
        $scope.digits.push("eight");
        $scope.digits.push("nine");

        $scope.timeSelectorVisible = false;
        $scope.tickInterval = 1000; //ms

        var _tick = function () {
            var today = new Date();


            $scope.hour = today.getHours();
            $scope.minute = today.getMinutes();
            $scope.second = today.getSeconds();

            $timeout(_tick, $scope.tickInterval); // reset the timer
        };

        $scope.getFirstDigit = function ($index) {

            if ($index < 10) {
                return $scope.digits[$index];
            }
            else if ($index < 100) {
                return $scope.digits[Math.floor($index % 10)];
            }
        };

        $scope.getSecondDigit = function ($index) {
            return $scope.digits[Math.floor($index / 10)];
        };

        $scope.setAlarm = function () {
            $scope.timeSelectorVisible = true;
        };

        $scope.saveTime = function () {
            $scope.timeSelectorVisible = false;
        };

        $timeout(_tick, $scope.tickInterval);


    }]);

