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

async function afficheFeu(){ 
    var Lfeu = await RecupFeu();
    var LTypeTot = TriFeu(Lfeu);

    var Lettres = ["A","B_G","B_A","B_P","C","D","E"];
    for (i=0;i<Lfeu.length;i++){
        for (k=0; k<LTypeTot.length;k++){
            if (LTypeTot[k].includes(Lfeu[i]['id'])){
                var el = document.createElement('div');
                el.className = "Fire"+String(Lettres[k]);
                el.setAttribute("id", Lfeu[i]['id']);
            }

            // create the popup
            var popup = new mapboxgl.Popup()
                .setHTML('<h1> FEU </h1> </br> <p> Type : ' + Lfeu[i]['type'] +'</p><p>Intensity : '+ Lfeu[i]['intensity'] +'</p><p>Range : '+ Lfeu[i]['range']+'</p>' );

            
            new mapboxgl.Marker(el)
                    .setLngLat([Lfeu[i]["lon"],Lfeu[i]["lat"]])
                    .setPopup(popup)
                    .addTo(map);
            
            //Au début met tout les boxes checked pour voir tous les fires
            document.getElementById("Feu"+String(Lettres[k])).checked = true;
        }
    }
}

//--------------------------------------------------------
async function LienTypeIntensite (){
    var LGrandFeu = await TriIntensite();
    var Lfeu = await RecupFeu();
    var LTypeTotal = TriFeu(Lfeu);

    for (j=0; j<LTypeTotal.length; j++){
        for (i=0; i<LTypeTotal[j].length;i++){
            if (LTypeTotal[j].includes(LGrandFeu[i])==false){
                LTypeTotal[j].pop(LGrandFeu[i])
            }
        }
    }

    return LTypeTotal;
    
}


async function Affichageform(){
    /*
        var LTypeTot = LienTypeIntensite();

        elA = document.getElementsByClassName("FireA");
        for (i=0; i<elA.length; i++) { 
            if (document.getElementById("FeuA").checked == true && LTypeTot[0].includes()){
                elA[i].style.display = "block";
            }
            else{
                elA[i].style.display="none";
            }
        }
    */
    
    var Lettres = ["A","B_G","B_A","B_P","C","D","E"];
    for (k=0; k<Lettres.length;k++){
        el = document.getElementsByClassName("Fire"+String(Lettres[k]));     
        for (i=0; i<el.length; i++) {
            if (document.getElementById("Feu"+String(Lettres[k])).checked == true){ 
                el[i].style.display = "block";
            }
            else{
                el[i].style.display="none";
            }

        }
    }
}

async function TriIntensite(){
    var Lfeu = await RecupFeu();
    var I = document.getElementById("intensite").value;
    var LGrandFeu = [];
    for (i=0;i<Lfeu.length;i++){
        if (Lfeu[i]["intensity"]>=I){
            LGrandFeu.push(Lfeu[i]["id"]);
        }
    }
    return LGrandFeu;
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