// geolocalisation.js
class Geolocalisation {
  constructor() {
    this.geolocationEvent = new Event('geolocationData');
  }

  onDeviceReady = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        this.obtenirLocalisation,
        this.afficherErreur
      );
    } else {
      document.getElementById('erreur').innerHTML = "Erreur : La géolocalisation n'est pas prise en charge par ce navigateur/dispositif.";
    }
  }

  obtenirLocalisation = (position) => {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    const data = { latitude, longitude };

    console.log('Localisation : ' + latitude + ', ' + longitude);
    // document.getElementById('localisation').innerHTML = 'Localisation : ' + latitude + ', ' + longitude;

    // Faites quelque chose avec les coordonnées, par exemple, afficher la météo
    
    document.dispatchEvent(new CustomEvent('geolocationData', { detail: data }));
  }

  afficherErreur = (error) => {
    if (error.code === 1) {
      document.getElementById('erreur').innerHTML = "L'utilisateur a refusé l'autorisation de géolocalisation.";
    } else {
      console.error('Erreur de géolocalisation : ' + error.message);
    }
  }
}

export {Geolocalisation};