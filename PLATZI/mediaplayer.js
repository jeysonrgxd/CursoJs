//-------definicion de un mediaplayer

// creamos una objeto usando el metodos la funcion constructora
// esta manera esta embebido en la clase y no lo hace reutilizable para hacerlo reutilizable debemos mejorarlo
function Mediaplayer(config) {
   this.media = config.el
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

export default Mediaplayer