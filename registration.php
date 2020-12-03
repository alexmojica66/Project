<?php
session_start();
header('location:login.html');
$con = mysqli_connect('localhost', 'phpmyadmin', 'March191998');

mysqli_select_db($con, 'phpmyadmin');

echo "connected";

$name = $_POST['username'];
$pass = $_POST['password'];



$s = "select * from usertable where name = '$name'";

$result = mysqli_query($con, $s);
$num = mysqli_num_rows($result);

if($num == 1){
  echo "username taken";
}
else{
  $reg = "insert into usertable(name, password) values ('$name', '$pass')";
  mysqli_query($con, $reg);
  echo "registratino successful";
}

 ?>
