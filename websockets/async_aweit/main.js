let saludo =  () => {
   let promesa = new Promise((resolve, reject) => {
      let nombre = window.prompt("Cual es tu nombre");
      let confir = window.confirm("Deseas que escriba tu nombre");
      if (confir) resolve(nombre);
      else reject("Ok lo entiendo no escribire tu nombre");
   });
   console.log(promesa)
   return promesa;
}
saludo()
   .then(async (message) => {
      const valor = await pintar(message);
      console.log(valor);
      let nombre = valor.join("");
      mensaje.textContent = `Hola ${nombre}`;
      mensaje.style.fontSize = "30px";
      mensaje.style.color = "#819830";
   })
   .catch(message => {
      console.log(message);
      mensaje.textContent = message;
      mensaje.style.color = "red";
   })

let pintar = dato => {
   let promesa = new Promise((resolve, reject) => {
      let caracter = dato.split("");
      if (caracter.length < 7) resolve(caracter);
      else reject("El nombre supera los mil caracteres");
   })
   console.log(promesa);
   return promesa

}
