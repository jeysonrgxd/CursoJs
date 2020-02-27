class Field2 {

   constructor(input){
      this.error = new Array()
      this.input = input

      let errMessage = document.createElement("p")
      errMessage.className = "text-danger"

      this.input.parentElement.insertBefore(errMessage, this.input.nextElementSibling)
      this.input.addEventListener("input",(e)=>{
         this.error = []
         this.validar()
         errMessage.textContent=this.error[0] || ""

      })

   }
   // dejamos una funcion para despues agregarle validacion sin tocar el codigo de la clase esto es una de las cuantas tecnicas del patron decorator
   validar() { }
}

function RequiredFieldDecorator2(field){
   if(field instanceof Field2){
      // obtenemos una copia del metodo
      let validar = field.validar

      // sobreescribimos el metodo validar de la instancion que le mandamos ala funcion como parametro
      field.validar = function(){
         validar() //ejecutamos la copia
         let value = field.input.value
         if(!value){
            field.error.push("Requerido")
         }
      }

      return field

   }else{
      return false;
   }

}

function EmailFieldDecorator2(field){
   if(field instanceof Field2){
      let validar = field.validar
      field.validar = function(){
         validar()
         let value= field.input.value
         if(value.indexOf("@") === -1){
            field.error.push("Deve ser un email")
         }
      }
      return field
   }else{
      return false
   }
}

let field2 = new Field2(document.getElementById("email"))

field2 = RequiredFieldDecorator2(field2) || field2
field2 = EmailFieldDecorator2(field2) || field2

