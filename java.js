//
// array mit img src let allPictures = ["./assets/img/...","./assets/img/...", "./assets/img/..." ];
//
// Startfunktion init (){render (allPictures)} ?
//
// Funktion um Inhalte des Arrays ins HTML zu kriegen
// function render(){
//     for(let i = 0; i<items.length; i=i+1){ // for(Starwert des Zähler; Abbruchbedingung; Veränderung des Zählers){}
//          myListRef.innerHTML += templateLi(i);
//     }
// }

// function templateLi(i){
//     return `<li class='myLi'>${items[i]}</li>`;
// }
//
//openOverlay -> Event?
//
//closeOverlay
//
//showPreviousPicture
//
//showNextPicture
//
//displayCurrentPictureIndexNumber
//
//
//


// Globale Parameter & Arrays
let allPictures = [
"./assets/img/1hoch-800x1200.jpg",
"./assets/img/1quer-1200x800.jpg",
"./assets/img/2hoch-800x1200.jpg",
"./assets/img/2quer-1200x800.jpg",
"./assets/img/3hoch-800x1200.jpg",
"./assets/img/3quer-1200x800.jpg",
"./assets/img/4hoch-800x1200.jpg",
"./assets/img/4quer-1200x800.jpg",
"./assets/img/5hoch-800x1200.jpg",
"./assets/img/5quer-1200x800.jpg",
"./assets/img/6hoch-800x1200.jpg",
"./assets/img/6quer-1200x800.jpg",
]

const photoSection = document.getElementById('photo-section');


// Startfunktion auf body onload
function init(){
    render(allPictures)
} 

// Funktion um Inhalte von der Array ins HTML zu kriegen
function render(){
    for(let i = 0; i<allPictures.length; i=i+1){ // for(Starwert des Zähler; Abbruchbedingung; Veränderung des Zählers){}
         photoSection.innerHTML += templatePicture(i);
    }
}

// HTML Template das oben bei render for schleife eingefügt wird
function templatePicture(i){
    return `<div class="preview_pictures" >
          <img onclick="openOverlay()" src="${allPictures[i]}" alt="Herbsttag 1" />
        </div>`;
}


