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
    console.log(Lfeu);
    return Lfeu;
}


//Permet d'afficher les feux sur la carte
async function afficheFeu(){ 
    
    var Lfeu = await RecupFeu();

    console.log(Lfeu);
    console.log("ca continue ?");

    for (i=0;i<Lfeu.length;i++){
        new mapboxgl.Marker().setLngLat([Lfeu[i]["lon"],Lfeu[i]["lat"]]).addTo(map)
    }
}