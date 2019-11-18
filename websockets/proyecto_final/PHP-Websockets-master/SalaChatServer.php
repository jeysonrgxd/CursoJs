<?php
require_once('websockets.php');
class SalaChatServer extends WebSocketServer
{
   protected function process($user, $message)
   {
      echo 'user sent: ' . $message . PHP_EOL;
      // var_dump($user->id);
      echo "Envia el us: ".$user->id."\n";
      foreach ($this->users as $currentUser) {
         if ($currentUser !== $user)
            $this->send( $currentUser, $message);
         
      }
   }
   protected function connected($user)
   {
      echo 'user connected' . PHP_EOL;
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
