<?php

include 'db_connection.php';

header("Access-Control-Allow-Origin: * ");
header("Access-Control-Allow-Headers: * ");

$request_body = file_get_contents('php://input');
$data = json_decode($request_body);

$names = $data ->names;
$species = $data ->species;
$gender = $data ->gender;
$age = $data ->age;
$MicroChip = $data ->MicroChip;
$petOwner = $data ->petOwner;
$ownerId = $data ->ownerId;
$origin = $data ->origin;
$destination = $data ->destination;

echo ($names. " ". $species);






?>