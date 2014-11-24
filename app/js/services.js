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
      // period - in days

      var data = [];
      var date = $.now();
      var annotationsCreated = 47;
      var tagsCreated = 2;
      var activeUsers = 2;

      for ( var day = 0; day < period; day++ ) {
        data.push( {
          date: new Date( date ).toJSON().substr( 0, 10 ),
          annotationsCreated: annotationsCreated,
          tagsCreated: tagsCreated,
          tagsUsed: 84, /* possible? */
          activeUsers: activeUsers
        } );

        date += 86400000;
        annotationsCreated += Math.floor( Math.random() * 10 * ( Math.random() >= 0.5 ? 1 : -1 ) );
        tagsCreated += Math.floor( Math.random() * 5 * ( Math.random() >= 0.5 ? 1 : -1 ) );
        activeUsers += Math.floor( Math.random() * 5 * ( Math.random() >= 0.5 ? 1 : -1 ) );

        annotationsCreated = annotationsCreated > 0 ? annotationsCreated : 0;
        tagsCreated = tagsCreated > 0 ? tagsCreated : 0;
        activeUsers = activeUsers > 0 ? activeUsers : 0;
      }

      return {
        activity: data
      }
    }
  };
} );
