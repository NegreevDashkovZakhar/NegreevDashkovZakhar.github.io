<?php
require '../db/model/songs_count.php';
require '../db/model/song.php';
require '../db/model/artist.php';

function get_artists_songs_count()
{
    $connect = pg_connect('host=localhost port=5432 dbname=tab_em_db user=tab_em_user password=pass1234');
    $result = pg_query(
        $connect,
        'SELECT 
            artists.name,
            COUNT(*) AS songs_count 
        FROM songs 
        JOIN artists ON songs.artist_id=artists.id 
        GROUP BY artists.name;'
    );
    $array = array();
    while ($row = pg_fetch_row($result)) {
        $entry = new SongsCount($row[0], $row[1]);
        $array[] = $entry;
    }
    pg_close($connect);
    return $array;
}

function get_all_songs()
{
    $connect = pg_connect('host=localhost port=5432 dbname=tab_em_db user=tab_em_user password=pass1234');
    $result = pg_query(
        $connect,
        'SELECT 
            artists.name,
            songs.name,
            songs.year
        FROM songs 
        JOIN artists ON songs.artist_id=artists.id;'
    );
    $array = array();
    while ($row = pg_fetch_row($result)) {
        $entry = new Song($row[0], $row[1], $row[2]);
        $array[] = $entry;
    }
    pg_close($connect);
    return $array;
}

function get_artist($name)
{
    $connect = pg_connect('host=localhost port=5432 dbname=tab_em_db user=tab_em_user password=pass1234');
    $result = pg_query(
        $connect,
        "SELECT 
            artists.id,
            artists.name,
            artists.description
        FROM artists 
        WHERE artists.name='$name';"
    );
    $row = pg_fetch_row($result);
    $artist = new Artist($row[0], $row[1]);
    pg_close($connect);
    return $artist;
}
