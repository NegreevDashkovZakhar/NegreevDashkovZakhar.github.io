<?php

class SongsCount
{
    public $artist_name;
    public $songs_count;

    function __construct($artist_name, $songs_count)
    {
        $this->artist_name = $artist_name;
        $this->songs_count = $songs_count;
    }
}
