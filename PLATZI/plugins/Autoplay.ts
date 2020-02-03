import Mediaplayer from "../mediaplayer";

class Autoplay {
   constructor(){}
   run(player:Mediaplayer){
      if (!player.media.muted) {
         player.media.muted = true
      }
      player.play()
   }
}
   
export default Autoplay; 