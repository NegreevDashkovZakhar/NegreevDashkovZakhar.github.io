<?php

class Song
{
    public $artist_name;
    public $song_name;
    public $song_year;

    function __construct($artist_name, $song_name, $song_year)
    {
        $this->artist_name = $artist_name;
        $this->song_name = $song_name;
        $this->song_year = $song_year;
    }
}
