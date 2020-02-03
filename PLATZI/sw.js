const VERSION = "v1"
//el self es como los this para el services worker 
self.addEventListener("install",event => {
   // creamos un precache al cual le mandamos una lista de recursos, esta funcion espera una promesa que se resuelva o se rechesa antes de continuar la ejecucion del servicesWorkes
   event.waitUntil(precache())
}) 


// cuando ocurra una peticion queremos ir al cache aver si encontramos la respuesta
self.addEventListener("fetch", event => {
   // extraemos la peticion
   const request = event.request;

   // solo queremos trabajaar con la peticiones get
   if(request.method !== "GET"){
      // si no es una peticion devolvemos return
      return;
   }

   // si la condicion no se cumple entonses es una peticion get por lo que buscamos en cache con la funcion respondWith que espera una promesa resuelta 
   event.respondWith(cachedResponse(request))

   // actualizmos el cache para este request
   event.waitUntil(updateCache(request))
})

async function precache(){
   // utilizamos la api de dom caches
   const cache = await caches.open(VERSION)
   // ahora añadimos recursos
   return cache.addAll([
      '/',
      './index.html',
      './main.js',
      './mediaplayer.js',
      './plugins/Autopause.js',
      './plugins/Autoplay.js',
      './index.css',
      './assets/video-prueba.mp4'
   ])
}

// funcion asyncrona que se utilizara en el responseWith del evento fecth del self al cual pertenece el ambito al serviceworker
async function cachedResponse(request) {
   // abrimos cache que creamos con servicesworker
   const cache = await caches.open(VERSION)

   // Este método examina la solicitud y encuentra cualquier resultado almacenado en caché de cualquiera de los caché creados por tu service worker.
   const response = await cache.match(request)

   console.log("entre a cachedResponse")
   // Si existe una respuesta, se devuelve el valor almacenado en caché. Si no existe, se devuelve el resultado de una llamada a fetch, que realizará una solicitud de red y devolverá los datos si se puede recuperar algo de la red.
   return response || fetch(request);
}

async function updateCache(request){
   const cache = await caches.open(VERSION)
   const response = await fetch(request)
   return cache.put(request, response)
}