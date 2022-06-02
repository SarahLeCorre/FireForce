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
        //attack: document.querySelector("input[name='attack']").value
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