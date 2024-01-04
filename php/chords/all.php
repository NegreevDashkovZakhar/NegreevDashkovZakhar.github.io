<?php

require '../http/respond.php';
require '../db/db.php';



$chords = get_all_chords();

function compareById($a, $b)
{
    return $a->id - $b->id;
}

// Sorting the array by the 'id' property
usort($chords, 'compareById');

send_response($chords);
