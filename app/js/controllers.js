'use strict';

/* Controllers */

var visicatchCtrls = angular.module( 'visicatchCtrls', [] );

visicatchCtrls.controller( 'ActivityCtrl', [ '$scope', 'Activity', function( $scope, Activity ) {
  $scope.totals = Activity.totals();
} ] );
