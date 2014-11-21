'use strict';

/* Services */

var visicatchSvcs = angular.module( 'visicatchSvcs', [ ] );

visicatchSvcs.factory( 'Activity', function( ) {
  return {
    totals: function( ) {
      return {
        annotations: 20647
      };
    }
  };
} );
