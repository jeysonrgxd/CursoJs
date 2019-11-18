let form = document.getElementById("formulario");
let loader = document.querySelector(".load");
form.addEventListener("submit",(e)=>{
   loader.style.display="block";
   e.preventDefault();
   sendData(form);
})

const sendData = (data)=>{
   let xhr = new XMLHttpRequest();
   xhr.open("POST","post.php",true);
   xhr.addEventListener("load",(event)=>{
      loader.style.display="none";
      respuesta.value=event.target.responseText;
   });
   let formdata= new FormData(data);
   xhr.send(formdata);
   
}