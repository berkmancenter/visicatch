;( function( $, undefined ) {
  var _defaults = { };

  var _options = { };

  $.fn.ltiTotals = function( annotation ) {
    var totalAnno = annotation.total();

    this.each( function( ) {
      $( this ).html( '<b>Total Annotations:</b> ' + totalAnno.total );
    } );
  };

})( window.jQuery );
