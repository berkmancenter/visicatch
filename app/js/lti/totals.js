;( function( $, undefined ) {
  var _defaults = { };

  var _options = { };

  $.fn.ltiTotals = function( scope ) {
    this.each( function( ) {
      $( this ).html( '<b>Total Annotations:</b> ' + scope.totals.annotations );
    } );
  };

})( window.jQuery );
