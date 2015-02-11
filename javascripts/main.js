(function() {
  'use strict';

  var module = angular.module('ghpApp', ['angularLoadingDots']);

  module.controller('AppCtrl', function($scope, $timeout) {
    $scope.isLoading = false;
    $scope.loadTime = 3500;

    $scope.startLoading = function() {
      $scope.isLoading = true;
    };

    $scope.stopLoading = function() {
      $scope.isLoading = false;
    };

    $scope.simulateAsync = function() {
      $scope.isLoading = true;

      $timeout(function() {
        $scope.isLoading = false;
      }, $scope.loadTime);

    };

  });

})();
