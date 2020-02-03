// las interfaces nos permiten la forma que tiene un objeto esto nos ayuda en el autocompletado para saber como esta diseñado el objeto

// las interfaces definen la forma exapta que deve un objeto no podemos añadir propiedades demas ni demenos en caso de que una propiedad sea opcional tenemos que marcarla como opcional

interface persona {
   nombre:string,
   edad:number;
   varon:boolean
}

enum colores {
   red = "rojo",
   green = "verde",
   yellow = "amarillo",
}

interface Rectangulo{
   ancho:number,
   alto:number,

   //valor opcion que ya no sere forzado al crear un objeto de tipo rectangulo tener color
   color?:colores 
}


let jeyPer: persona = {
   nombre:"jeyson",
   edad:45,
   varon:true
}
console.log(jeyPer);
console.log("-----------------------------------------------------");

let rect: Rectangulo ={
   ancho:20,
   alto:40,
   color:colores.green

}

function area(r:Rectangulo): number{
   return r.ancho * r.alto;
}

console.log("El area es:",area(rect));
// console.log(area({ancho:20, alto:30}));
rect.toString = function(){
   // validamos si el objeto que utilizamos tiene colo o no
   return this.color ? `El color es ${this.color}`: "no tiene color"
}
console.log(rect.toString());