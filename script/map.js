window.addEventListener('DOMContentLoaded', ()=>{
    // 1 : création
let maCarte = L.map('carteFeu');

    // 2 : choix du fond de carte
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  attribution: '©️ OpenStreetMap contributors'
}).addTo(maCarte);
  
    // 3 : réglage de la partie visible (centre, niveau de zoom)
maCarte.setView([50.61, 3.14], 14);

   // ...
});