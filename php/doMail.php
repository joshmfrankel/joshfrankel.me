<?php

    $response = array();

    // Post data
    $name      = $_POST['name'];
    $email     = $_POST['email'];
    $question  = $_POST['question'];
    $mathCheck = $_POST['math'];

    // Honeypot Value
    $honeyPotCheck = $_POST['zipcode'];

    if (empty($name)) {
        $response = array(
            'msg' => 'Invalid data in name field',
            'errorFlag' => true
        );
    }

    if (empty($email)) {
        $response = array(
            'msg' => 'Invalid data in email field',
            'errorFlag' => true
        );
    }

    if (empty($question)) {
        $response = array(
            'msg' => 'Invalid data in question field',
            'errorFlag' => true
        );
    }

    // Honeypot check
    if (!empty($honeyPotCheck)) {
        $response = array(
            'msg' => 'You sir are a bot!',
            'errorFlag' => true
        );
    }

    // Math Check
    if ($mathCheck != 5 && !filter_var($mathCheck, FILTER_VALIDATE_INT)) {
        $response = array(
            'msg' => 'Invalid Robot check',
            'errorFlag' => true
        );
    }

    // Invalid email address
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $response = array(
            'msg' => 'Invalid Email format',
            'errorFlag' => true
        );
    }

    if (!empty($response)) {
        echo json_encode($response);
        exit;
    }

    // Sanitize mail values
    $sName = 'John Doe';
    $sName = filter_var($name, FILTER_SANITIZE_STRING);
    $sEmail = filter_var($email, FILTER_SANITIZE_EMAIL);
    $sQuestion = filter_var($question, FILTER_SANITIZE_STRING);

    // Require mailer class
    require_once('class.phpmailer.php');

    // init mailer
    $mail = new PHPMailer();

    $mail->From = $sEmail;
    $mail->FromName = $sName;
    $mail->AddAddress('josh@joshfrankel.me');
    $mail->Subject = $sName . ' sent a message via my contact form';
    $mail->Body    = $sQuestion;

    if(!$mail->Send()) {
       //echo 'Message could not be sent.';
       //echo 'Mailer Error: ' . $mail->ErrorInfo;
       //return 0;

       $response = array(
            'msg' => 'Message could not be sent',
            'errorFlag' => true
        );

    } else {

        $response = array(
            'msg' => '<div class="alert alert-success"><span class="glyphicon glyphicon-ok-sign"></span>&nbsp;<strong>Success!</strong> Message has been sent to Josh.</div>',
            'errorFlag' => false
        );
    }

    echo json_encode($response);
    exit;
