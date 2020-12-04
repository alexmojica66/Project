<?php
session_start();

$con = mysqli_connect('localhost', 'phpmyadmin', 'March191998');

mysqli_select_db($con, 'phpmyadmin');

echo "Connected";

//$name = $_POST['username'];
//$pass = $_POST['password'];
//$name = "alex";
//$pass = "123456";

//$s = "select * from usertable where name = '$name'";

//$result = mysqli_query($con, $s);

//$num = mysqli_num_rows($result);

//if($num == 1){
//	echo "username taken";
//}
//else{
//	$reg = "insert into usertable(name, password) values ('$name', '$pass') ";
	//mysqli_query($con, $reg);
//	echo "Registration successful";
}

?>
