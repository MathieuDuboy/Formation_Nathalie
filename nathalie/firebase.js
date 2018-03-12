'use strict'
// ----------------------- NOS MODULES -------------------------

const firebase = require('firebase');
const admin = require("firebase-admin");

firebase.initializeApp(
  {
    apiKey: "xxxx",
     authDomain: "xxxx",
     databaseURL: "xxxx",
     projectId: "xxxx",
     storageBucket: "xxxx",
     messagingSenderId: "xxxx"
  }
);

admin.initializeApp( {
  credential: admin.credential.cert( {
    "type": "xxxx",
    "project_id": "xxxx",
    "private_key_id": "xxxx",
    "private_key": "xxxx",
    "client_email": "xxxx",
    "client_id": "xxxx",
    "auth_uri": "xxxx",
    "token_uri": "xxxx",
    "auth_provider_x509_cert_url": "xxxx",
    "client_x509_cert_url": "xxxx"
  }),
  databaseURL: "https://xxxx.firebaseio.com"
});


//Expliquer ici le principe de l'architecture des bases NoSql
Jeu du dico // firebase.database().ref()
  Nathalie
    Clé 1 // grâce au .push() je viens de générer une clé aléatoire
      nom : Jean
      prenom : Jean
    Clé 2
      nom : Luc
      prenom : Luc

// ajouter une entrée
var keyid = firebase.database().ref().child('Nathalie').push();
  // cela va créer une clé alétaoire prête à recevoir des informations
// Ajout des données grâce à la fonction .set()
firebase.database().ref().child('Nathalie').child(keyid.key)
  .set({
    nom : "Jean",
    prenom : "Jean"
  })
  .catch(function(error2) {
    console.log(error2);
  });

// Modification d'une donnée grâce à la fonction .update()
firebase.database().ref().child('Nathalie').child(keyid.key)
  .update({
    prenom : 'Jean-Paul',
    nom : 'Mathieu'
  })
  .catch(function(error2) {
    console.log(error2);
  });

// suppression d"une donnée grâce à la fonction .set()
firebase.database().ref().child('Nathalie').child(keyid.key)
  .set({
    prenom : null // pour faire disparaitre la donnée
    // ou bien
  })
  .catch(function(error2) {
    console.log(error2);
  });
  // cela va supprimer le champs 'prenom' dans cette entrée.


// Pour effectuer des requetes de recherche dans votre base de données :
// https://firebase.google.com/docs/database/admin/retrieve-data
