<?php

include "db_connect.php";

$sql = "SELECT * FROM recenze ORDER BY id DESC";

$result = mysqli_query($conn,$sql);

while($row = mysqli_fetch_assoc($result)){

echo "<div class='karta-recenze'>";
echo "<h4>".$row["jmeno"]."</h4>";
echo "<p>".$row["text"]."</p>";
echo "</div>";

}

?>