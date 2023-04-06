<?php

require '../http/respond.php';
require '../db/db.php';

$name = $_GET["name"];
$artist = get_artist($name);

send_response($artist);