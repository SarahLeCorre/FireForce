async function afficheFeu() {
    const response = await fetch('http://vps.cpe-sn.fr:8081/fire', {
                            method: 'GET',     
                            });
                            
    const responseText = await response.text();    
    console.log(responseText); // logs 'OK'
}


function RecupFeu (){

    var Lfeu = [{"id":57,"type":"C_Flammable_Gases","intensity":50.0,"range":50.0,"lon":4.8260937761478795,"lat":45.732333858926715},
                {"id":59,"type":"B_Gasoline","intensity":50.0,"range":50.0,"lon":4.808583763718545,"lat":45.793118996773316}];


    for (i=0;i<Lfeu.length;i++){
        var nom = "Feu" + String(i);
        console.log(nom);
    }
}