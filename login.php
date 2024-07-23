<?php
$host_name = "localhost";
$email = "root";
$password = "";
$db_name = "test_db";

$conn = new mysqli($host_name, $email, $password, $db_name);

if ($conn->connect_error) {
    die("Connection Failed: " . $conn->connect_error);
}

$email = $_POST['email'];
$password = $_POST['password'];

$sql = "SELECT * FROM users WHERE email='$email' and password='$password'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo "Login Successful!";
} else {
    echo "Login Failed!";
}

$conn->close();
?>