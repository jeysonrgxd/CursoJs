// ejecucion

import Mediaplayer from './mediaplayer.js'
import Autoplay from "./plugins/Autoplay.js";
// import Autopause from './plugins/Autopause.js'
import Autopause from './plugins/Autopause.ts'
import Ads from './plugins/Ads/index.js'

// ejecucion del programa
let video = document.querySelector("video");
let btnplay = document.getElementById("playButton");
let btnpause = document.getElementById("pauseButton");
let btnunMuted = document.getElementById("unMuted");

let objvideo = new Mediaplayer({ el: video, plugin: [new Autoplay,new Autopause, new Ads()] });
//si comentamos la inicializacion en la clase de Media player, ps la activamos nosostros en la llamadas del objeto
objvideo._initPlugin()
btnplay.onclick = () => objvideo.play();
btnpause.onclick = () => objvideo.pause();
btnunMuted.onclick =() => objvideo.unmute()  
console.log(objvideo.nombre)

// servicesWorker detalles a tener presente :
//- el service worker recibirá eventos fetch para todos los elementos de este dominio. Si         registramos el archivo del service worker en /example/sw.js, el service worker solo           identificaría eventos fetch de páginas cuyas URL comiencen con /example/ (es decir, /         example/page1/, /example/page2/).
// - los servicesworker se instalan 

if('serviceWorker' in navigator){
   // este registro de un service worker devuelve una promesa por ende podemo utilizar el then o catch para analizar lo que nos trae. lo comentamos por que estamos utilizando typscript con parcel

   // navigator.serviceWorker.register('/sw.js')
   // .then(resp => {
   //    console.log(resp) 
   // })
   // .catch(error => {
   //    console.log(error.message);
   // })
}