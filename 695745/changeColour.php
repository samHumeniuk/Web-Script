<?php

    $name = "'". $_GET['name'] . "'";
    $name = $_GET['name'] ;
    file_put_contents("colourScheme.txt",$name);

?>;
