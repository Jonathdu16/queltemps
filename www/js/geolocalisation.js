// geolocalisation.js
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(obtenirLocalisation, afficherErreur);
  } else {
    console.error('La géolocalisation n\'est pas prise en charge par ce navigateur/dispositif.');
  }
}

function obtenirLocalisation(position) {
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;

  // Faites quelque chose avec les coordonnées, par exemple, afficher la météo
}

function afficherErreur(error) {
  if (error.code === 1) {
    console.error('L\'utilisateur a refusé l\'autorisation de géolocalisation.');
  } else {
    console.error('Erreur de géolocalisation : ' + error.message);
  }
}