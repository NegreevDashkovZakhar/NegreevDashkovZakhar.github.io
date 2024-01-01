<?php

require '../http/respond.php';
require '../db/db.php';

$id = $_GET["id"];
$song = get_song($id);

send_response($song);
