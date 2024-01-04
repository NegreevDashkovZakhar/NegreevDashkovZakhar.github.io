<?php

class SongsCount
{
    public $artist_id;
    public $artist_name;
    public $artist_description;
    public $songs_count;

    function __construct($artist_id, $artist_name, $artist_description, $songs_count)
    {
        $this->artist_id = $artist_id;
        $this->artist_name = $artist_name;
        $this->artist_description = $artist_description;
        $this->songs_count = $songs_count;
    }
}
