'use strict';

/* Directives */

var visicatchDirectives = angular.module( 'visicatchDirectives', [] );

visicatchDirectives.directive( 'ltiTotals', [ '$interval', 'Annotation', function( interval, Annotation ) {
  return {
    restrict: 'C',
    link: function( scope, element, attrs ) {
      element.ltiTotals( Annotation );
    }
  };
} ] );

visicatchDirectives.directive( 'ltiActivity', [ 'Annotation', function( Annotation ) {
  return {
    restrict: 'C',
    link: function( scope, element, attrs ) {
      scope.$watch( 'period', function( ) {
        element.ltiActivity( Annotation, scope );
      }, true );
      scope.$watch( 'annotationsCreated', function( ) {
        element.ltiActivity( Annotation, scope );
      }, true );
      scope.$watch( 'tagsCreated', function( ) {
        element.ltiActivity( Annotation, scope );
      }, true );
      scope.$watch( 'activeUsers', function( ) {
        element.ltiActivity( Annotation, scope );
      }, true );
    }
  };
} ] );
