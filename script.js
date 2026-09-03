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
];

const photoSection = document.getElementById("photo-section");
const overlayMobile = document.getElementById("overlay_mobile");

// Startfunktion auf body onload
function init() {
  render(allPictures);
}

// Funktion um Inhalte von der Array ins HTML zu kriegen
function render() {
  for (let i = 0; i < allPictures.length; i = i + 1) {
    // for(Starwert des Zähler; Abbruchbedingung; Veränderung des Zählers){}
    photoSection.innerHTML += templatePicture(i);
  }
}

// HTML Template das oben bei render for schleife eingefügt wird
function templatePicture(i) {
  return `<div class="preview_pictures" >
          <img onclick="openOverlay(${i})" src="${allPictures[i]}" alt="Herbsttag ${i + 1}" />
        </div>`;
}

let currentIndex = 0;

function openOverlay(i) {
  currentIndex = i;
  overlayMobile.style.display = "flex";
  overlayMobile.innerHTML = templateOverlayMobile(currentIndex);
}

function closeOverlay() {
  overlayMobile.style.display = "none";
  overlayMobile.innerHTML = "";
}

function templateOverlayMobile(i) {
  return `<div class="closex" onclick="closeOverlay()">
                      <img
                        src="./assets/icon/close.png"
                        alt="closing tag"
                        width="14"
                        height="14"/>
            </div>
          <h2>Herbsttag ${i + 1}</h2>
          <img id="overlay-picture"
            src="${allPictures[i]}"
            alt="Herbsttag ${i + 1}"
            width="800"
            height="1200"/>

          <div class="nav_arrows">
            <div class="circle_arrow_left" onclick="showPreviousPicture()">
              <img
                src="./assets/icon/arrow_left.svg"
                alt="navigate left"
                width="22"
                height="20"
              />
            </div>

            <div class="circle_arrow_right" onclick="showNextPicture()">
                <img
                src="./assets/icon/arrow_left.svg"
                alt="navigate right"
                width="22"
                height="20"/>
            </div>
          </div>
            <p>${i + 1}/${allPictures.length}</p>`;
}

function showPreviousPicture() {
  currentIndex = (currentIndex - 1 + allPictures.length) % allPictures.length;
  overlayMobile.innerHTML = templateOverlayMobile(currentIndex);
}

function showNextPicture() {
  currentIndex = (currentIndex + 1) % allPictures.length;
  overlayMobile.innerHTML = templateOverlayMobile(currentIndex);
}
