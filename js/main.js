// Bouton "son" 01//

var button01 = document.getElementsByClassName("infos01")[0];
var button0A = document.getElementById("bgd--img01");
var image1 = document.getElementById("ON1");

window.afficher = function(){
image1.style.display = (image1.style.display == "block") ? "none" : "block";
}

button01.onclick = afficher;
button0A.onclick = afficher;

// Bouton "son" 02//

var button02 = document.getElementsByClassName("infos02")[0];
var button0B = document.getElementById("bgd--img02");
var image2 = document.getElementById("ON2");

window.afficher = function(){
image2.style.display = (image2.style.display == "block") ? "none" : "block";
}

button02.onclick = afficher;
button0B.onclick = afficher;

// Bouton "son" 03//

var button03 = document.getElementsByClassName("infos03")[0];
var button0C = document.getElementById("bgd--img03");
var image3 = document.getElementById("ON3");

window.afficher = function(){
image3.style.display = (image3.style.display == "block") ? "none" : "block";
}

button03.onclick = afficher;
button0C.onclick = afficher;

// Bouton "son" 04//

var button04 = document.getElementsByClassName("infos04")[0];
var button0D = document.getElementById("bgd--img04");
var image4 = document.getElementById("ON4");

window.afficher = function(){
image4.style.display = (image4.style.display == "block") ? "none" : "block";
}

button04.onclick = afficher;
button0D.onclick = afficher;

// Bouton "son" 05//

var button05 = document.getElementsByClassName("infos05")[0];
var button0E = document.getElementById("bgd--img05");
var image5 = document.getElementById("ON5");

window.afficher = function(){
image5.style.display = (image5.style.display == "block") ? "none" : "block";
}

button05.onclick = afficher;
button0E.onclick = afficher;

// Player musique 01 //

var v = document.getElementById("audio-01");

function playAudio01() {
  return v.paused ? v.play() : v.pause();
  w.stop();
}

// Player musique 02 //

var w = document.getElementById("audio-02");

function playAudio02() {
  return w.paused ? w.play() : w.pause();
}

// Player musique 03 //

var x = document.getElementById("audio-03");

function playAudio03() {
  return x.paused ? x.play() : x.pause();
}

// Player musique 04 //

var y = document.getElementById("audio-04");

function playAudio04() {
  return y.paused ? y.play() : y.pause();
}

// Player musique 04 //

var z = document.getElementById("audio-05");

function playAudio05() {
  return z.paused ? z.play() : z.pause();
}

// Swiper //

var swiper = new Swiper('.swiper-container', {
       pagination: '.swiper-pagination',
       slidesPerView: 'auto',
       paginationClickable: true,
       spaceBetween: 0
   });
