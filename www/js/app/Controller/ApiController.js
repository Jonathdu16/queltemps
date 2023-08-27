import CityController from './CityController.js';
import GeolocalisationController from './GeolocalisationController.js';

class ApiController {
  constructor(city = null, longitude = null, latitude = null){
        this.city = city;
        this.longitude = longitude;
        this.latitude = latitude;
  }

  get_data_meteo() {
    if (this.city == null) {
        let longandlat = new GeolocalisationController(this.longitude, this.latitude);
        this._get_data_weather_by_lon_and_lat();
    } else {
      this._get_data_weather_by_city();
    }
  }
}