;( function( $, undefined ) {
  $.fn.ltiActivity = function( activityService ) {
    var activity = activityService.activity();

    this.each( function( ) {
      var converted =  convert_dates( activity.activity, 'date' );
      data_graphic( {
        title: 'Activity',
        data: converted,
        width: 480,
        height: 320,
        target: '#' + this.id,
        x_accessor: 'date',
        y_accessor: 'annotationsCreated'
      } );
    } );
  };

})( window.jQuery );
