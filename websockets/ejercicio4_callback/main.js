//para realizar esto los id en el dom de la pagina deven ser unicos ya que los id se comvierten en elementos del don respectivamente ala propiedad del elemento al cual le otorgamos
contenido.style.color="red";
boton.style.fontWeight="bold";

// callback afondo son funciones que su argumento es otra funcion lo cual es una funcion que yama a otra funcion

//primera forma con funciones tradicionales
// function imprimir(callback){
//    console.log("soy la funcion imprimir");
//    setTimeout(()=>{
//       callback("imprimir");
//    },1000)
// }
// function callback(e){
//    console.log(`Soy el callback de ${e}`)
// }

// imprimir(callback);

//metodo arrow functions
const setText= data=>{
   contenido.textContent=data;
}

const getData = callback =>{
   setText("Solicitando autorizacion");
   setTimeout(()=>{
      callback(true);
   },2000)
}
const showData = callback =>{
   setText("esperando a que se muestre infomacion")
   setTimeout(()=>{
      callback({nombre:"jeyson"});
   },2000);
}
boton.addEventListener("click",()=>{
   getData(autorizacion =>{
      if(autorizacion){
         showData(user=>{
            setText(`Bienvenido ${user.nombre}`);
         })
      }
   })
})