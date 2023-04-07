<?php
ini_set('display_errors', '1');
ini_set('display_startup_errors', '1');
error_reporting(E_ALL);

require '../http/respond.php';
require '../db/db.php';

$id = $_GET["id"];
$chords = get_chords($id);

send_response($chords);