<?php
require "../functions/header.php";
require "../functions/response.php";

$json = file_get_contents('php://input');
$data = json_decode($json);
if ($data !== null) {
    require('../_config.php');
    require('../functions/jende.php');
    $phone = $data->phone;
    $password = $data->password;

    $sql = 'SELECT `pass` FROM `users` WHERE `phone`="' . $phone . '"';
    $data = mysqli_query($conn, $sql);
    $total = mysqli_num_rows($data);
    if ($total > 0) {
        $result = mysqli_fetch_assoc($data);
        if ($result['pass'] === md5($password)) {
            $token = Token::Sign($result['pass'], "JENDE");
            response(200, "Succesfull", $token);
        } else {
            response(400, "Invalid Credentials", null);
        }
    } else {
        response(400, "Invalid Credentials", null);
    }

} else {
    response(400, "Bad Request", null);
}