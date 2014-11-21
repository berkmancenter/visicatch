'use strict';

/* App Module */

var visicatchApp = angular.module( 'visicatchApp', [
  'ngRoute',
  'ngSanitize',

  'visicatchSvcs',
  'visicatchCtrls',
  'visicatchDirectives'
] );

visicatchApp.config( [ '$routeProvider',
  function( $routeProvider ) {
    $routeProvider.when( '/activity', {
      templateUrl: 'partials/activity.html',
      controller: 'ActivityCtrl'
    } ).otherwise( {
      redirectTo: '/activity'
    } );
  } ] );
