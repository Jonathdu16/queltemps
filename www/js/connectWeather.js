class ConnexionAtApiWeather{

    let city ; // Remplacez par la ville de votre choix
    

    constructor(city) {
        const axios = require('axios'); // Assurez-vous d'installer la bibliothèque axios
        this.city = city;
        const apiKey = 'VOTRE_CLE_D_API';
        const apiUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
    }

    test_connexion_api(){
        axios.get(apiUrl)
        .then(response => {
            const forecasts = response.data.list;
            forecasts.forEach(forecast => {
            const date = new Date(forecast.dt * 1000); // Convertir la date UNIX en JavaScript
            const temperature = forecast.main.temp;
            const description = forecast.weather[0].description;
        
            console.log(`Date : ${date.toLocaleString()}, Température : ${temperature}°C, Description : ${description}`);
            });
        })
        .catch(error => {
            console.error('Erreur lors de la requête à l\'API :', error);
        });
    }
}