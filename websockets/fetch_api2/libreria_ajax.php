<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <meta http-equiv="X-UA-Compatible" content="ie=edge">
   
   <title>Document</title>
   <style>
    body{
   background-color:#333;
   color:white;
   }
   </style>
</head>
<body> 
<form action="" id="formulario">
   <input type="text" placeholder="Nombre" name="nombre"><br><br>
   <input type="text" placeholder="Apellido" name="apellido"><br><br>
   <input type="number" placeholder="edad" name="edad"><br><br>
   <button id="boton">Enviar</button>
</form>
   <!-- <button onclick="send()">Send JSONP</button> -->
   <div id="contenedor"></div>
   <script async src="main2.js"></script>
</body>
</html>