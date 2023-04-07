<?php

require '../http/respond.php';
require '../db/db.php';

$id = $_GET["id"];
$songs = get_songs($id);

send_response($songs);