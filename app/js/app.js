'use strict';

/* App Module */

var visicatchApp = angular.module( 'visicatchApp', [
  'ngRoute',

  'visicatchCtrls'
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
