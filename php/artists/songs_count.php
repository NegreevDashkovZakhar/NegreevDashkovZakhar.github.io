<?php

require '../http/respond.php';
require '../db/db.php';

$songs_count_array = get_artists_songs_count();

send_response($songs_count_array);