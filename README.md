# Formation 4h Nathalie du 12/03/18 à 14h

## Programme
- Discussions / Questionnaire / Remarques + Présentation de la formation
- Explications Installation + visualisation parties du ChatBot
  - Variables
  - Actions
  - La logique
  - Le Webhook
- Wit.ai
  - Installation
  - Créations entités / intentions
  - Entrainement de l'Intelligence Artificielle
- Connexion au ChatBot
- Déclenchement d'actions
- Déclenchement de l'API OpenweatherMap (explications de l'API)
- Récupéraration de lat, lng d'un utilisateur
- Stockage Firebase
- Modification/Création Menu persistant + liens réduits vers partie du ChatBot.
- Réponses aux questions libres (selon l'horaire)

## Discussions / Questionnaire / Remarques + Présentation de la formation
A l'oral, 10 minutes Maximum
- Attentes
- Evaluation du niveau en Node.js / Javascript / Wit.ai
- Adaptation du cours en fonction des réponses

## Explications Installation + visualisation parties du ChatBot
A partir des fichiers de base de la formation Udemy, expications de chaque partie composant le ChatBot : https://github.com/MathieuDuboy/fichiers_de_base/blob/master/index_alternatif.js

- Présentation des différentes partie et fonctions du ChatBot
Lien vers le fichier source : https://github.com/MathieuDuboy/Formation_Nathalie/blob/master/index.js


## Wit.ai
Création d'une App sur [Wit.ai](https://wit.ai)
Documentation : https://github.com/wit-ai/node-wit

- Présentation générale des fonctionnalités
- Création Entités + Intentions

## Connexion au ChatBot
Comment lier Wit.ai (qui détecte ce que un humain a dit sur Messenger) à notre ChatBot ? 
Lien vers le fichier source : https://github.com/MathieuDuboy/Formation_Nathalie/blob/master/choisir_prochaine_action.js


## Déclenchement d'actions
Comment générer maintenant une réponse adéquate ? 
Lien vers le fichier source : https://github.com/MathieuDuboy/Formation_Nathalie/blob/master/actions.js


## Déclenchement de l'API OpenweatherMap (explications de l'API)
Création d'un compte OpenWeatherMap : https://home.openweathermap.org/users/sign_up

Récupéaration des Token d'accès
Installation dans le code : https://github.com/MathieuDuboy/Formation_Nathalie/blob/master/fonction_afficher_meteo.js

Récupération et affichage des données : https://github.com/MathieuDuboy/Formation_Nathalie/blob/master/gerer_lat_lng.js


## Récupéraration de lat, lng d'un utilisateur
Via le Webhook : 

## Stockage Firebase
Documentation Firebase : https://firebase.google.com/docs/database/web/start

Ajouter Firebase dans le projet +
Ajouter / Modifier / Supprimer une donnée : https://github.com/MathieuDuboy/Formation_Nathalie/blob/master/firebase.js


## Modification/Création Menu persistant + liens réduits vers partie du ChatBot.
La documentation : https://developers.facebook.com/docs/messenger-platform/reference/messenger-profile-api/persistent-menu?locale=fr_FR#requirements

Configurer un bouton démarrer (obligatoire) +
Les requetes : https://github.com/MathieuDuboy/Formation_Nathalie/blob/master/curl_terminal.js

Liens réduits avec argument ref : https://github.com/MathieuDuboy/Formation_Nathalie/blob/master/liens_directs_ref.js

## Réponses aux questions libres (selon l'horaire)

