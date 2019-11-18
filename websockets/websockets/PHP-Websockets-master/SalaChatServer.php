<?php
require_once('websockets.php');
class SalaChatServer extends WebSocketServer
{
   protected function process($user, $message)
   {
      echo 'user sent: ' . $message . PHP_EOL;
      // var_dump($user->id);
      echo "Envia el us: " . $user->id . "\n";
      foreach ($this->users as $currentUser) {
         if ($currentUser !== $user)
            $this->send($currentUser, $message);
      }
   }
   protected function connecting($user)
   {

      // echo $usuario ."\n" . $token;
      // echo "conectando \n";
      // var_dump($user);
      // var_dump($this->sockets);
      // foreach($this->sockets as $valor=>$val){
      //    if($id_usu == $valor){
      //       $this->disconnect($this->sockets[$id_usu]);

      //    }
      // }

   }
   protected function connected($user)
   {
      $get = substr($user->headers["get"], 2);
      $valor = explode("&", $get);
      $usu = explode("=", $valor[0])[1];
      $token = explode("=", $valor[1])[1];
      if ($usu == "jeyson" && $token == "123456789") {
         echo 'user connected' . PHP_EOL;
      }else{
         $id_usu = $user->id;
         foreach ($this->sockets as $valor => $val) {
            if ($id_usu == $valor) {
               $this->disconnect($this->sockets[$id_usu]);
            }
         }      
      }
      //   $var =  explode("?",$user->headers["get"]);
      // var_dump($user);
   }
   protected function closed($user)
   {
      echo 'user disconnected' . PHP_EOL;
   }
}

$chatServer = new SalaChatServer("localhost", "10000");
try {
   $chatServer->run();
   sleep(10);
} catch (Exception $e) {
   $chatServer->stdout($e->getMessage());
}
