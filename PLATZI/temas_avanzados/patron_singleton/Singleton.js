class Singleton {
   
   constructor(name, apellido){
      this.name = name;
      this.apellido = apellido;

      if(typeof Singleton.instance === "object"){
         return Singleton.instance
      }
      Singleton.instance = this
      return this;
   }


}

export default Singleton