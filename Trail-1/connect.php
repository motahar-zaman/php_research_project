<?php
	$fullname = $_POST['fullname'];
	$email = $_POST['email'];
	$password = $_POST['password'];

	//database connection
	$conn = new mysqli('localhost', 'root', '', 'malltest');
	if($conn->connect_error){
		die('Connection Failed : ' .$conn->connect_error);
	}else {
	    $stmt = $conn->prepare("insert into signup(fullname, email, password)
			values(?, ?, ?)");
		$stmt->bind_param("sss",$fullname, $email, $password);
		$stmt->execute();
		if(execute){

		}
		echo "Sign Up Successfully....";
		$stmt->close();
		$conn->close();
    }

?>