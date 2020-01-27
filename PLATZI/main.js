// ejecucion

import Mediaplayer from './mediaplayer.js'
import Autoplay from './plugins/Autoplay.js'
// ejecucion del programa
let video = document.querySelector("video");
let btnplay = document.getElementById("playButton");
let btnpause = document.getElementById("pauseButton");
let btnunMuted = document.getElementById("unMuted");

let objvideo = new Mediaplayer({ el: video, plugin: [new Autoplay] });
//si comentamos la inicializacion en la clase de Media player, ps la activamos nosostros en la llamadas del objeto
objvideo._initPlugin()
btnplay.onclick = () => objvideo.play();
btnpause.onclick = () => objvideo.pause();
btnunMuted.onclick =() => objvideo.unmute() 
console.log(objvideo.nombre)