<?php 



$sql="select * from student";
  $result = $conn->query($sql);


  foreach ($result as $value) {
    echo $value['id'];

  }
  ?>