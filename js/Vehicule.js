window.onload = afficheVehicle ();


async function creationVehicule() {

    const object = {
        lon : 4.808583763718546,
        lat : 45.793118996773314,
        type : "CAR",
        liquidType : "ALL",
        liquidQuantity : 30,
        fuel : 100,
        crewMember : 0,
        facilityRefID : 186
    }

    ;

    const response = await fetch('http://vps.cpe-sn.fr:8081/vehicle/10eec12c-ac37-4479-b4a8-707559a6ee62', {
                                method: 'POST',     
                                body: JSON.stringify(object),
                                headers: {
                                     'Content-Type': 'application/json'
                                    }
                                });
    const responseText = await response.text();

    console.log(responseText); // logs 'OK'
}


async function SuppressionVehicules() {

    var lien = 'http://vps.cpe-sn.fr:8081/vehicle/10eec12c-ac37-4479-b4a8-707559a6ee62';


    const response = await fetch(lien, {
                                method: 'DELETE',
                                });
    const responseText = await response.text();

    console.log(responseText); // logs 'OK'
}


//Permet de récupérer le json des vehicles sur l'api /vehicle
async function RecupVehicle() {
    const response = await fetch('http://localhost:8081/idVehicles', {
                            method: 'GET',     
                            });                //Doit renvoyer la liste des id de nos vehicules       
    const responseText = await response.text();   //.text();
    var LVehicle = JSON.parse(responseText);
    console.log(LVehicle);
    return LVehicle; //liste des id de nos vehicules
}


//Permet d'afficher les vehicles sur la carte

async function afficheVehicle(){ 
    
    var LVehicle = await RecupVehicle();
   // var LTypeTot = TriVehicle(LVehicle);

    for (i=0;i<LVehicle.length;i++){

        const response = await fetch('http://vps.cpe-sn.fr:8081/vehicle/'+ LVehicle[i], {
            method: 'GET',     
            }); 

        const responseText = await response.text();   //.text();
        var LVehicle = JSON.parse(responseText);
        console.log('eeeeeeeeeee',responseText);
       

        var el = document.createElement('div');
        el.className = "CAR";

       //console.log('test');

        // create the popup
        var popup = new mapboxgl.Popup({ offset: 25 })
            .setHTML('<h1> VEHICLE </h1> </br> <p> ID :'+ LVehicle['id'] +'</p> <p> Type : '+ LVehicle['type'] +'</p> <p> Type Liquide : '+ LVehicle['liquidType'] +'</p> <p> Liquid Quantity : '+ LVehicle['liquidQuantity'] +'</p> <p> Fuel : '+ LVehicle['fuel'] +'</p> <p> Crew Members : '+ LVehicle['crewMember'] +'</p> <p> Caserne : '+ LVehicle['facilityRefID'] +'</p>'      );
            //.setHTML('<h1> Vehicle </h1> </br> <p> Type : ' + LVehicle[i]['type'] +'</p><p>Intensity : '+ LVehicle[i]['intensity'] +'</p><p>Range : '+ LVehicle[i]['range']+'</p>' );

        
        new mapboxgl.Marker(el)
                .setLngLat([4.780758,45.773])
                .setPopup(popup)
                .addTo(map);
    } 
   
}

