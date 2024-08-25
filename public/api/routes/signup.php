<?php
require "../functions/header.php";
require "../functions/response.php";

$json = file_get_contents('php://input');
$data = json_decode($json);
if ($data !== null) {
    require('../_config.php');
    require('../functions/jende.php');

    $name = $data->name;
    $phone = $data->phone;
    $uid = $data->uid;
    $password = $data->password;

    $sql = "SELECT * FROM `users` WHERE `phone`='" . $phone . "' OR `uid` ='" . $uid . "'";
    $data = mysqli_query($conn, $sql);
    $total = mysqli_num_rows($data);
    if ($total > 0) {
        response(400, "Duplicate Registration", null);
    } else {
        $pass = md5($password);
        $sql2 = "INSERT INTO `users`(`name`, `phone`, `uid`, `pass`) VALUES ('" . $name . "','" . $phone . "','" . $uid . "','" . $pass . "')";
        mysqli_query($conn, $sql2);
        $payload = md5($phone);
        $token = Token::Sign($payload, "JENDE");
        response(200, "Successfull", $token);
    }

} else {
    response(400, "Bad Request", null);
}