mapboxgl.accessToken = 'pk.eyJ1IjoiZmlyZWZvcmNlIiwiYSI6ImNsM3ZiYzB2bTB1ejQzanJ4dWJudjg2MjgifQ.R0qQLerxhp73rgRAVG6nSw';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/satellite-streets-v11'
});

async function afficheCaserne() {
    var response = await fetch('http://vps.cpe-sn.fr:8081/facility/186', {
                            method: 'GET',     
                            });
    const responseTest = await response.text();
    var caserneJSON=JSON.parse(responseTest);
    var nom = "caserne";
    var nomCaserne=caserneJSON.name;                        
    var maxVehicleSpace=caserneJSON.maxVehicleSpace;
    var peopleCapacity=caserneJSON.peopleCapacity;

    var el = document.createElement('div');
        el.className = nom;

        // create the popup
        var popup = new mapboxgl.Popup({ offset: 25 }).setHTML('<h1> '+
        nom+' </h1></br><p>'+nomCaserne+"</p><p>Vehicle Space : "+maxVehicleSpace+'</p><p>People Capacity : '+peopleCapacity +'</p>');

        new mapboxgl.Marker(el)
                .setLngLat([caserneJSON["lon"],caserneJSON["lat"]])
                .setPopup(popup)
                .addTo(map);
}


window.onload=afficheCaserne(); // lance fonction lors de l'actualisation de la fenêtre

