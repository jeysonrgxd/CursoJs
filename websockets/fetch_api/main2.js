const token = "2805455326136401"
const url = `conexion_api.php?token=${token}`;
let boton = document.getElementById("boton");
boton.addEventListener("click", async (e)=>{
   // metodo 1 sin async ni await
   // fetch(url)
   // .then(resolve=>{
   //    switch(resolve.status){
   //       case 200:
   //          return resolve.json();
   //       case 400:
   //          console.log("Problemas al cargar")
   //          break;
   //       case 404:
   //          console.log("pagina en contrada")
   //          break;
   //       default:
   //          break;
   //    }
   // })
   // .then(resolve=>{
   //    draw(resolve.results)
   // })
   // .catch(error=>{
   //    console.log(error);
   // })

   // metodo con async y await
   try {
      const respuesta = await fetch(url);
      switch (respuesta.status) {
         case 200:
            const respuestaJson = await respuesta.json();
            draw(respuestaJson.results)
            break;
         case 400:
            console.log("Problemas al cargar")
            break;
         case 404:
            console.log("pagina en contrada")
            break;
         default:
            break;
         }
      
   } catch (error) {
      console.log(error);
   }
})

function draw(datos){
   let cont = document.getElementById("contenedor");
  datos.forEach(element => {
     cont.insertAdjacentHTML("beforeend",`
        <h2>${element.name}</h2>
   <img src="${element.image.url}" width="300px" height="300px" alt="">
   <p>Nombre real: ${element.biography["full-name"]}</p> 
     `)
  });

}