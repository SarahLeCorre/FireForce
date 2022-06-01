mapboxgl.accessToken = 'pk.eyJ1IjoiZmlyZWZvcmNlIiwiYSI6ImNsM3ZiYzB2bTB1ejQzanJ4dWJudjg2MjgifQ.R0qQLerxhp73rgRAVG6nSw';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/satellite-streets-v11'
});

async function afficheCaserne() {
    var response = await fetch('http://vps.cpe-sn.fr:8081/facility/86', {
                            method: 'GET',     
                            });
    const responseTest = await response.text();
    var caserneJSON=JSON.parse(responseTest);
    
    console.log(responseTest);
    
    


                            
    const responseText = await response.text();    
    console.log(responseText); // logs 'OK'
    var caserne =JSON.parse(responseText); // Transforme le string en JSON
    var longitude = caserne.lon; //Récupération de la longitude
    var latitude = caserne.lat; // Récupération de la latitude
    var tab = [longitude, latitude];
    console.log("long : ",longitude); // affiche longitude
    console.log("lat : ",latitude); // affiche latitude
  //  console.log(tab); 
  
    return tab;

}
