'use strict';

/* Controllers */

var visicatchCtrls = angular.module( 'visicatchCtrls', [] );

visicatchCtrls.controller( 'ActivityCtrl', [ '$scope', function( $scope ) {
  $scope.period = 14;
  $scope.annotationsCreated = true;
  $scope.tagsCreated = false;
  $scope.activeUsers = false;
} ] );
