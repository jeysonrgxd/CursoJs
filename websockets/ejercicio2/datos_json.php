<?php
$json = array(
   array(
   "nombre"=>"jeyson",
   "apellido"=>"ramos garcia",
   "edad"=>"24",
   "profesion"=>"programador"
),
array(
   "nombre"=>"anderson",
   "apellido"=>"caceres",
   "edad"=>"23",
   "profession"=>"Dj"
),
array(
   "nombre"=>"estefany",
   "apellido"=>"chavez",
   "edad"=>"20",
   "profession"=>"contadora"
   )
);
 echo (json_encode($json));

// otro metodo estudiar como imprimir estos datos con javascript y rrecorrerlos
//  $json = array("Persona1"=>array(
//     "nombre"=>"jeyson",
//     "apellido"=>"ramos garcia",
//     "edad"=>"24",
//     "profesion"=>"programador"
//  ),
//  "persona2"=>array(
//     "nombre"=>"anderson",
//     "apellido"=>"caceres",
//     "edad"=>"23",
//     "profession"=>"Dj"
//  ),
//  "persona3"=>array(
//     "nombre"=>"estefany",
//     "apellido"=>"chavez",
//     "edad"=>"20",
//     "profession"=>"contadora"
//  )
//  );


//prueba de codigos de stados de hhtp al hacer una peticion
// http_response_code(500);
// echo http_response_code();

?>