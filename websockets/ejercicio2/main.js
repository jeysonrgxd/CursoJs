let boton = document.getElementById("boton");
let contenido=document.getElementById("contenido");
let fragment = document.createDocumentFragment();

boton.addEventListener("click",(e)=>{
   alert("hola mundo");
   let xhr = new XMLHttpRequest();
   xhr.open("GET","datos_json.php",true);
   xhr.addEventListener("load",(event)=>{
      switch (event.target.status){
         case 200:
            const data = JSON.parse(event.target.responseText);
            pintarJson(data);
            break;
         case 404:
            console.log("Error Archivos al cual haces la peticion no asido encontrado en el servidor");
            break;
         case 500:
            console.log("Error de lado del servidor por favor intentelo mas tarde o comuniquese con el administrador de su servidor si el problema persiste")
      }
   })
   xhr.send();
})

const pintarJson = (data)=>{
   data.forEach((element,x) => {
      let h2 = document.createElement("h2");
      let datos =document.createElement("p");
      let separador = document.createElement("hr");

      h2.textContent=`Nieto ${x+1}`;
      datos.textContent=`Nombre: ${element.nombre}
      Apellido: ${element.apellido}
      Edad: ${element.edad}
      Profesion: ${element.profession}`;

      fragment.appendChild(h2);
      fragment.appendChild(datos);
      fragment.appendChild(separador);
   });
   //investigacion para imprimir array de objets sacar la la info
   // for (const propo in data) {
   //   console.log(data);
   // }
   contenido.appendChild(fragment);
}