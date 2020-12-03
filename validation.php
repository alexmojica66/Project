<?php
session_start();

$con = mysqli_connect('localhost', 'phpmyadmin', 'March191998');

mysqli_select_db($con, 'phpmyadmin');

echo "connected";

$name = $_POST['username'];
$pass = $_POST['password'];



$s = "select * from usertable where name = '$name' && password = '$pass'";

$result = mysqli_query($con, $s);
$num = mysqli_num_rows($result);

if($num == 1){
    header('location:index.html');
}
else{
    header('location:login.html');
}

 ?>
