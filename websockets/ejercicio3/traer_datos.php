<?php

   $con=null;
   try{
      $con =new PDO("mysql:host=localhost; dbname=marvel; charset=utf8","root","");
      if(isset($_GET["id"])){
         $id = $_GET["id"];
         $sql = "SELECT * FROM characters WHERE ID=$id";
      }else{
         $sql = "SELECT * FROM characters";
      }
      $smt = $con->prepare($sql);
      $smt->execute();
      $resultado = $smt->fetchAll(PDO::FETCH_ASSOC);
      echo json_encode($resultado);
   }
   catch(PDOExeption $e){
      echo "Error".$e->getMessage();
   }

?>