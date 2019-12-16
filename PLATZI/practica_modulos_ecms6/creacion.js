// export function saludar(nombre){
//    alert(`hola como estas ${nombre}`)
// }
// export function nombre (nombre){
//    console.log(`Tu te llamas ${nombre}`)
// }

// export function saludar(nombre){
//    alert(`hola ${nombre}`)
// }
function nombre (nombre){
   console.log(`Tu te llamas ${nombre}`)
}

function saludar(nombre){
   alert(`hola ${nombre}`)
}

export default {
   nombre:nombre,
   saludar:saludar,
   edad:23,
   sexo:"masculino"

}