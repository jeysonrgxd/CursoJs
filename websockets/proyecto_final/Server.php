<?php
require_once('websockets.php');
class SalaChatServer extends WebSocketServer
{
   protected function process($user, $message)
   {
      //$recivido = json_decode($message,true);//devuelve array indexado
      $recivido = json_decode($message);//devuelve objeto
      $tipo_dato = $recivido->type;
      $validar = false;
      switch($tipo_dato){
         case"message":
            $envio = ["type"=>"message","user"=>$user->name,"body"=>$recivido->body];
            $resp = json_encode($envio);
         break;
         case "sale":
            $envio = ["type"=>"sale","user"=>$user->name,"producto"=>$recivido->producto,"cantidad"=>$recivido->cantidad];
            $resp= json_encode($envio);
         break;
         case "ping":
            $validar=true;
            $envio = ["type"=>"pong"];
            $resp = json_encode($envio);
         break;
      }
      // echo 'user '. $user->name.' envia: ' . $message . PHP_EOL;
      // var_dump($user->id);
      // echo "Envia el us: " . $user->id . "\n";
      if(!$validar){
         foreach ($this->users as $currentUser) {
            // if ($currentUser !== $user)
               $this->send($currentUser, $resp);
         }
      }else{
         $this->send($user, $resp);
      }
   }
   protected function connected($user)
   {
      $get = substr($user->headers["get"], 2);
      $valor = explode("&", $get);
      $usu = explode("=", $valor[0])[1];
      $token = explode("=", $valor[1])[1];
      if ($token == "haBGmzjKUrJCihz3T5Dw") {
         $user->name=$usu;
         echo "user {$user->name} connected" . PHP_EOL;
         // echo $user->name .PHP_EOL;
      } else {
         $id_usu = $user->id;
         foreach ($this->sockets as $valor => $val) {
            if ($id_usu == $valor) {
               $this->disconnect($this->sockets[$id_usu]);
            }
         }
      }
   }
   protected function closed($user)
   {
      echo 'user disconnected' . PHP_EOL;
   }
}
   $chatServer = new SalaChatServer("localhost", "10000");
   try {
      $chatServer->run();
      // sleep(10);
      // exit;
   }
   catch (Exception $e) {
      $chatServer->stdout($e->getMessage());
   }

