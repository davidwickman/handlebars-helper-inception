module.exports.register = function( Handlebars, options, params ) {

  Handlebars.registerHelper( 'helperInception', function( value ) {

    // Level 1: Reality
    if ( ( value !== undefined ) && ( value.indexOf( '{{' ) >= 0 ) ) {
      value = Handlebars.compile( value )( this );

      // Level 2: Van Chase
      if ( ( value !== undefined ) && ( value.indexOf( '{{' ) >= 0 ) ) {
        value = Handlebars.compile( value )( this );

        // Level 3: The Hotel
        if ( ( value !== undefined ) && ( value.indexOf( '{{' ) >= 0 ) ) {
          value = Handlebars.compile( value )( this );

          // Level 4: Snow Fortress
          if ( ( value !== undefined ) && ( value.indexOf( '{{' ) >= 0 ) ) {
            value = Handlebars.compile( value )( this );

            // Level 5: Limbo
            if ( ( value !== undefined ) && ( value.indexOf( '{{' ) >= 0 ) ) {
              value = Handlebars.compile( value )( this );
            }
          }
        }
      }
    }
    return value;
  } );

};
