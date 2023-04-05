<?php
// echo 'a'
$connect = pg_connect('host=localhost port=5432 dbname=tab_em_db user=tab_em_user password=pass1234');
echo $connect;
pg_close($connect);
?>