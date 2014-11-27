;( function( $, undefined ) {
  var _fields = [ 'annotationsCreated', 'tagsCreated', 'activeUsers' ];

  var _defaults = {
    period: 14,
    legendTarget: '.lti-activity-legend'
  };

  $.each( _fields, function( ) {
    _defaults[ this ] = true;
  } );

  var fff = d3.time.format('%Y-%m-%d');

  $.fn.ltiActivity = function( annotation, tag, user, options ) {
    options = $.extend( { }, _defaults, options );

    var annoActivity = annotation.activity( options.period );
    annoActivity = $.map( annoActivity, function(el) {
      return {
        date: fff.parse( el.date ),
        value: el.created
      }
    } );

    var tagActivity = tag.activity( options.period );
    tagActivity = $.map( tagActivity, function(el) {
      return {
        date: fff.parse( el.date ),
        value: el.created
      }
    } );

    var userActivity = user.activity( options.period );
    userActivity = $.map( userActivity, function(el) {
      return {
        date: fff.parse( el.date ),
        value: el.active
      }
    } );

    this.each( function( ) {
      var rootId = this.id;

      data_graphic( {
        target: '#' + rootId,
        title: 'Activity',
        data: [ annoActivity, tagActivity, userActivity ],
        legend: _fields,
        legend_target: options.legendTarget,
        width: 640,
        height: 480,
        x_accessor: 'date',
        y_accessor: 'value'
      } );

      var lines = $( '.main-line' );
      $.each( _fields, function( i ) {
        if ( options[ _fields[ i ] ] ) {
          lines.eq( _fields.length - 1 - i ).removeAttr( 'display' );
        } else {
          lines.eq( _fields.length - 1 - i ).attr( 'display', 'none' );
        }
      } );
    } );
  };

})( window.jQuery );
