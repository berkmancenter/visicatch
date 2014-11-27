'use strict';

/* Services */

var visicatchSvcs = angular.module( 'visicatchSvcs', [ ] );

visicatchSvcs.factory( 'Annotation', function( ) {
  var data = [];
  var date = $.now();
  var annotationsCreated = 47;
  var total = 20647;

  for ( var day = 0; day < 180; day++ ) {
    data.push( {
      date: new Date( date ).toJSON().substr( 0, 10 ),
      created: annotationsCreated,
      total: total
    } );

    date -= 86400000;
    annotationsCreated += Math.floor( Math.random() * 10 * ( Math.random() >= 0.5 ? 1 : -1 ) );
    annotationsCreated = annotationsCreated > 0 ? annotationsCreated : 0;
    total -= annotationsCreated;
  }

  data.reverse();

  return {
    total: function( date ) {
      return $.merge( {}, data[ data.length - 1 ] );
    },

    activity: function( period ) {
      // period - in days

      return JSON.parse( JSON.stringify( data.slice( -period ) ) );
    }
  };
} );

visicatchSvcs.factory( 'Tag', function( ) {
  var data = [];
  var date = $.now();
  var tagsCreated = 2;
  var total = 297;

  for ( var day = 0; day < 180; day++ ) {
    data.push( {
      date: new Date( date ).toJSON().substr( 0, 10 ),
      created: tagsCreated,
      total: total
    } );

    date -= 86400000;
    tagsCreated += Math.floor( Math.random() * 3 * ( Math.random() >= 0.5 ? 1 : -1 ) );
    tagsCreated = tagsCreated > 0 ? tagsCreated : 0;

    total -= tagsCreated;
    total = total > 0 ? total : 0;
  }

  data.reverse();

  return {
    total: function( date ) {
      return $.merge( {}, data[ data.length - 1 ] );
    },

    activity: function( period ) {
      // period - in days

      return JSON.parse( JSON.stringify( data.slice( -period ) ) );
    }
  };
} );

visicatchSvcs.factory( 'User', function( ) {
  var data = [];
  var date = $.now();
  var usersCreated = 2;
  var total = 23;

  for ( var day = 0; day < 180; day++ ) {
    data.push( {
      date: new Date( date ).toJSON().substr( 0, 10 ),
      created: usersCreated,
      total: total,
      active: Math.floor( Math.random() * 2 )
    } );

    date -= 86400000;
    usersCreated += Math.floor( Math.random() * 2 * ( Math.random() >= 0.5 ? 1 : -1 ) );
    usersCreated = usersCreated > 0 ? usersCreated : 0;

    total -= usersCreated;
    total = total > 0 ? total : 0;
  }

  data.reverse();

  return {
    total: function( date ) {
      return $.merge( {}, data[ data.length - 1 ] );
    },

    activity: function( period ) {
      // period - in days

      return JSON.parse( JSON.stringify( data.slice( -period ) ) );
    }
  };
} );

/*
visicatchSvcs.factory( 'Annotation', function( ) {
  var data = [];
  var date = $.now() - ( 86400000 * 180 );
  var annotationsCreated = 47;
  var tagsCreated = 2;
  var activeUsers = 2;

  for ( var day = 0; day < 180; day++ ) {
    data.push( {
      date: new Date( date ).toJSON().substr( 0, 10 ),
      annotationsCreated: annotationsCreated,
      tagsCreated: tagsCreated,
      tagsUsed: 84,
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
    totals: function( ) {
      return {
        annotations: 20647
      };
    },

    activity: function( period ) {
      // period - in days

      return {
        activity: data.slice( -period )
      }
    }
  };
} );
*/
