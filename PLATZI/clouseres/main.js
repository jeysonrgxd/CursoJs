let c = console.log
c("hola como estas");

// IFFE funcion que se ejecuta y la vez encapsula para no acceder alas variables
(function (){
   let nom = "jeyson"
   function getName(){
      c(nom)
   }
   getName()
})();

// ejercicio funcion que devuelve una   funcion
function getNombre(nom){
   let nombre = nom
   return function(){
      c( `Tu nombre es ${nombre}`)
   }
}
let minombre = getNombre("jeyson")
c(minombre())

// funcion clousere metodo de encapsulamiento de variable
function contador(num){
   let numero = num
   return {
      getnum : function(){ return numero },
      incrase : function(){ numero++ },
      decrase : function(){ numero-- }
   }
}

let conta = contador(10);
c(conta.getnum())
conta.incrase()
conta.incrase()
c(conta.getnum())
conta.decrase()
conta.decrase()
conta.decrase()
c(conta.getnum())

