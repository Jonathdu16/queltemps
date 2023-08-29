/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
import { Geolocalisation } from './geolocalisation.js';
import { ApiController } from './app/Controller/ApiController.js';

const geolocalisation = new Geolocalisation();


document.addEventListener('deviceready', geolocalisation.onDeviceReady(), false);


document.addEventListener('geolocationData', (event) => {
  // Récupérez les données de géolocalisation et faites quelque chose avec elles
  const data = event.detail;
  console.log('Données de géolocalisation reçues:', data);
  
  // Créez une instance de ApiController avec les données de géolocalisation
  
  const apiController = new ApiController(null, data.longitude, data.latitude);
  apiController.root_meteo();
});