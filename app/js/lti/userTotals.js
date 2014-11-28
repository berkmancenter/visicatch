;( function( $, undefined ) {
  var _defaults = { };

  var _options = { };

  $.fn.ltiUserTotals = function( annotation, user ) {
    var userTotalsAnno = annotation.userTotals();

    var x = d3.scale.linear()
              .domain( [ 0, d3.max( userTotalsAnno, function( d ) {
                return d.created;
              } ) ] )
              .range( [ 0, 420 /* widget width */ ] );

    this.each( function( ) {
      d3.select( this )
        .selectAll( 'div' )
          .data( userTotalsAnno )
        .enter().append( 'div' )
          .style( 'width', function( d ) {
            return x( d.created ) + 'px';
          } )
          .attr( 'x', function( d ) {
            return x( d.created );
          } )
          .text( function( d ) {
            return d.user;
          } );




      //$( this ).html( '<b>User Annotations:</b> ' + userTotalsAnno[ 0 ].user );
    } );
  };

})( window.jQuery );
