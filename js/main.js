// Bouton "son" //

var button01 = document.getElementsByClassName("infos")[0];
var button = document.getElementById("bgd--img");
var image1 = document.getElementById("ON");

window.afficher = function(){
image1.style.display = (image1.style.display == "block") ? "none" : "block";
}

button.onclick = afficher;
button01.onclick = afficher;

// Player musique //

var x = document.getElementById("audio-01");

function playAudio() {
  return x.paused ? x.play() : x.pause();
}

// Swiper //

var swiper = new Swiper('.swiper-container', {
       pagination: '.swiper-pagination',
       slidesPerView: 'auto',
       paginationClickable: true,
       spaceBetween: 0
   });
