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
            date: '2014-11-24',
            annotationsCreated: 47,
            tagsCreated: 2,
            tagsUsed: 84, /* possible? */
            activeUsers: 2
          },

          {
            date: '2014-11-23',
            annotationsCreated: 20,
            tagsCreated: 3,
            tagsUsed: 23,
            activeUsers: 3
          },

          {
            date: '2014-11-22',
            annotationsCreated: 32,
            tagsCreated: 1,
            tagsUsed: 12,
            activeUsers: 2
          }
        ]
      }
    }
  };
} );
