async function afficheCaserne() {
    const response = await fetch('http://vps.cpe-sn.fr:8081/facility/86', {
                            method: 'GET',     
                            });
                            
    const responseText = await response.text();    
    console.log(responseText); // logs 'OK'
    var long =JSON.parse(responseText); // Transforme le string en JSON
    console.log(long.lon); // affiche longitude
 
}