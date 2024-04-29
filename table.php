<?php
include("db.php");

// sql to create table
$sql = "CREATE TABLE users (id INT AUTO_INCREMENT PRIMARY KEY, first_name VARCHAR(50) NOT NULL, 
last_name VARCHAR(50) NOT NULL, email VARCHAR(50) NOT NULL, phone_number VARCHAR(150) NOT NULL, password VARCHAR(255) NOT NULL)";

if (mysqli_query($connect, $sql)) {
    echo "Table users created succesfully";
}else{
    echo "Error creating table: " . mysqli_error($connect);
}

mysqli_close($connect);
?>