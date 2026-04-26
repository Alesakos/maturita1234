<?php

$jmeno = $_POST["jmeno"];
$text = $_POST["text"];

$data = $jmeno . " | " . $text . "\n";

file_put_contents("recenze.txt", $data, FILE_APPEND);

header("Location: index.html");

?>