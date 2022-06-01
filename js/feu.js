window.onload = afficheFeu ();


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
                            
    const responseText = await response.text();   //.text();
    var Lfeu = JSON.parse(responseText);
    //console.log(Lfeu);
    return Lfeu;
}

//[{"id":59,"type":"B_Gasoline","intensity":50.0,"range":50.0,"lon":4.808583763718545,"lat":45.793118996773316},{"id":57,"type":"C_Flammable_Gases","intensity":50.0,"range":50.0,"lon":4.8260937761478795,"lat":45.732333858926715}]


//Permet d'afficher les feux sur la carte
async function afficheFeu(){ 
    
    var Lfeu = await RecupFeu();

    

    //console.log(Lfeu);
    //console.log("ca continue ?");



    for (i=0;i<Lfeu.length;i++){
        var nom = "Feu" + String(i);

        var el = document.createElement('div');
        el.className = "Feu";

        
        // create the popup
        var popup = new mapboxgl.Popup({ offset: 25 })
            .setText(nom +' type : ' + Lfeu[i]['type'] +' intensity : '+ Lfeu[i]['intensity'] +' range : '+ Lfeu[i]['range'] );

        
        new mapboxgl.Marker()
                .setLngLat([Lfeu[i]["lon"],Lfeu[i]["lat"]])
                .setPopup(popup)
                .addTo(map);
    }

    //On garde parce qu'on a le seum d'avoir fait tout ca pour rien
    /*
    map.on('load', function() {

        for (i=0;i<Lfeu.length;i++){
            var nom = "Feu" + String(i);
    
            console.log("rentre dans le for");

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
            
            console.log(Lfeu);
        }
    
    }); 
    */ 
    
}