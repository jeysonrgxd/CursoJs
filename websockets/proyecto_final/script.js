let ws = null, theChart = null;
let contmen = document.getElementById("content");
let dataChart = [5,10,15]

let mensage = (mensaje)=>{
   systemMessage.textContent=mensaje;
}

let login = async ()=>{
   // let usuario = {
   //    user : usrName.value,
   //    pass : password.value,
   // }
   // let cabecera = new Headers();
   // cabecera.append('Content-type', 'multipart/form-data')
   let form = new FormData(formulario);
   let response = await fetch("login.php",{
      method:"POST",
      body:form
   });
      switch(response.status){
         case 200:
            let data = await response.json();
            connectWS(data);
            loadChart();
            pingping();
            // console.log(data);
            break;
         case 401:
            mensage("Usuario y/o contrase&ntilde;a incorrect&aacute;...");
            break;
         default:
            mensage("Ocurrio un error vuelve a intentar");
      }
}

const connectWS= (data)=>{
   ws = new WebSocket(`ws://localhost:10000/?usu=${usrName.value}&token=${data.clave_token}`);
   ws.onopen=(e)=>{
      mensage("Conectado");
   }
   ws.onclose= (e)=>{
      mensage("Desconectado.")
   }
   ws.onerror = (e)=>{
      mensage("Error vuelva a conectar");
   }
   ws.onmessage = (e)=>{
      let resp = JSON.parse(e.data);
      switch(resp.type){
         case'message':
            contmen.insertAdjacentHTML("beforeend",`<p>${resp.user} envia: ${resp.body}</p>`);
         break;
         case "sale":
            dataChart[resp.producto] += resp.cantidad;
            theChart.update()
         break;
         case "pong":
            console.log(resp.type);
         break;
      }
   }

}
btnSendMessage.addEventListener("click",e=>{
   e.preventDefault();
   const men = {
      type:"message",
      body:txtmsg.value
   };
   ws.send(JSON.stringify(men));
})

btnSale.addEventListener("click",(e)=>{
   e.preventDefault();
   const venta = {
      type:"sale",
      producto:parseInt(product.value),
      cantidad:parseInt(quantity.value)
   };
   ws.send(JSON.stringify(venta));

})

cerrar.addEventListener("click",e=>{
   ws.close();
   
})

formulario.addEventListener("submit",(e)=>{
   e.preventDefault();
   login();
})

// TODO enviar pong para que el servidor no muera 
const pingping =()=>{
   setInterval(()=>{
      ws.send(JSON.stringify({type:"ping"}));
   },60000)
}

// TODO creando graficos, codigo de CHARTJS
const loadChart = ()=>{
   var ctx = document.getElementById('myChart').getContext('2d');
   theChart = new Chart(ctx, {
      type: 'bar',
      data: {
         labels: ['ZAPATOS', 'CAMISAS', 'BILLETERAS'],
         datasets: [{
            label: '# of Votes',
            data: dataChart,
            backgroundColor: [
               'rgba(255, 99, 132, 0.2)',
               'rgba(54, 162, 235, 0.2)',
               'rgba(255, 206, 86, 0.2)',
               'rgba(75, 192, 192, 0.2)',
               'rgba(153, 102, 255, 0.2)',
               'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
               'rgba(255, 99, 132, 1)',
               'rgba(54, 162, 235, 1)',
               'rgba(255, 206, 86, 1)',
               'rgba(75, 192, 192, 1)',
               'rgba(153, 102, 255, 1)',
               'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
         }]
      },
      options: {
         scales: {
            yAxes: [{
               ticks: {
                  beginAtZero: true
               }
            }]
         }
      }
   });
}