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

  $.fn.ltiActivity = function( activityService, options ) {
    options = $.extend( { }, _defaults, options );

    var split = [ ];

    $.each( _fields, function( ) {
      split.push( [ ] );
    } );

    var activity = activityService.activity( options.period );

    this.each( function( ) {
      var rootId = this.id;


      var act, d;
      $.each( activity.activity, function( ) {
        act = this;
        d = fff.parse( act.date );

        $.each( _fields, function( i ) {
          split[ i ].push( { date: d, value: act[ this ] } );
        } );

      } );

      data_graphic( {
        target: '#' + rootId,
        title: 'Activity',
        data: split,
        legend: _fields,
        legend_target: options.legendTarget,
        width: 640,
        height: 480,
        x_accessor: 'date',
        y_accessor: 'value',
        rollover_callback: function( d, i ) {
          $( '#' + rootId + ' .active_datapoint' ).html( 'foo' );
        }
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
