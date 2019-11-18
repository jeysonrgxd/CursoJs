<?php
$user = isset($_POST["user"]) ? $_POST["user"] : null;
$pass = isset($_POST["pass"]) ? $_POST["pass"] : null;

if ($user != null && $pass != null) {
   $respuesta = validar($user, $pass);
   echo $respuesta;
}
function validar($usu, $con)
{
   $res = [];
   if (($usu == "jeyson"|| $usu=="carlos") && $con == "123") {
      $res["message"] = "ok";
      $res["clave_token"] = "haBGmzjKUrJCihz3T5Dw";
   } else {
      // $res["message"] ="invalid";
      return http_response_code(401);
   }
   return json_encode($res);
}
