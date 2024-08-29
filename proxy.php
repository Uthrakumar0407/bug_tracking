<?php
    $url = $_GET['url'];
    //this will get the request body
    $data = file_get_contents('php://input');
    $headers = getallheaders();

    $curlHeaders = array();
    $allowedHeaders = [
        'Content-Type',
        'X-NN-Access-Key',
        'Accept',
        'Charset'
    ];
    foreach ($headers as $name => $value) {
        if( in_array($name,$allowedHeaders) ) {
            $curlHeaders[] = $name . ': ' . $value;
        }       
    }

    $result = perform_https_request($url, $data, $curlHeaders);
    //~ if($url == "https://payport.novalnet.de/v2/transaction/details"){
        //~ $result = json_decode($result,true);
        //~ if( ! empty( $result['transaction']['tid'] ) ) {
        //~ $result['transaction']['tid'] = (string)$result['transaction']['tid']; 
        //~ }if( ! empty( $result['subscription']['tid'] ) ) {
            //~ $result['subscription']['tid'] = (string)$result['subscription']['tid'];
        //~ }if( ! empty( $data['instalment']['tid'] ) ) {
            //~ $data['instalment']['tid'] = (string)$data['instalment']['tid'];
        //~ }
        //~ $result = json_encode($result);
    //~ }
    echo $result;
    
function perform_https_request($url, $callback_json_data, $headers) {
    
    // Initiate cURL
    $curl = curl_init();

    // Set cURL options
    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_POST, 1);
    curl_setopt($curl, CURLOPT_POSTFIELDS, $callback_json_data);
    curl_setopt( $curl, CURLOPT_HTTPHEADER, $headers);
    curl_setopt($curl, CURLOPT_FOLLOWLOCATION, 0);
    curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);
    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);

    // cURL time-out
    curl_setopt($curl, CURLOPT_TIMEOUT, 240);

    // Execute cURL
    $result   = curl_exec($curl);

    // Handle cURL error
    if (curl_errno($curl)) {
        echo 'Request Error:' . curl_error($curl);
    }
    // Close cURL
    curl_close($curl);
    
    return $result;
    
}
?>
