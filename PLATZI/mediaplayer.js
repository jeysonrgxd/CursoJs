//-------definicion de un mediaplayer

// creamos una objeto usando el metodos la funcion constructora
// esta manera esta embebido en la clase y no lo hace reutilizable para hacerlo reutilizable debemos mejorarlo
function Mediaplayer(config) {
   this.media = config.el
   this.plugin = config.plugin || [];
   //podemos iniciar las funciones cuando este sea instanciado yamandolas en este constructor de la siguientes manera. sino inicializamos comentamos
   // this._initPlugin();
   // this.unmuted()
   // this.play()
}

// codigo para el plugin
Mediaplayer.prototype._initPlugin = function(){
   const player = {
     play:  () => this.play(),
     pause: () => this.play(),
     media: this.media,
      // getter y setter son propiedades virtuales que no existen directamente pero atravez de eyos podemos correr una funcion que va calcular estos valores o va usar un valor para establecer este nuevo valor

     get muted(){
      //   aca me devuelve el estado del video con su propiedad original muted si esta en muteado o no true o false
      return this.media.muted
     },
   //   los setter al ejecutarlo usamos el sinbolo de  =  para pasarle un parametro ala funcion declarada 
     set muted(value){
        this.media.muted = value
      // if(value === true){
      //    this.media.muted = true
      // }else{
      //    this.media.muted = false

      // }
     }
   }

   this.plugin.forEach(plugin => {
      plugin.run(player)
   });
}

// Mediaplayer.prototype.play = ()=> video.play();
Mediaplayer.prototype.play = function () {
   this.media.play()
}
Mediaplayer.prototype.pause = function () {
   this.media.pause()
}
// definiendo atributos del objeto
Mediaplayer.prototype.nombre = "hola jeyson"

// definiendo muted on unmutes

Mediaplayer.prototype.mute = function(){
   this.media.muted=true;
}

Mediaplayer.prototype.unmute= function(){
   this.media.muted=false;
} 
export default Mediaplayer