import ConnexionApiMeteo from '../ConnexionApiMeteo.js';
import IdConnexion from './IdConnexion.js';

/**
 * @param {string} city - La ville (chaîne de caractères)
 * @param {number|null} longitude - La longitude (nombre ou null)
 * @param {number|null} latitude - La latitude (nombre ou null)
 */

class ApiManager {
    constructor(city = null, longitude = null, latitude = null){
        this.city = city;
        this.longitude = longitude;
        this.latitude = latitude;
        this.connexionApiMeteo = new ConnexionApiMeteo();
        this.IdConnexion = new IdConnexion();
    }

    _get_data_weather_by_city() {
        let city = `https://api.openweathermap.org/data/2.5/forecast?q=${this.city}&appid=${this.IdConnexion.apiKey}&units=metric&lang=fr`;
        return this.connexionApiMeteo.test_connexion_api(city);
    }

    async _get_data_weather_by_lon_and_lat() {
        let long_and_lat = `http://api.openweathermap.org/data/2.5/forecast?lat=${this.latitude}&lon=${this.longitude}&appid=${this.IdConnexion.apiKey}&units=metric&lang=fr`;
        try{
            const weatherData = await this.connexionApiMeteo.test_connexion_api(long_and_lat);
            // console.log(weatherData.list);
            return weatherData;
        }catch (error) {
            console.error("Erreur lors de la récupération des données météo :", error);
        }
    }
}

export {ApiManager}