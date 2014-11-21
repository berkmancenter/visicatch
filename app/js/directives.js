'use strict';

/* Directives */

var visicatchDirectives = angular.module( 'visicatchDirectives', [] );

visicatchDirectives.directive( 'ltiTotals', [ '$interval', function( interval ) {
  return {
    restrict: 'C',
    scope: '=',
    link: function( scope, element, attrs ) {
      element.ltiTotals( scope );
    }
  };
} ] );
