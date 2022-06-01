mapboxgl.accessToken = 'pk.eyJ1IjoiZmlyZWZvcmNlIiwiYSI6ImNsM3ZiYzB2bTB1ejQzanJ4dWJudjg2MjgifQ.R0qQLerxhp73rgRAVG6nSw';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/satellite-streets-v11'
  
});

//Marqueurs de casernes
var coordCas = afficheCaserne();

console.log(coordCas); // affiche latitude



new mapboxgl.Marker().setLngLat([2.35,48.85]).addTo(map); // Création d'un pointeur aux coord 2.35,48.85



map.on('load', function() {
   
    // … ajout source
 
    // … ajout layers
 
    const bounds = [
      [4.744501, 45.666358],  // Coin Sud-Ouest
      [5.065028, 45.860391]    // Coin Nord-Est
    ];
 
    map.fitBounds(bounds);
  }
);

<<<<<<< HEAD

;
=======
map.on('load', function() {
   
    // … ajout source
 
    // … ajout layers
 
    // … centrer la carte
 
    const lyon = {
       "geometry": {
         "coordinates": [
            4.849664, //longitude
            45.7603831 //latitude
          ],
         "type": "Point"
       },
       "type": "Feature",
       "properties": {
         "name": "Lyon"
       }
    };
 
   map.addSource('lyon_point',
                 { 'type': 'geojson', 'data': lyon }
    );
 
 
    map.addLayer({
             'id': 'lyon_layer_name',
             'type': 'symbol',
             'source': 'lyon_point',
             'layout': {
               'text-field': ['get', 'name']
             }
         });
 });

>>>>>>> 1104a0b23d951efebe718c907033532f5bb23b70
