app.post( '/webhook', ( req, res ) => {
  const data = req.body;
  if ( data.object === 'page' ) {
    data.entry.forEach( entry => {
      entry.messaging.forEach( event => {
        if ( event.message && !event.message.is_echo ) {

          var {
            text,
            attachments,
            quick_reply
          } = event.message;

          function hasValue( obj, key ) {
            return obj.hasOwnProperty( key );
          }
          console.log(JSON.stringify(event.message));
          // -------------------------- MESSAGE IMAGE OU GEOLOCALISATION ----------------------------------
          if (event.message.attachments != null  && typeof event.message.attachments[0] != 'undefined') {
              // envoyer à Wit.ai ici
              var sender = event.sender.id;
              // entrainer Wit.ai à reconnaitre les latitudes et les longitudes
              findOrCreateSession(sender)
              .then(function(sessionId) {
                afficher_meteo_lat_lng( sessionId, sessions[ sessionId ].context, '', attachments[0].payload.coordinates.lat, attachments[0].payload.coordinates.long);
              });

					}
          // --------------------------- MESSAGE QUICK_REPLIES --------------------
					else if ( hasValue( event.message, "text" ) && hasValue(event.message, "quick_reply" ) ) {
            // envoyer à Wit.ai ici

          }
          // ----------------------------- MESSAGE TEXT ---------------------------
          else if ( hasValue( event.message, "text" ) ) {
              // envoyer à Wit.ai ici

          }
          // ----------------------------------------------------------------------------
          else {
              // envoyer à Wit.ai ici
          }
        }
        // ----------------------------------------------------------------------------
        else if ( event.postback && event.postback.payload ) {


        }
        // ----------------------------------------------------------------------------
        else {
          console.log( 'received event : ', JSON.stringify( event ) );
        }
      } );
    } );
  }
  res.sendStatus( 200 );
} );
