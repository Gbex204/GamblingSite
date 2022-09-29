<?php
    $host = 'localhost:3306';
    $user = 'root';
    $pass = '';
    $db = 'gambling';

    // Cria a conexão com o banco de dados
    $conn = mysqli_connect($host, $user, $pass, $db);

    if (!$conn) {
        die("Connection Failed: " . mysqli_connect_error());
    }
?>