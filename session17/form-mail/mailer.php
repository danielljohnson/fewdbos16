<?php

// get form field values
$first_name = $_POST['first_name'];
$last_name = $_POST['last_name'];
$email = $_POST['email'];
$comments = $_POST['comments'];

// setup email
$to = 'dan@balancerockmedia.com';
$subject = 'Email Form Submission';
$message = "First Name: $first_name \n";
$message .= "Last Name: $last_name \n";
$message .= "Comments: $comments \n";
$headers = "From: $email" . "\r\n" . 'Reply-To: webmaster@example.com';

// echo $message;

// send email
if (mail($to, $subject, $message, $headers)) {
    echo 'success!';
    // header('Location: index.html');
} else {
    echo 'fail!';
}

?>