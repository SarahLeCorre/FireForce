async function afficheCaserne() {

    const response = await fetch('http://vps.cpe-sn.fr:8081/facility/86', {
                            method: 'GET',     
                            });
                            
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

