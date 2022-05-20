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

$sql = " INSERT INTO expawts-pet relocation (id, name, species, gender, age, MicroChipId, ownerName, ownerId, origin, destination) VALUES (1, Katy, Avian, female, 12, 2, Natasha, 12, 12, 12);";
$result = mysqli_query($conn, $sql);

if(!$result){
    echo("Error Description:" .mysqli_error($conn));
}else{
    echo ("All is Good! Add pet! ");
}






?>