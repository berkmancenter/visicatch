;( function( $, undefined ) {
  var _fields = [ 'annotationsCreated', 'tagsCreated', 'activeUsers' ];

  var _defaults = {
    period: 14
  };

  $.each( _fields, function( ) {
    _defaults[ this ] = true;
  } );

  var fff = d3.time.format('%Y-%m-%d');

  $.fn.ltiActivity = function( activityService, options ) {
    options = $.extend( { }, _defaults, options );

    var fields = [ ];
    var split = [ ];
    $.each( _fields, function( ) {
      if ( options[ this ] ) {
        fields.push( this );
        split.push( [ ] );
      }
    } );

    var activity = activityService.activity( options.period );

    this.each( function( ) {
      var act, d;
      $.each( activity.activity, function( ) {
        act = this;
        d = fff.parse( act.date );

        $.each( fields, function( i ) {
          split[ i ].push( { date: d, value: act[ this ] } );
        } );
      } );

      data_graphic( {
        title: 'Activity',
        data: split,
        width: 640,
        height: 480,
        target: '#' + this.id,
        x_accessor: 'date',
        y_accessor: 'value'
      } );
    } );
  };

})( window.jQuery );
