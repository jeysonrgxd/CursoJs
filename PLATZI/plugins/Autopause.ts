import Mediaplayer from '../mediaplayer'
// documentacion de intersecciontion observe coon typescript
//https://microsoft.github.io/PowerBI-JavaScript/interfaces/_node_modules_typedoc_node_modules_typescript_lib_lib_dom_d_.intersectionobserver.html

class Autopause {
   
   private threshold:number
   private player: Mediaplayer
   private handd;
   
   constructor() {
      this.threshold = 0.25
      this.handd = this.handleIntersection.bind(this);
      this.handleVisibility = this.handleVisibility.bind(this)
   }
   run(player) {
      this.player = player;
      const observer = new IntersectionObserver(this.handd, {

         threshold: this.threshold,
      })
      observer.observe(this.player.media)

      document.addEventListener("visibilitychange", this.handleVisibility);

   }

   private handleIntersection(entries:IntersectionObserverEntry[]) {
      const entry = entries[0]
      
      if (entry.intersectionRatio >= this.threshold) {
         console.log("regresastes");
         this.player.play();
      } else {
         console.log("te fuistes");
         this.player.pause();
      }

   }

   private handleVisibility() {
      if (document.visibilityState === "hidden") {
         this.player.pause();
      } else {
         this.player.play()
      }
   }
}

export default Autopause;