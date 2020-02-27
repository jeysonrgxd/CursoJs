import MediaPlayer from '../../mediaplayer.js'
import Ads from './Ads.js'

class AdsPlugin{

   constructor(){
      this._ads = Ads.getInstance()
      this.player
      this.media
      this.currentAd
      this.adsContainer = document.createElement('div')
      this._handleTimeUpdate = this._handleTimeUpdate.bind(this)

   }

   run(player){
      this.player = player
      this.media = player.media
      player.container.appendChild(this.adsContainer)
      this.media.addEventListener("timeupdate",this._handleTimeUpdate)
   }

   _handleTimeUpdate(){
      let currentTime = Math.floor(this.media.currentTime)
      if(currentTime % 30 === 0){
         this._renderAd()
      }
   }

   _renderAd(){
      if(this.currentAd){
         return;
      }
      const ad = this._ads.getAds() //traemos
      this.currentAd = ad //obtengo (asignamos) un objeto del array ALL_ADS de la clase Ads del fichero Ads.js
      this.adsContainer.innerHTML = ` <div class="ads">
      <a class="ads__link" href="${this.currentAd.url}" target="_blank">
        <img class="ads__img" src="${this.currentAd.imageUrl}" />
        <div class="ads__info">
          <h5 class="ads__title">${this.currentAd.title}</h5>
          <p class="ads__body">${this.currentAd.body}</p>
        </div>
      </a>
    </div>`;

    setTimeout(()=>{
       this.currentAd = null
       this.adsContainer.innerHTML = ""
    },10000)
   }
}

export default AdsPlugin;
