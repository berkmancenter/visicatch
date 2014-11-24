'use strict';

/* Directives */

var visicatchDirectives = angular.module( 'visicatchDirectives', [] );

visicatchDirectives.directive( 'ltiTotals', [ '$interval', 'Activity', function( interval, Activity ) {
  return {
    restrict: 'C',
    scope: '=',
    link: function( scope, element, attrs ) {
      element.ltiTotals( Activity );
    }
  };
} ] );
