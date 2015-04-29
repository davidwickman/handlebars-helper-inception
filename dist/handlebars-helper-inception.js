// handlebars-helper-inception
// -----------------
// v0.1.1
//
// http://github.com/davidwickman/handlebars-helper-inception

module.exports.register = function( Handlebars, options, params ) {

  Handlebars.registerHelper( 'helperInception', function( value ) {

    // Level 1: Reality
    if ( value.indexOf( '{{' ) >= 0 ) {
      value = Handlebars.compile( value )( this );

      // Level 2: Van Chase
      if ( value.indexOf( '{{' ) >= 0 ) {
        value = Handlebars.compile( value )( this );

        // Level 3: The Hotel
        if ( value.indexOf( '{{' ) >= 0 ) {
          value = Handlebars.compile( value )( this );

          // Level 4: Snow Fortress
          if ( value.indexOf( '{{' ) >= 0 ) {
            value = Handlebars.compile( value )( this );

            // Level 5: Limbo
            if ( value.indexOf( '{{' ) >= 0 ) {
              value = Handlebars.compile( value )( this );
            }
          }
        }
      }
    }
    return value;
  } );

};
