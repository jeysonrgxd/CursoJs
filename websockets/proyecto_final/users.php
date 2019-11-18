<?php

class WebSocketUser {

  public $socket;
  public $id;
  public $name;
  public $headers = array();
  public $handshake = false;

  public $handlingPartialPacket = false;
  public $partialBuffer = "";

  public $sendingContinuous = false;
  public $partialMessage = "";
  
  public $hasSentClose = false;

  function __construct($id, $socket) {
    $this->id = $id;
    $this->socket = $socket;
    $this->name = "gino";
  }
  public function getName(){
    return $this->name;
  }
  public function setName($name){
    $this->name = $name;
  }
}

class MyUser extends WebSocketUser {
  public $myId;

  function __construct($id, $socket, $myId) {
    parent::__construct($id, $socket);
    $this->myId = $myId;
  }
}