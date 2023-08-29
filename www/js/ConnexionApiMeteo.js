// const axios = require('axios');

export default class ConnexionApiMeteo {

    test_connexion_api(urlApi) {
        return fetch(urlApi)
          .then((response) => {
            if (!response.ok) {
              throw new Error("Erreur lors de la requête à l'API");
            }
            return response.json();
          })
          .then((donnees_meteo) => {
              return donnees_meteo;
            })
            .catch((error) => {
              console.error("Erreur lors de la requête à l'API :", error);
          });
    }
}

let ApiMeteo = new ConnexionApiMeteo();
ApiMeteo.test_connexion_api();

// forecasts.forEach(forecast => {
            // const date = new Date(forecast.dt * 1000); // Convertir la date UNIX en JavaScript
            // const temperature = forecast.main.temp;
            // const description = forecast.weather[0].description;

            // console.log(`Date : ${date.toLocaleString()}, Température : ${temperature}°C, Description : ${description}`);
            // });

// donnees_meteo.list.forEach((forecast) => {
//     const date = new Date(forecast.dt * 1000); // Convertir la date UNIX en JavaScript
//     const temperature = forecast.main.temp;
//     const description = forecast.weather[0].description;
//     const weather = forecast.weather[0].icon;

//     console.log(
//         `Date : ${date.toLocaleString()}, Température : ${temperature}°C, Description : ${description}, Icon : ${weather}`
//     );
// });
// // donnees_meteo.city.forEach((forecast) => {
// //     const city = forecast.name;
// //     console.log(`Météo de la ville de : ${city}`);
// // });
// console.log(`Météo de la ville de : ${donnees_meteo.city.name}`);