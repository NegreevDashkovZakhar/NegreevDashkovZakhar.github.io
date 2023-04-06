<?php

require '../http/respond.php';
require '../db/db.php';

$songs = get_all_songs();

send_response($songs);