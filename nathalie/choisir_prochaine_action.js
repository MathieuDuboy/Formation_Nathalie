function choisir_prochaine_action(sessionId, context, entities) {
  // ACTION PAR DEFAUT CAR AUCUNE ENTITE DETECTEE
  if (Object.keys(entities).length === 0 && entities.constructor === Object) {
    // Affichage message par defaut : Je n'ai pas compris votre message !
    // Wit.ai n'a rien reconnu. Envoyer message je n'ai pas compris
    // Que souahitez-vous faire maintenant + quick replies (re tour accueil, action principale, au revoir)

  }
  // PAS DINTENTION DETECTEE
  if (!entities.intent) {
    // je n'ai pas compris ... 0 intetions détectée

  }
  else if(entities.insultes)  {
    // gestion de l'entité avec comme valeur "insultes"
    // action pour gerer les insultes
  }
  else if(entities.location)  {
    // gestion de l'entité avec comme ville Marseille
    // action pour gerer le retour d'une ville uniquement
  }
  else if(entities.location && entities.intent[0].value == 'Recherche_la_meteo_dune_ville')  {
    // Aller cherche la météo de la ville entities.location
    // recuperer la lat et lng de entities.location
    geocoder.geocode(entities.location.value)  // ou alors une variable 'entities.location'
    					.then(function(res) {
    						console.log(res);
    						var latitude = res[0].latitude;
    						var longitude = res[0].longitude;
    						var vrai_nom_de_la_ville = res[0].city; // Marseille
                // j'ai le resultat c'est bon, je veux envoyer la réponse à l'utilsiateur
                actions.afficher_meteo_lat_lng(sessionId, context, entities, latitude, longitude);
    					})
    					.catch(function(err) {

    					});
  }
  // IL Y A UNE INTENTION DETECTEE : DECOUVRONS LAQUELLE AVEC UN SWITCH
  else {
      switch (entities.intent && entities.intent[0].value) {
        case "AFFICHER_ANCIENNES_RECHERCHES":
          actions.rechercher_dans_firebase_mes_recherches(sessionId, context, entities);
          break;
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
