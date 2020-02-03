// ejecucion

import Mediaplayer from './mediaplayer'
import Autoplay from "./plugins/Autoplay";
// import Autopause from './plugins/Autopause.js'
import Autopause from './plugins/Autopause' 
// ejecucion del programa
let video: HTMLMediaElement = document.querySelector("video");
let btnplay: HTMLElement = document.getElementById("playButton");
let btnpause: HTMLElement = document.getElementById("pauseButton");
let btnunMuted: HTMLElement = document.getElementById("unMuted");

let objvideo = new Mediaplayer({ el: video, plugin: [new Autoplay, new Autopause] });


btnplay.onclick = () => objvideo.play();
btnpause.onclick = () => objvideo.pause();
btnunMuted.onclick = () => objvideo.unmute()
