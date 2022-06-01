mapboxgl.accessToken = 'pk.eyJ1IjoiZmlyZWZvcmNlIiwiYSI6ImNsM3ZiYzB2bTB1ejQzanJ4dWJudjg2MjgifQ.R0qQLerxhp73rgRAVG6nSw';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/satellite-streets-v11'
});

async function afficheCaserne() {
<<<<<<< HEAD
    var response = await fetch('http://vps.cpe-sn.fr:8081/facility/86', {
=======

    const response = await fetch('http://vps.cpe-sn.fr:8081/facility/86', {
>>>>>>> 1104a0b23d951efebe718c907033532f5bb23b70
                            method: 'GET',     
                            });
    const responseTest = await response.text();
    var caserneJSON=JSON.parse(responseTest);
    
    console.log(responseTest);
    
    


                            
<<<<<<< HEAD
};


  
=======
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
>>>>>>> 1104a0b23d951efebe718c907033532f5bb23b70
