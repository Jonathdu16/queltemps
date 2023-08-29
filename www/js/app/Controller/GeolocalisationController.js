import {ApiManager} from '../../Manager/ApiManager.js';
import {MeteoParCordGpsView} from '../../view/MeteoParCordGpsView.js';

class GeolocalisationController {
    constructor(longitude, latitude) {
      this.longitude = longitude;
      this.latitude = latitude;
      
      // Appeler une méthode pour transmettre les données de géolocalisation
      this.sendGeolocationData();
    }
  
    sendGeolocationData() {
      const geolocationData = {
        longitude: this.longitude,
        latitude: this.latitude
      };

      let dataWeather = new ApiManager(null, geolocationData.longitude, geolocationData.latitude);
      let datameteo = dataWeather._get_data_weather_by_lon_and_lat();
      console.log(datameteo);
      this.render(datameteo);
    }

    render(dataWeather){
      // if(!dataWeather){
        // throw new Error('Erreur 404 : La page n\'existe pas')
      // }else{
        new MeteoParCordGpsView(dataWeather)
        console.log(dataWeather.list); 
      // }
    }
  
    // Autres méthodes de la classe
  }
  
  export default GeolocalisationController;