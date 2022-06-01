async function afficheFeu() {
    const response = await fetch('http://vps.cpe-sn.fr:8081/facility/86', {
                            method: 'GET',     
                            });
                            
    const responseText = await response.text();    
    console.log(responseText); // logs 'OK'
}