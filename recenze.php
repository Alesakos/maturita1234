<?php

$pripojeni = new mysqli("localhost","root","","novak");

if($pripojeni->connect_error){
die("Chyba připojení");
}

if(isset($_POST["jmeno"])){

$jmeno = $_POST["jmeno"];
$email = $_POST["email"];
$recenze = $_POST["recenze"];

$sql = "INSERT INTO recenze (`Jméno`,`E-mail`,`recenze`) VALUES ('$jmeno','$email','$recenze')";
$pripojeni->query($sql);

}

$vypis = $pripojeni->query("SELECT `Jméno`,`recenze` FROM recenze");

while($radek = $vypis->fetch_assoc()){

echo "<div class='recenze-karta'>";
echo "<h3>".$radek["Jméno"]."</h3>";
echo "<p>".$radek["recenze"]."</p>";
echo "</div>";

}

?>