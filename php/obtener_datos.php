<?php

include "conexion.php";


    // Obtiene los datos del formulario
    $Nombre = $_POST["Nombre"];
    $Apellido = $_POST["Apellido"];
    $Direccion = $_POST["Direccion"];
    $Estudio = $_POST["Estudio"];
    $Numero_telefono = $_POST["Numero_telefono"];
    $Cedula = $_POST["Cedula"];

    // Query de inserción
    $query = "INSERT INTO paciente (Nombre, Apellido, Direccion, Estudio, Numero_telefono, Cedula) 
              VALUES ('$Nombre', '$Apellido', '$Direccion', '$Estudio', '$Numero_telefono', '$Cedula')";

    // Ejecuta la consulta
    $ejecute = mysqli_query($conn, $query);


        if ($ejecute) {
            echo '<script>
            alert("Datos Enviados yo")
            window.location = "../index.php"
            </script>';
        } else {
            echo '<script>
            alert("Datos no Enviados ")
            window.location = "../index.php"
            </script>';
        }
    

    mysqli_close(@$conn);


?>
