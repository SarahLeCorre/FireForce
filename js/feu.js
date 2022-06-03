//Charge la fonction qui affiche les feu et les récupère dans l'api au refresh de la page
window.onload = afficheFeu ();

//Permet de récupérer la map dans la variable map
mapboxgl.accessToken = 'pk.eyJ1IjoiZmlyZWZvcmNlIiwiYSI6ImNsM3ZiYzB2bTB1ejQzanJ4dWJudjg2MjgifQ.R0qQLerxhp73rgRAVG6nSw';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/satellite-streets-v11'
});

//Permet de récupérer le json des feux sur l'api /fire
async function RecupFeu() {
    const response = await fetch('http://vps.cpe-sn.fr:8081/fire', {
                            method: 'GET',     
                            });                       
    const responseText = await response.text();   //.text();
    var Lfeu = JSON.parse(responseText);
    //console.log(Lfeu);
    return Lfeu;
}

//Permet d'afficher les feux sur la carte en fonction des différents types
async function afficheFeu(){ 
    var Lfeu = await RecupFeu();
    var LTypeTot = TriFeu(Lfeu);

    for (i=0;i<Lfeu.length;i++){
        if (LTypeTot[0].includes(Lfeu[i]['id'])){
            var el = document.createElement('div');
            el.className = "FireA";
        }
        else if (LTypeTot[1].includes(Lfeu[i]['id'])){
            var el = document.createElement('div');
            el.className = "FireB_G";
        }
        else if(LTypeTot[2].includes(Lfeu[i]['id'])){
            var el = document.createElement('div');
            el.className = "FireB_A";
        }
        else if(LTypeTot[3].includes(Lfeu[i]['id'])){
            var el = document.createElement('div');
            el.className = "FireB_P";
        }
        else if (LTypeTot[4].includes(Lfeu[i]['id'])){
            var el = document.createElement('div');
            el.className = "FireC";
        }
        else if (LTypeTot[5].includes(Lfeu[i]['id'])){
            var el = document.createElement('div');
            el.className = "FireD";
        }
        else {
            var el = document.createElement('div');
            el.className = "FireE";
        }
        
        var I = document.getElementById("intensite");
        
    
        // create the popup
        var popup = new mapboxgl.Popup({ offset: 25 })
            .setHTML('<h1> FEU </h1> </br> <p> Type : ' + Lfeu[i]['type'] +'</p><p>Intensity : '+ Lfeu[i]['intensity'] +'</p><p>Range : '+ Lfeu[i]['range']+'</p>' );

        
        new mapboxgl.Marker(el)
                .setLngLat([Lfeu[i]["lon"],Lfeu[i]["lat"]])
                .setPopup(popup)
                .addTo(map);
    } 
}

//marker.togglePopup(); // toggle popup open or closed
//[{"id":59,"type":"B_Gasoline","intensity":50.0,"range":50.0,"lon":4.808583763718545,"lat":45.793118996773316},{"id":57,"type":"C_Flammable_Gases","intensity":50.0,"range":50.0,"lon":4.8260937761478795,"lat":45.732333858926715}]
//TEST---------------------------------------------------
function EssaiFiltre(){ 
    var feuTest = [{"id":59,"type":"B_Gasoline","intensity":50.0,"range":50.0,"lon":4.808583763718545,"lat":45.793118996773316},{"id":57,"type":"C_Flammable_Gases","intensity":50.0,"range":50.0,"lon":4.8260937761478795,"lat":45.732333858926715}];
    
    for (i=0;i<feuTest.length;i++){
        var el = document.createElement('div');
        el.className = "FEUTEST";
   
        // create the popup
        var popup = new mapboxgl.Popup({ offset: 25 })
            .setHTML('<h1> FEUTEST </h1> </br> <p> Type : ' + feuTest[i]['type'] +'</p><p>Intensity : '+ feuTest[i]['intensity'] +'</p><p>Range : '+ feuTest[i]['range']+'</p>' );
        
        new mapboxgl.Marker(el)
                .setLngLat([feuTest[i]["lon"],feuTest[i]["lat"]])
                .setPopup(popup)
                .addTo(map);

    }  
}

