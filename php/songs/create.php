<?php

require '../http/respond.php';
require '../http/getBody.php';
require '../http/authenticate.php';
require '../db/admin.php';

$body = detectRequestBody();

if (!authenticate($body)) {
    send_response('Unauthorized', 401);
} else {
    $result = add_song($body);
    $code = 200;
    if (!$result) {
        $code = 400;
    }
    send_response($result, $code);
}
