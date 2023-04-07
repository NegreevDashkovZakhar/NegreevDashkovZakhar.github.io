<?php

class Song
{
    public $id;
    public $artist_name;
    public $song_name;
    public $song_text;
    public $song_year;

    function __construct($id, $artist_name, $song_name, $song_text, $song_year)
    {
        $this->id = $id;
        $this->artist_name = $artist_name;
        $this->song_name = $song_name;
        $this->song_text = $song_text;
        $this->song_year = $song_year;
    }
}
