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
    const response = await fetch('http://vps.cpe-sn.fr:8081/vehicle', {
                            method: 'GET',     
                            });                       
    const responseText = await response.text();   //.text();
    var LVehicle = JSON.parse(responseText);
    //console.log(LVehicle);
    return LVehicle;
}




//Permet d'afficher les vehicles sur la carte

async function afficheVehicle(){ 
    
    var LVehicle = await RecupVehicle();
   // var LTypeTot = TriVehicle(LVehicle);

    for (i=0;i<LVehicle.length;i++){

        var el = document.createElement('div');
        el.className = "CAR";

        /*
        if (LVehicle[i]['id']==LTypeTot[0]){
            var el = document.createElement('div');
            el.className = "CAR";
        }
        else if (Lfeu[i]['id']==LTypeTot[1]){
            var el = document.createElement('div');
            el.className = "FIRE_ENGINE";
        }
        else if(Lfeu[i]['id']==LTypeTot[2]){
            var el = document.createElement('div');
            el.className = "PUMPER_TRUCK";
        }
        else if(Lfeu[i]['id']==LTypeTot[4]){
            var el = document.createElement('div');
            el.className = "WATER_TENDER";
        }
        else if (Lfeu[i]['id']==LTypeTot[5]){
            var el = document.createElement('div');
            el.className = "TURNTABLE_LADDER_TRUCK";
        }
        else  (Lfeu[i]['id']==LTypeTot[6]){
            var el = document.createElement('div');
            el.className = "TRUCK";
            */
        }
            
    
        // create the popup
        var popup = new mapboxgl.Popup({ offset: 25 })
            .setHTML('<h1> VEHICLE </h1> </br> <p> Type : </p>' );
           // .setHTML('<h1> Vehicle </h1> </br> <p> Type : ' + LVehicle[i]['type'] +'</p><p>Intensity : '+ LVehicle[i]['intensity'] +'</p><p>Range : '+ LVehicle[i]['range']+'</p>' );

        
        new mapboxgl.Marker(el)
                .setLngLat(4.78075858712092,45.7738485029332)
                .setPopup(popup)
                .addTo(map);
    } 

