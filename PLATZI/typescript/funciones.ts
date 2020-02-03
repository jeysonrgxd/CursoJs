function getYourName(name:string):string{
   return `Tu nombre es ${name}`
}

console.log(getYourName("jeyson"));
console.log("--------------------------------------------------------------");

function saludoNavegador(name:string) :void{
   let boton = document.getElementById("button")
   boton.onclick = () =>{
      alert(`Hola ${name}`)
   }
   console.log("\n por favor aprete el boton saludar")
   console.log("------------------------------------------------------------")
}
saludoNavegador("jeyson")

// retorna una funcion pero al especificar el tipo de datos que se devolvera en este caso una funcion tenemos que tambien declara el tipo de parametro y que regresara en este caso tipo number
function createAdd (a: number): (number)=>number {
   return function(b: number){
      return a+b;
   }

}
let addFour = createAdd(4)
let fourPlus6 = addFour(6)
console.log("\n",fourPlus6);
console.log("----------------------------------------------------------------");

function fullName(nombre:string, apellido:string = "ramos garcia"):string{
   return `Hola tu nombre completo es: ${nombre} ${apellido}`
}
console.log(fullName("jeyson"));




