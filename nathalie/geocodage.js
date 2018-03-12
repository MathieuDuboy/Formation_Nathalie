// envoyer le nom d'une ville dans ue focntion
// En retour, obtenir une latitude et une longitude
// Envoyer cette info vers openweathermap
var NodeGeocoder = require( 'node-geocoder' );
var options = {
  provider: 'google',
  apiKey: 'votre_google_map_key_api',
};
var geocoder = NodeGeocoder( options );

geocoder.geocode("Marseilles")  // ou alors une variable 'entities.location'
					.then(function(res) {
						console.log(res);
						var latitude = res[0].latitude;
						var longitude = res[0].longitude;
						var vrai_nom_de_la_ville = res[0].city; // Marseille
					})
					.catch(function(err) {

					});
