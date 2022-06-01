async function afficheFeu() {
    const response = await fetch('http://vps.cpe-sn.fr:8081/fire', {
                            method: 'GET',     
                            });
                            
    const responseText = await response.text();    
    console.log(responseText); // logs 'OK'
}

mapboxgl.accessToken = 'pk.eyJ1IjoiZmlyZWZvcmNlIiwiYSI6ImNsM3ZiYzB2bTB1ejQzanJ4dWJudjg2MjgifQ.R0qQLerxhp73rgRAVG6nSw';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/satellite-streets-v11'
});


function RecupFeu (){

    var Lfeu = [{"id":57,"type":"C_Flammable_Gases","intensity":50.0,"range":50.0,"lon":4.8260937761478795,"lat":45.732333858926715},
                {"id":59,"type":"B_Gasoline","intensity":50.0,"range":50.0,"lon":4.808583763718545,"lat":45.793118996773316}];



    
    for (i=0;i<Lfeu.length;i++){
        var nom = "Feu" + String(i);
        console.log(float(Lfeu[i]["lon"]));
    }


    

    for (i=0;i<Lfeu.length;i++){
        var nom = "Feu" + String(i);

        console.log("rentre dans le for");

        map.on('load', function() {

            console.log("la ca passe");
            

            var fire = {
                "geometry": {
                    "coordinates": [
                    Lfeu[i]["lon"], //longitude
                    Lfeu[i]["lat"] //latitude
                    ],
                    "type": "Point"
                },
                "type": "Feature",
                "properties": {
                    "name": nom
                }
            };

            map.addSource('feu_point',
                        { 'type': 'geojson', 'data': fire }
            );


            map.addLayer({
                'id': 'feu_layer_name',
                'type': 'symbol',
                'source': 'feu_point',
                'layout': {
                    'text-field': ['get', 'name']
                }
            });

            fire = {};
        });
    } 
    
     
}