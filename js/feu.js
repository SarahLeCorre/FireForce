
//Permet de récupérer la map dans la variable map
mapboxgl.accessToken = 'pk.eyJ1IjoiZmlyZWZvcmNlIiwiYSI6ImNsM3ZiYzB2bTB1ejQzanJ4dWJudjg2MjgifQ.R0qQLerxhp73rgRAVG6nSw';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/satellite-streets-v11'
});


//Permet de récupérer le json des feux sur l'api /fire
async function RecupFeu() {
    const response = await fetch('http://vps.cpe-sn.fr:8081/fire', {
                            method: 'GET',     
                            });
                            
    const responseText = await response.text();    
    console.log(responseText); // logs 'OK'
    return response;
}



//Permet d'afficher les feux sur la carte
function afficheFeu(){ 

    var Lfeu = RecupFeu();
    console.log(typeof(Lfeu));
    console.log("ca continue ?");
    await Lfeu;
    
    map.on('load', function() {

        for (i=0;i<Lfeu.length;i++){
            var nom = "Feu" + String(i);
    
            console.log("rentre dans le for");

            console.log(Lfeu[i]['lon']);
            
            var lon= Lfeu[i]['lon'];

            var fire = {
                "geometry": {
                    "coordinates": [
                        lon, //Lfeu[i]["lon"], //longitude
                        Lfeu[i]["lat"] //latitude
                    ],
                    "type": "Point"
                },
                "type": "Feature",
                "properties": {
                    "name": nom
                }
            };

            map.addSource(nom+'_point',
                        { 'type': 'geojson', 'data': fire }
            );


            map.addLayer({
                'id': nom+'_layer_name',
                'type': 'symbol',
                'source': nom+'_point',
                'layout': {
                    'text-field': ['get', 'name']
                }
        
            });

            fire = {};
        }
    
    });  
    
}