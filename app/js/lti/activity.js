;( function( $, undefined ) {

  var fff = d3.time.format('%Y-%m-%d');

  function convertDate(d) {
    var fff = d3.time.format('%Y-%m-%d');
    d[x_accessor] = fff.parse(d[x_accessor]);
    return d;
  }

  $.fn.ltiActivity = function( activityService ) {
    var activity = activityService.activity();

    this.each( function( ) {
      var split = [
        [],
        [],
        []
      ];

      var d;
      $.each( activity.activity, function( ) {
        d = fff.parse( this.date );

        split[0].push( { date: d, value: this.annotationsCreated } );
        split[1].push( { date: d, value: this.tagsCreated } );
        split[2].push( { date: d, value: this.activeUsers } );
      } );

      data_graphic( {
        title: 'Activity',
        data: split,
        width: 480,
        height: 320,
        target: '#' + this.id,
        x_accessor: 'date',
        y_accessor: 'value'
      } );
    } );
  };

})( window.jQuery );
