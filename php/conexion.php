<?php

$conn = mysqli_connect("localhost", "root", "", "centro_diagnostico_bd");
 if($conn){
    echo"conectado a la base de datos";
 } else{
    echo"no se conecto a la base de datos";
 }

?>