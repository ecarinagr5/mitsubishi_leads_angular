<?php

  //DATABASE Connection
  require_once("../connection.php");
  $db = new DB("162.248.53.58", "20190611_briefux", "sis_briefux", "Q7waJh#");

    $nombre =$_GET['nombre'];
    $telefono =$_GET['telefono'];
    $email = $_GET['email'];
    $distribuidor = $_GET['$distribuidor'];
    $source = $_GET['utm_source'];
    $utm_medium = $_GET['utm_medium'];
    $utm_campaign = $_GET['utm_campaign'];
    $utm_content = $_GET['utm_content'];
    $utm_term = $_GET['utm_term'];



    if(!empty( $telefono)){
      $db->query("INSERT INTO contacto (nombre,email,telefono,distribuidor,source,medium,campaign,content,term,fecha,fecha2,msj,id_ws,idLead,idTag)
                  VALUES ('".$nombre."','$email','".$telefono."','".$distribuidor."','".$source."','".$utm_medium."','".$utm_campaign."','".$utm_content."','".$utm_term."',NOW(),NOW(),'".$msj."','".$id_ws."','".$id_lead."','".$id_tag."' )
                  ");
      }
      else {
        http_response_code(405);
        echo "ERROR TO INSERT POST";
      }

?>
