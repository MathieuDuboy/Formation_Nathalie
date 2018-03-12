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

// ajouter une entrée
var keyid = firebase.database().ref().child('accounts').push();
  // cela va créer une clé alétaoire prête à recevoir des informations
// Ajout des données
firebase.database().ref().child('accounts').child(keyid.key)
  .set({
    fbid: fbid,
    prenom : prenom,
    nom : nom,
    genre : genre,
    date: new Date()
      .toISOString()
  })
  .catch(function(error2) {
    console.log(error2);
  });

// Modification d'une donnée
firebase.database().ref().child('accounts').child(keyid.key)
  .update({
    prenom : 'Jean'
  })
  .catch(function(error2) {
    console.log(error2);
  });

// suppression d"une donnée
firebase.database().ref().child('accounts').child(keyid.key)
  .set({
    prenom : null
  })
  .catch(function(error2) {
    console.log(error2);
  });
  // cela va supprimer le champs 'prenom' dans cette entrée.
