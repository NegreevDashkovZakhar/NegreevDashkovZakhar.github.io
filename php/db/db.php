<?php
require '../db/model/songs_count.php';
require '../db/model/song.php';
require '../db/model/chord.php';
require '../db/model/artist.php';

function get_artists_songs_count()
{
    $connect = pg_connect('host=localhost port=5432 dbname=tab_em_db user=tab_em_user password=pass1234');
    $result = pg_query(
        $connect,
        'SELECT 
            artists.id,
            artists.name,
            artists.description,
            COUNT(*) AS songs_count 
        FROM songs 
        RIGHT JOIN artists ON songs.artist_id=artists.id 
        GROUP BY artists.id;'
    );
    $array = array();
    while ($row = pg_fetch_row($result)) {
        $entry = new SongsCount($row[0], $row[1], $row[2], $row[3]);
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
            songs.id,
            artists.name,
            songs.name,
            songs.song_text,
            songs.year
        FROM songs 
        JOIN artists ON songs.artist_id=artists.id;'
    );
    $array = array();
    while ($row = pg_fetch_row($result)) {
        $entry = new Song($row[0], $row[1], $row[2], $row[3], $row[4]);
        $array[] = $entry;
    }
    pg_close($connect);
    return $array;
}

function get_artist_songs($artist_id)
{
    $connect = pg_connect('host=localhost port=5432 dbname=tab_em_db user=tab_em_user password=pass1234');
    $result = pg_query(
        $connect,
        "SELECT 
            songs.id,
            artists.name,
            songs.name,
            songs.song_text,
            songs.year
        FROM songs 
        JOIN artists ON songs.artist_id=artists.id
        WHERE artists.id='$artist_id';"
    );
    $array = array();
    while ($row = pg_fetch_row($result)) {
        $entry = new Song($row[0], $row[1], $row[2], $row[3], $row[4]);
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
    $artist = new Artist($row[0], $row[1], $row[2]);
    pg_close($connect);
    return $artist;
}

function get_song($id)
{
    $connect = pg_connect('host=localhost port=5432 dbname=tab_em_db user=tab_em_user password=pass1234');
    $result = pg_query(
        $connect,
        "SELECT 
            songs.id,
            artists.name,
            songs.name,
            songs.song_text,
            songs.year
        FROM songs 
        JOIN artists ON songs.artist_id=artists.id
        WHERE songs.id='$id';"
    );
    $row = pg_fetch_row($result);
    $artist = new Song($row[0], $row[1], $row[2], $row[3], $row[4]);
    pg_close($connect);
    return $artist;
}

function get_chords($songId)
{
    $connect = pg_connect('host=localhost port=5432 dbname=tab_em_db user=tab_em_user password=pass1234');
    $result = pg_query(
        $connect,
        "SELECT 
            chords.id,
            chords.name,
            chords.image_name
        FROM chords
        JOIN songs_chords ON chords.id=songs_chords.chord_id
        WHERE songs_chords.song_id=$songId;"
    );
    $array = array();
    while ($row = pg_fetch_row($result)) {
        $entry = new Chord($row[0], $row[1], $row[2]);
        $array[] = $entry;
    }
    pg_close($connect);
    return $array;
}

function get_all_chords()
{
    $connect = pg_connect('host=localhost port=5432 dbname=tab_em_db user=tab_em_user password=pass1234');
    $result = pg_query(
        $connect,
        "SELECT 
            chords.id,
            chords.name,
            chords.image_name
        FROM chords;"
    );
    $array = array();
    while ($row = pg_fetch_row($result)) {
        $entry = new Chord($row[0], $row[1], $row[2]);
        $array[] = $entry;
    }
    pg_close($connect);
    return $array;
}
