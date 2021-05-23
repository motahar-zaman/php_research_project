<?php
    //database connection
	$conn = new mysqli('localhost', 'root', '', 'malltest');
	if($conn->connect_error){
		die('Connection Failed : ' .$conn->connect_error);
	}
	else {
        $type = $_POST["type"];

        if($type = "login"){
            $email = $_POST['email'];
            $password = $_POST['password'];

            $query = "SELECT id, fullname, email, password FROM signup WHERE email = '$email' AND password = '$password'";
            $data = $conn->query($query);

            if ($data->num_rows > 0){
                echo "Login Successfully....";
            }
            else{
                echo "Login Failed....";
            }
        }
        else{
            $fullname = $_POST['fullname'];
            $email = $_POST['email'];
            $password = $_POST['password'];

            $stmt = $conn->prepare("insert into signup(fullname, email, password) values(?, ?, ?)");
            $stmt->bind_param("sss",$fullname, $email, $password);
            $stmt->execute();
            $stmt->close();

            echo "Sign Up Successfully....";
        }

		$conn->close();
    }

?>