mapboxgl.accessToken = 'pk.eyJ1IjoiZmlyZWZvcmNlIiwiYSI6ImNsM3ZiYzB2bTB1ejQzanJ4dWJudjg2MjgifQ.R0qQLerxhp73rgRAVG6nSw';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/satellite-streets-v11'
});
map.on('load', function() {
   
    // … ajout source
 
    // … ajout layers
 
    const bounds = [
      [-6.494917884024034, 51.69935897822677],  // Coin Sud-Ouest
      [9.732690059356145, 41.25166002712723]    // Coin Nord-Est
    ];
 
    map.fitBounds(bounds);
 });
 map.on('load', function() {
   
    // … ajout source
 
    // … ajout layers
 
    // … centrer la carte
 
    const paris = {
       "geometry": {
         "coordinates": [
            2.350773675310819,
            48.86015558292965
          ],
         "type": "Point"
       },
       "type": "Feature",
       "properties": {
         "name": "Paris"
       }
    };
 
   map.addSource('paris_point',
                 { 'type': 'geojson', 'data': paris }
    );
 
 
    map.addLayer({
             'id': 'paris_layer_name',
             'type': 'symbol',
             'source': 'paris_point',
             'layout': {
               'text-field': ['get', 'name']
             }
         });
 });
