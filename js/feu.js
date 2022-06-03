//Charge la fonction qui affiche les feu et les récupère dans l'api au refresh de la page
window.onload = afficheFeu ();

//-----------------------------------------------------------------------------------------------------------------------
//Permet de récupérer la map dans la variable map
mapboxgl.accessToken = 'pk.eyJ1IjoiZmlyZWZvcmNlIiwiYSI6ImNsM3ZiYzB2bTB1ejQzanJ4dWJudjg2MjgifQ.R0qQLerxhp73rgRAVG6nSw';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/satellite-streets-v11'
});

//-----------------------------------------------------------------------------------------------------------------------
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

//-----------------------------------------------------------------------------------------------------------------------
//Affichage initial de tous les feux et création des markeurs/popup
async function afficheFeu(){ 
    var Lfeu = await RecupFeu();
    var LTypeTot = TriFeu(Lfeu);

    for (i=0;i<Lfeu.length;i++){
        if (LTypeTot[0].includes(Lfeu[i]['id'])){
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
    
        
        // create the popup
        var popup = new mapboxgl.Popup({ offset: 25 })
            .setHTML('<h1> FEU </h1> </br> <p> Type : ' + Lfeu[i]['type'] +'</p><p>Intensity : '+ Lfeu[i]['intensity'] +'</p><p>Range : '+ Lfeu[i]['range']+'</p>' );

        
        new mapboxgl.Marker(el)
                .setLngLat([Lfeu[i]["lon"],Lfeu[i]["lat"]])
                .setPopup(popup)
                .addTo(map);
    }
}

//-----------------------------------------------------------------------------------------------------------------------
//Déclanché par le bouton Submit du Formulaire et prend en compte les choix du form à mettre sur la map
/*
async function Affichageform(){
    
    var Fires = ["FireA","FireB_G","FireB_A","FireB_P","FireC","FireD","FireE"];
    var Feux = ["FeuA","FeuB_G","FeuB_A","FeuB_P","FeuC","FeuD","FeuE"];
    for (k=0; k<Fires.length;k++){
        el = document.getElementsByClassName(Fires[k]);     
        for (i=0; i<el.length; i++) {
            if (document.getElementById(Feux[k]).checked == true){ 
                el[i].style.display = "block";
            }
            else{
                el[i].style.display="none";
            }

        }
    }       
}*/

async function Affichageform(){

    var Lfeu = await RecupFeu();
    var I = document.getElementById("intensite").value;

    var Fires = ["FireA","FireB_G","FireB_A","FireB_P","FireC","FireD","FireE"];
    var Feux = ["FeuA","FeuB_G","FeuB_A","FeuB_P","FeuC","FeuD","FeuE"];
    for (k=0; k<Fires.length;k++){
        el = document.getElementsByClassName(Fires[k]);     
        for (i=0; i<el.length; i++) {
            if (document.getElementById(Feux[k]).checked == true){ 
                for (i=0;i<Lfeu.length;i++){
                    if (Lfeu[i]["intensity"]>=I){
                        el[i].style.display = "block";
                    }
                    else{
                        el[i].style.display="none";
                    }
                }  
            }
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