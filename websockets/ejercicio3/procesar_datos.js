let tabla = document.querySelector("#tabla tbody");
let cbxpersonaje = document.getElementById("personaje");
let form = document.getElementById("formulario");

function getData(data){
   const xhr = new XMLHttpRequest();
   let fragment = document.createDocumentFragment();
   if(!data){
      xhr.open("GET","traer_datos.php",true);
      xhr.addEventListener("load",(event)=>{
         let resp = JSON.parse(event.target.responseText);
         for(let heroe of resp){
            let option = document.createElement("option");
            option.value=heroe.ID;
            option.textContent=heroe.Name;
            fragment.appendChild(option);
         }
         cbxpersonaje.appendChild(fragment)
      })
   }else{
      xhr.open("GET",`traer_datos.php?id=${data}`,true);
      xhr.addEventListener("load", (event) => {
         let resp = JSON.parse(event.target.responseText);
         for (let heroe of resp) {
            let tr = document.createElement("tr");
            let td_id=document.createElement("td");
            let td_name = document.createElement("td");
            let td_alignment = document.createElement("td");
            let td_gender = document.createElement("td");
            let td_home = document.createElement("td");
            let td_skills = document.createElement("td");

            td_id.textContent=heroe.ID;
            td_name.textContent = heroe.Name;
            td_alignment.textContent = heroe.Alignment;
            td_gender.textContent=heroe.Gender;
            td_home.textContent=heroe.Hometown;
            td_skills.textContent = heroe.Fighting_Skills;
            
            tr.appendChild(td_id)
            tr.appendChild(td_name)
            tr.appendChild(td_alignment)
            tr.appendChild(td_gender)
            tr.appendChild(td_home)
            tr.appendChild(td_skills)

            fragment.appendChild(tr);
         }
         if(tabla.children[0]){
            tabla.children[0].remove();
         }
         tabla.appendChild(fragment)
      })

   }
   xhr.send();
}
form.addEventListener("submit",(e)=>{
   e.preventDefault();
   let codigo=form.personaje.value;
   getData(codigo);
   console.log(codigo);
})
window.addEventListener("DOMContentLoaded",()=>{
   getData();
})