function EssaiDisp(){
    els = document.getElementsByClassName("FEUTEST");
    console.log(els);
    for (i=0; i<els.length; i++) { 
        els[i].style.display = "none";
    }
}
//--------------------------------------------------------
function Affichageform(){

    if (document.getElementById("FeuA").checked == true){
        elA = document.getElementsByClassName("FireA");
        for (i=0; i<elA.length; i++) { 
            elA[i].style.display = "block";
        }
    }
    else{
        elA = document.getElementsByClassName("FireA");
        for (i=0; i<elA.length; i++) { 
            elA[i].style.display="none";
        }
    }

    if (document.getElementById("FeuB_G").checked == true){
        elB_G = document.getElementsByClassName("FireB_G");
        for (i=0; i<elB_G.length; i++) { 
            elB_G[i].style.display = "block";
        }
    }
    else{
        elB_G = document.getElementsByClassName("FireB_G");
        for (i=0; i<elB_G.length; i++) { 
            elB_G[i].style.display="none";
        }   
    }

    if (document.getElementById("FeuB_A").checked == true){
        elB_A = document.getElementsByClassName("FireB_A");
        for (i=0; i<elB_A.length; i++) { 
            elB_A[i].style.display = "block";
        }
    }
    else{
        elB_A = document.getElementsByClassName("FireB_A");
        for (i=0; i<elB_A.length; i++) { 
            elB_A[i].style.display="none";
        }
    }

    if (document.getElementById("FeuB_P").checked == true){
        elB_P = document.getElementsByClassName("FireB_P");
        for (i=0; i<elB_P.length; i++) { 
            elB_P[i].style.display = "block";
        }
    }
    else{
        elB_P = document.getElementsByClassName("FireB_P");
        for (i=0; i<elB_P.length; i++) { 
            elB_P[i].style.display="none";
        }
    }

    if (document.getElementById("FeuC").checked == true){
        elC = document.getElementsByClassName("FireC");
        for (i=0; i<elC.length; i++) { 
            elC[i].style.display = "block";
        }
    }
    else{
        elC = document.getElementsByClassName("FireC");
        for (i=0; i<elC.length; i++) { 
            elC[i].style.display="none";
        }
    }

    if (document.getElementById("FeuD").checked == true){
        elD = document.getElementsByClassName("FireD");
        for (i=0; i<elD.length; i++) { 
            elD[i].style.display = "block";
        }
    }
    else{
        elD = document.getElementsByClassName("FireD");
        for (i=0; i<elD.length; i++) { 
            elD[i].style.display="none";
        }
    }

    if (document.getElementById("FeuE").checked == true){
        elE = document.getElementsByClassName("FireE");
        for (i=0; i<elE.length; i++) { 
            elE[i].style.display = "block";
        }
    }
    else{
        elE = document.getElementsByClassName("FireE");
        for (i=0; i<elE.length; i++) { 
            elE[i].style.display="none";
        }
    }
}

function TriFeu(Lfeu){
    //TRI PAR TYPE
    var TypeA = [];var TypeB_G = [];var TypeB_A = [];var TypeB_P = [];var TypeC = [];var TypeD = [];var TypeE = [];
    for (i=0;i<Lfeu.length;i++){ 
        if (Lfeu[i]["type"]=="A")  
            TypeA.push(Lfeu[i]["id"]);
        
        else if (Lfeu[i]["type"]=="B_Gasoline")  
            TypeB_G.push(Lfeu[i]["id"]);
        
        else if (Lfeu[i]["type"]=="B_Alcohol")  
            TypeB_A.push(Lfeu[i]["id"]);
           
        else if (Lfeu[i]["type"]=="B_Plastics")  
            TypeB_P.push(Lfeu[i]["id"]);
            
        else if (Lfeu[i]["type"]=="C_Flammable_Gases")  
            TypeC.push(Lfeu[i]["id"]);
            
        else if (Lfeu[i]["type"]=="D_Metals")  
            TypeD.push(Lfeu[i]["id"]);

        else 
            TypeE.push(Lfeu[i]["id"]);   
    }

    var LTypeTotal = [TypeA,TypeB_G,TypeB_A,TypeB_P,TypeC,TypeD,TypeE];
    return LTypeTotal;
    /*
    console.log(Lfeu);console.log("TypeB_G"+TypeB_G);console.log("TypeB_A"+TypeB_A);console.log("TypeB_P"+TypeB_P);console.log("TypeC"+TypeC);console.log("TypeD"+TypeD);console.log("TypeE"+TypeE);
    */
}