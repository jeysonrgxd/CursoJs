const url = `conexion_api.php`;
let boton = document.getElementById("boton");
formulario.addEventListener("submit", async (e) => {
   e.preventDefault();

   let myheaders = new Headers();
   // myheaders.append("Content-type","application/json");
   let form = new FormData(formulario);
   // let init2 = {
   //    method: "POST",
   //    // headers: myheaders,
   //    body: persona,
   // }
   let init = {
      method: "POST",
      body: form,
   }
   const respuesta = await fetch(url, init);
   // console.log(nom = form)
   console.log(respuesta.status);
   const rp = await respuesta.text();
   console.log(rp);

})

function draw(datos) {
   let cont = document.getElementById("contenedor");
   datos.forEach(element => {
      cont.insertAdjacentHTML("beforeend", `
        <h2>${element.name}</h2>
   <img src="${element.image.url}" width="300px" height="300px" alt="">
   <p>Nombre real: ${element.biography["full-name"]}</p> 
     `)
   });

}
addEventListener('fetch', function (event) {
   // event.respondWith(
   //    new Response(myBody, {
   //       headers: { "Content-Type": "text/plain" }
   //    })
   // );
   console.log(event);
});