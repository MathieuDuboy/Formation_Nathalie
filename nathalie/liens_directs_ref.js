app.post('/webhook', (req, res) => {
  const data = req.body;
  if (data.object === 'page') {
      data.entry.forEach(entry => {
            entry.messaging.forEach(event => {
            if (event.message && !event.message.is_echo) {
              var {
                text,
                attachments,
                quick_reply
              } = event.message;
              function hasValue(obj, key) {
                return obj.hasOwnProperty(key);
              }
              console.log(JSON.stringify(event.message));
              // -------------------------- MESSAGE IMAGE OU GEOLOCALISATION ----------------------------------
              if (event.message.attachments != null && typeof event.message.attachments[0] != 'undefined') {
                var sender = event.sender.id;
                clearTimeout(timer);
                findOrCreateSession(sender).then(function(sessionId) {
                  // xxx
                });
              }
              // --------------------------- MESSAGE QUICK_REPLIES --------------------
              else if (hasValue(event.message, "text") && hasValue(event.message, "quick_reply")) {
                // envoyer à Wit.ai ici
                console.log("On est dans quick_reply "+quick_reply.payload);
                var sender = event.sender.id;
                clearTimeout(timer);
                findOrCreateSession(sender).then(function(sessionId) {
                  // xxx
                });
              }
              // ----------------------------- MESSAGE TEXT ---------------------------
              else if (hasValue(event.message, "text")) {
                // envoyer à Wit.ai ici
                var sender = event.sender.id;
                clearTimeout(timer);
                findOrCreateSession(sender).then(function(sessionId) {
                  // xxx
                });
              }
              // ----------------------------------------------------------------------------
              else {
                // envoyer à Wit.ai ici
                clearTimeout(timer);
                // xxx
              }
            }
            // ----------------------------------------------------------------------------
            else if (event.postback && event.postback.payload) {
              var sender = event.sender.id;
              clearTimeout(timer);
              findOrCreateSession(sender).then(function(sessionId) {
                // faire le count des resultats du quizz ici :
                //  https://m.me/123123123123?ref=Marseille
                // si y'a un ref
                if(event.postback.referral && event.postback.referral.ref) {
                  // de manière asynchrone, on va decouper
                  var ref = event.postback.referral.ref;

                  if(ref == 'Marseille') {
                    // faire action numero 1
                    // On veut afficher la météo de Marseille
                    wit.message('Quel temps fait-il à Marseille ?', sessions[sessionId].context).then(({
                      entities
                    }) => {
                      choisir_prochaine_action(sessionId, sessions[sessionId].context, entities);
                      console.log('Yay, on a une response de Wit.ai : ' + JSON.stringify(entities));
                    }).catch(console.error);
                  }else {
                    // faire action numero 2
                  }

                }else {
                  wit.message(event.postback.payload, sessions[sessionId].context).then(({
                    entities
                  }) => {
                    choisir_prochaine_action(sessionId, sessions[sessionId].context, entities);
                    console.log('Yay, on a une response de Wit.ai : ' + JSON.stringify(entities));
                  }).catch(console.error);
                }
              });
            }
            else {
              // xxx
            }
          });

    });
  }
  res.sendStatus(200);
});
