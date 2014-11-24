'use strict';

/* Services */

var visicatchSvcs = angular.module( 'visicatchSvcs', [ ] );

visicatchSvcs.factory( 'Activity', function( ) {
  return {
    totals: function( ) {
      return {
        annotations: 20647
      };
    },

    activity: function( period ) {
      return {
        activity: [
          {
            date: $.now(),
            annotationsCreated: 47,
            tagsCreated: 2,
            tagsUsed: 84, /* possible? */
            activeUsers: 2
          },

          {
            date: $.now() - 86400,
            annotationsCreated: 20,
            tagsCreated: 3,
            tagsUsed: 23,
            activeUsers: 3
          }
        ]
      }
    }
  };
} );
