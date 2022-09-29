<?php
    require('connect.php');

    $name = $_GET['input_name'];
    $email = $_GET['input_email'];
    $password = $_GET['input_password'];


    mysqli_query($conn, "INSERT INTO usuario (email, password, nome, dinheiro) VALUES ('$email', '$password', '$name', 0)");


?>