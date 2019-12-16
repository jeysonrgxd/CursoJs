import Mediaplayer from './mediaplayer.js'
// ejecucion del programa
let video = document.querySelector("video");
let btnplay = document.getElementById("playButton");
let btnpause = document.getElementById("pauseButton");

let objvideo = new Mediaplayer({ el: video });
btnplay.onclick = () => objvideo.play();
btnpause.onclick = () => objvideo.pause();
console.log(objvideo.nombre)