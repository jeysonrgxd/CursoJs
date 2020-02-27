class Subject {

   constructor(){
      this.observer = []
      const ele = document.querySelector("#value")
      ele.addEventListener("input", ()=>{
         this.notify(ele.value)
      })
   }
   
   suscribe(observer){
      if(observer instanceof Observer){
         this.observer.push(observer)

      }else {
         console.error("los elementos no son instancias de obserber")
      }
   }

   unsuscribe(observer){
      if(observer instanceof Observer){
         let index = this.observer.findIndex(obs=>{
            return obs === observer
         })
         this.observer.splice(index,1);

      }else {
         console.error("los elementos no son instancias de obserber")

      }
   }

   notify(data){
      this.observer.forEach(el=> {
         el.update(data)
      })
   }
}

class Observer{

   constructor(el){
      this.html = el
   }

   update(data){
      this.html.textContent = data 
   }
}

const value = new Subject()
// const sus = new Observer(document.querySelector("#price"))
// value.suscribe(sus)
 const arrPice = document.querySelectorAll(".price")
 const  arrElements = new Array()
 console.log(arrElements);

 arrPice.forEach(el => {
    let sus = new Observer(el)
    value.suscribe(sus)
 })

