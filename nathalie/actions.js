var actions = {
  send({sessionId}, response) {
    const recipientId = sessions[sessionId].fbid;
    if (recipientId) {
      if (response.quickreplies) {
        response.quick_replies = [];
        for (var i = 0, len = response.quickreplies.length; i < len; i++) {
          response.quick_replies.push({
            title: response.quickreplies[i],
            content_type: 'text',
            payload: response.quickreplies[i]
          });
        }
        delete response.quickreplies;
      }
      return fbMessage(recipientId, response).then(() => null).catch((err) => {
        console.log("Je send" + recipientId);
        console.error('Oops! erreur ', recipientId, ':', err.stack || err);
      });
    } else {
      console.error('Oops! utilisateur non trouvé : ', sessionId);
      return Promise.resolve()
    }
  },
  getUserName(sessionId, context, entities) {
    const recipientId = sessions[sessionId].fbid;
    const name = sessions[sessionId].name || null;
    return new Promise(function(resolve, reject) {
      if (recipientId) {
        if (name) {
          context.userName = name;
          resolve(context);
        } else {
          requestUserName(recipientId).then((json) => {
            sessions[sessionId].name = json.first_name;
            context.userName = json.first_name; // Stockage prénom dans le context !
            resolve(context);
          }).catch((err) => {
            console.log("ERROR = " + err);
            console.error('Oops! Erreur : ', err.stack || err);
            reject(err);
          });
        }
      } else {
        console.error('Oops! pas trouvé user :', sessionId);
        reject();
      }
    });
  },
  envoyer_message_text(sessionId, context, entities, text) {
    const recipientId = sessions[sessionId].fbid;
    var response = {
      "text": text
    };
    return fbMessage(recipientId, response).then(() => {}).catch((err) => {
      console.log("Erreur envoyer_message_text" + recipientId);
    });
  },
  envoyer_message_bouton_generique(sessionId, context, entities, elements) {
    const recipientId = sessions[sessionId].fbid;
    return fbMessage(recipientId, elements).then(() => {}).catch((err) => {
      console.log("Erreur envoyer_message_bouton_generique" + recipientId);
    });
  },
  envoyer_message_quickreplies(sessionId, context, entities, text, quick) {
    const recipientId = sessions[sessionId].fbid;
    var response2 = {
      "text": text,
      "quick_replies": quick
    };
    return fbMessage(recipientId, response2).then(() => {}).catch((err) => {
      console.log("Erreur envoyer_message_text" + recipientId);
    });
  },
  envoyer_message_image(sessionId, context, entities, image_url) {
    const recipientId = sessions[sessionId].fbid;
    var response = {
      "attachment": {
        "type": "image",
        "payload": {
          "url": image_url
        }
      }
    };
    return fbMessage(recipientId, response).then(() => {}).catch((err) => {
      console.log("Erreur envoyer_message_text" + recipientId);
    });
  },
  timer(entities, context, sessionId, seconds) {
    // afficher les pointillés
    const recipientId = sessions[sessionId].fbid;
    return new Promise(function(resolve, reject) {
      var response4 = "typing_on";
      fbMessage3(recipientId, response4).then(() => {
        var response4a = "typing_off";
        timer = setTimeout(function() {
          fbMessage3(recipientId, response4a).then(() => {
            console.log("okay typing_off " + recipientId);
            resolve();
          }).catch((err) => {
            console.log("Erreur typing_on" + recipientId);
            console.error('Oops! An error forwarding the typing_on to', recipientId, ':', err.stack ||
              err);
            reject();
          });
        }, seconds);
      }).catch((err) => {
        reject();
        console.log("Erreur typing_on" + recipientId);
        console.error('Oops! An error forwarding the typing_on to', recipientId, ':', err.stack || err);
      });
      // au bout de X secondes, les eteindre
    });
  },
  reset_context(entities, context, sessionId) {
    console.log("Je vais reset le context" + JSON.stringify(context));
    return new Promise(function(resolve, reject) {
      console.log("Je suis dans reset_context" + JSON.stringify(context));
      context = {};
      return resolve(context);
    });
  },

};
