<?php
   $get = substr("/?user=jeyson&token=123456789",2);
   $valor = explode("&",$get);
   $usu = explode("=",$valor[0])[1];
   $token = explode("=",$valor[1])[1];


?>