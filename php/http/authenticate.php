<?php

function authenticate(&$body)
{
    $login = $body['login'];
    $password = $body['password'];
    unset($body['login']);
    unset($body['password']);

    $connect = pg_connect('host=localhost port=5432 dbname=tab_em_db user=tab_em_user password=pass1234');
    $result = pg_query(
        $connect,
        "SELECT 
            admins.id
        FROM admins 
        WHERE admins.login='$login' AND admins.password='$password';"
    );
    $row = pg_fetch_row($result);

    return $row[0] > 0;
}
