'use strict';

/**
 * @ngdoc function
 * @name acroGameApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the acroGameApp
 */
angular.module('acroGameApp')
  .controller('MainCtrl', function ($scope) {
    
    $scope.showTut = !!!localStorage.getItem('showTut', true);

    $scope.list = [];

    $scope.star = ['star', 'reverse star'];
    $scope.direction = [' on left', ' on right'];
    $scope.throne = ['throne', 'reverse throne'];

    $scope.generate = function (init) {
        
        if (!init && $scope.showTut === true) {
            $scope.showTut = false;
            localStorage.setItem('showTut', false);
        }
        
        $scope.list[0] = $scope.star[$scope.rand()];
        $scope.list[1] = $scope.throne[$scope.rand()] + $scope.direction[$scope.rand()];
        $scope.list[2] = ($scope.list[0] === $scope.star[0] ? $scope.star[1] : $scope.star[0]) + $scope.direction[$scope.rand()];
        $scope.list[3] = ($scope.list[1].split(' ')[0] === $scope.throne[0] ? $scope.throne[1] : $scope.throne[0]) + $scope.direction[$scope.rand()];
    };

    $scope.rand = function () {
        return Math.round(Math.random());
    };

    $scope.generate(true);

  });
