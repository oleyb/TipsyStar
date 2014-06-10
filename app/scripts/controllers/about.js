'use strict';

/**
 * @ngdoc function
 * @name acroGameApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the acroGameApp
 */
angular.module('acroGameApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
