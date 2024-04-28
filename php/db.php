<?php
$connect = mysqli_connect('localhost', 'root', '', 'enugu_urbanhive');
if(!$connect){
    die('could not connect to server'.mysqli_error);
}
?>