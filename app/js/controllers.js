'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', [function() {

  }])
  .controller('MyCtrl2', ["$scope","WunderService", function($scope,WunderService) {
  		//$scope.weather = WunderService.getForecast();
  		$scope.weather = WunderService.weather.forecast;
  		console.log($scope.weather);
  }]);