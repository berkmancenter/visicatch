;( function( $, undefined ) {
  var _defaults = { };

  var _options = { };

  $.fn.ltiTotals = function( activityService ) {
    var totals = activityService.totals();

    this.each( function( ) {
      $( this ).html( '<b>Total Annotations:</b> ' + totals.annotations );
    } );
  };

})( window.jQuery );
