function afficher_meteo_lat_lng( sessionId, context, entities, lat, lng ) {
  // il faut executer une requete avec Lat,lng pour la méteo
  var quick =  [
      {
        "content_type":"text",
        "title":"Retour accueil",
        "payload": "RETOUR_ACCUEIL"
      },
      {
        "content_type":"text",
        "title":"Au revoir",
        "payload": "Dire_aurevoir"
      },
    ];
  requestify.get("http://api.openweathermap.org/data/2.5/weather?APPID="+api_key_weather+"&lat="+lat+"&lon="+lng, {} ).then( function( response )  {
      var body = JSON.parse(response.body);
      console.log('temperature'+body.main.temp);
      var temperature = parseInt(body.main.temp);
      var tempC = Math.round(temperature - 273.15);
      actions.envoyer_message_text( sessionId, context, entities, "Il fait "+tempC+"°C").then(function() {
        actions.envoyer_message_quickreplies(sessionId, context, entities, "Que souhaitez-vous faire maintenant ?", quick);
      })
    });
}
