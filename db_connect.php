<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "recenze_db";

$conn = mysqli_connect($servername,$username,$password,$dbname);

if(!$conn){
die("Chyba připojení");
}

mysqli_set_charset($conn,"utf8");

?>