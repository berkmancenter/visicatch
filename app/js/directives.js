'use strict';

/* Directives */

var visicatchDirectives = angular.module( 'visicatchDirectives', [] );

visicatchDirectives.directive( 'ltiTotals', [ '$interval', 'Activity', function( interval, Activity ) {
  return {
    restrict: 'C',
    link: function( scope, element, attrs ) {
      element.ltiTotals( Activity );
    }
  };
} ] );

visicatchDirectives.directive( 'ltiActivity', [ 'Activity', function( Activity ) {
  return {
    restrict: 'C',
    link: function( scope, element, attrs ) {
      element.ltiActivity( Activity );
    }
  };
} ] );
