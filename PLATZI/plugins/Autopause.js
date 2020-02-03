class Autopause{
   constructor(){
      // declaremos variables de clase
      this.player;
      this.threshold = 0.25
      // usamos el bind para establecer el this en estas funciones ya que seran ejecutadas en otro ambito y por eso no queremos eso queremos mantener el ambito de clase para poder acceder a metodo variables de la clase y trabajar con eyas asiendo nuestro propios algoritmos
      this.handd = this.handleIntersection.bind(this);
      this.handleVisibility = this.handleVisibility.bind(this)
   }
   run(player){
      // inicialisamos el player
      this.player = player;
      const observer = new IntersectionObserver(this.handd, {
         //umbral(threshold) con este definimos que porciento tiene que tener interseccion con el contenedor para que te interese y yo te avise
         // cuando estamos asiendo scroll y cuando nos quede 25% del elemento bamos hacer algo esto funciona tanto cuando nos alejamos como cuando estamos regresamos al video
         threshold:this.threshold,
      })
      observer.observe(this.player.media)

      // utilizamos el vento de visibilitychange
      document.addEventListener("visibilitychange", this.handleVisibility);
      
   }
   // cuando IntersectionObserver llame a handleIntersection le pasamos una lista de entries

   // entries son todos los objetos que estamos observando
   handleIntersection(entries){
      const entry = entries[0]
      if (entry.intersectionRatio >= this.threshold) {
         console.log("regresastes");
         this.player.play();
      }else{
         console.log("te fuistes");
         this.player.pause();
      }

   }

   handleVisibility(){
      // el documento tiene una propiedad que se trabaja con el evento visibilitychange
      if(document.visibilityState === "hidden"){
         this.player.pause();
      }else{
         this.player.play()
      }
   }
}

export default Autopause;