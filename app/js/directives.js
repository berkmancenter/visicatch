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
      scope.$watch( 'period', function( ) {
        element.ltiActivity( Activity, scope );
      }, true );
      scope.$watch( 'annotationsCreated', function( ) {
        element.ltiActivity( Activity, scope );
      }, true );
      scope.$watch( 'tagsCreated', function( ) {
        element.ltiActivity( Activity, scope );
      }, true );
      scope.$watch( 'activeUsers', function( ) {
        element.ltiActivity( Activity, scope );
      }, true );
    }
  };
} ] );
