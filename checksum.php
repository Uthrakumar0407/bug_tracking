<?php
// Read the request data from the "data" parameter
$data = $_REQUEST["data"];

//vendor 4 payment accesskey
//$accessKey = 'a87ff679a2f3e71d9181a67b7542122c';
//vendor 36 payment accesskey
//$accessKey = '19ca14e7ea6328a42e0eb13d585e4c22';

//$data .= strrev($accessKey);

// Calculate the SHA-256 checksum of the data
$checksum = hash("sha256", $data);

// Return the checksum as a JSON object
header("Content-Type: application/json");
echo json_encode(array("checksum" => $checksum));
?>
