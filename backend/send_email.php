<?php

    if($_SERVER["REQUEST_METHOD"] == "POST") {

        $name = htmlspecialchars($_POST["firstName"]);
        $email = htmlspecialchars($_POST["email"]);
        $message = htmlspecialchars($_POST["message"]);

        echo "This are the datea";

        // header("Location: /Pages/contact.html");
    }

?>