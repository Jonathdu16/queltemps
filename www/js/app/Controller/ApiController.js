// import CityController from './CityController.js';
import GeolocalisationController from './GeolocalisationController.js';

/**
 * @param {string} city - La ville (chaîne de caractères)
 * @param {number|null} longitude - La longitude (nombre ou null)
 * @param {number|null} latitude - La latitude (nombre ou null)
 */

class ApiController{

  constructor(city = null, longitude = null, latitude = null){
        this.city = city;
        this.longitude = longitude;
        this.latitude = latitude;
        this.handleGeolocationData = this.handleGeolocationData.bind(this);

        document.addEventListener('geolocationData', this.handleGeolocationData);
  }

  root_meteo() {
    if (this.city == null) {
        let longandlat = new GeolocalisationController(this.longitude, this.latitude);
    } else {

    }
  }

  handleGeolocationData(event) {
    // Traitez les données de géolocalisation ici
    const geolocationData = event.detail;
    console.log('Données de géolocalisation reçues :', geolocationData);
  }
}

export {ApiController};