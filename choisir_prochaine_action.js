function choisir_prochaine_action(sessionId, context, entities) {
  // ACTION PAR DEFAUT CAR AUCUNE ENTITE DETECTEE
  if (Object.keys(entities).length === 0 && entities.constructor === Object) {
    // Affichage message par defaut : Je n'ai pas compris votre message !
  }
  // PAS DINTENTION DETECTEE
  if (!entities.intent) {
    // je n'ai pas compris ... 0 intetions détectée
  }
  else if(entities.insultes)  {
    // gestion de l'entité avec comme valeur "insultes"
  }
  // IL Y A UNE INTENTION DETECTEE : DECOUVRONS LAQUELLE AVEC UN SWITCH
  else {

      switch (entities.intent && entities.intent[0].value) {
        case "Bonjour":
        actions.envoyer_message_text(sessionId, context, entities, "Bonjour !")
          break;
        case "RETOUR_ACCUEIL":
          // Revenir à l'accueil et changer de texte
          actions.reset_context(entities, context, sessionId).then(function() {
            actions.choixCategories_retour(sessionId, context);
          })
          break;
       case "ByeByeByeBye":
          actions.envoyer_message_text(sessionId, context, entities, "Au revoir !")
          break;
      };

  }
};
