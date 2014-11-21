'use strict';

/* Controllers */

var visicatchCtrls = angular.module( 'visicatchCtrls', [] );

visicatchCtrls.controller( 'ActivityCtrl', [ '$scope', function( $scope ) {
  $scope.totals = {
    annotations: 20647
  };
} ] );
