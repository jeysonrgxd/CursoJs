let div = document.getElementById("cont-tabla");
let boton = document.getElementById("btnSend");
let loader = document.querySelector(".loader");

boton.addEventListener("click",evt=>{
  const xhr = new XMLHttpRequest();
   console.log(xhr.readyState);
   loader.style.display="block";

  // que metodo usamos , a donde tengo que hacer la peticion  y si es asincrono
  xhr.open("GET","traer_tabla.php?titulo=tabla de nombres",true);
  console.log(xhr.readyState)

  //que se deve hacer con la data recibida del sevidor al que estamos asiendo la peticion
  //evento load cuando ya el servidior ya nos dio toda la informacion(ya tengo la respuesta)
  xhr.addEventListener("load", e=>{
   //objeto completo de la respuesta e.target, por lo tanto tiene metodos y pripiedades
   div.insertAdjacentHTML("afterbegin",e.target.responseText);
   loader.style.display = "none";

   
})
console.log(xhr.readyState);
  //realiza peticion
  xhr.send();
  setTimeout(x=>{
     console.log(xhr.readyState);

  },1000)

})