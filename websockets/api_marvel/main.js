const ajax = request =>{
   return new Promise((resolve,reject)=>{
      let xhr = new XMLHttpRequest();
      xhr.open(request.method,request.url,true);
      let num =2;
      xhr.addEventListener("load",(event)=>{
         resolve(event.target);
         console.log(num++);
      })
      xhr.send();
   })
}
boton.addEventListener("click",()=>{showMarvel()});
const showMarvel = async () =>{
   const token ="2805455326136401"
   const url =`conexion_api.php?token=${token}`;
   const r = {
      method:'GET',
      url:url  
   }
   const resp = await ajax(r);
   switch (resp.status){
      case 200:
         pintar(JSON.parse(resp.responseText).results);
         break;
      case 404:
         console.log("error desconocido");
   }
}

const pintar = ev =>{
   let frag = document.createDocumentFragment();
   ev.forEach(element => {
      let h2 = document.createElement("h2")
      h2.textContent= element.name;
      
      let img = document.createElement("img");
      img.src = element.image.url;
      img.alt = element.name;
      img.style.width="250px";
      img.style.height="250px";

      let parrafo = document.createElement("p");
      parrafo.textContent = element.biography["first-appearance"];
      parrafo.style.fontWeight="bold";

      frag.appendChild(h2);
      frag.appendChild(img);
      frag.appendChild(parrafo);
   });
   contenedor.appendChild(frag);
}