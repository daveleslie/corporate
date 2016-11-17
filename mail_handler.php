<?php

if(isset($_POST['submit'])){
    $to = "bigwaive@gmail.com";
    $name = $_POST['name'];
    $company = $_POST['company'];
    $from = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $name . " from " . $company . " send the following message:" . "\n\n" . $_POST['message'];

    $headers = "From: " . $from;

    mail($to, $subject, $message, $headers);
    echo "Mail sent. Thank you, we will contact you shortly.";
    
}

?>