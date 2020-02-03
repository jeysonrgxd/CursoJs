console.log("hello typescript");

// function add(a:number, b:number){
//    return a+b;
// }

// const sum = add(2,3);

// console.log(sum)

// tipos de datos string
let nombre: string = "jeyson";

// number
let edad: number = 25;

//boolean
let esGordo: boolean = true

//tipos de declaraciones de array
let hobbies: string[] = ["ejercicios", "clash royale", "programar", "aprender"]

let datos: Array<string | number> = ["anioNacimiento",1994]

// tipos enumerados (enum): si mandamos a imprimir un valor de la variable de tipo enum "colores" lo que me da es su pocion por ende agregamos un valor pero si agremos un valor a uno tenemos que proceder agregarle a todos
enum colores {
   rojo ="rojo",
   azul ="azul",
   verde ="verde",
   amarillo ="amarillo"
   // rojo,
   // verde,
   // amarillo
}
//
// let miColorFavorito = colores[0] colores.rojo
let miColorFavorito = colores.rojo
console.log(miColorFavorito);

// puede ser cualquier valor any
let edadEscrita:any ="25" 
edadEscrita =25
edadEscrita= [25]

// objeto

let jeyson:Object = {
   nombre,
   edad,
   esGordo,
   hobbies,
   datos,
   colores,
   edadEscrita
}

console.log(jeyson);