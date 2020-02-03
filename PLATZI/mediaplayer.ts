class Mediaplayer {

    media: HTMLMediaElement;
    plugin:Array<any>;

   constructor(config) {
      this.media = config.el;
      this.plugin = config.plugin || [];
      this.initPlugin()
   }
   // codigo para el plugin
   // recomendacion si bamos crear una funcion que utilizaremos solo en este clase ps no deve poder acceder otro tipo de clases o archivo a eya por eso la ponemos como private
    private initPlugin() {
      this.plugin.forEach(plugin => {
         plugin.run(this);
      });
   }
   // Mediaplayer.prototype.play = ()=> video.play();
   play() {
      this.media.play();
   }
   pause() {
      this.media.pause();
   }
   // definiendo muted on unmutes
   mute() {
      this.media.muted = true;
   }
   unmute() {
      this.media.muted = false;
   }

}

export default Mediaplayer