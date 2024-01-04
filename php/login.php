<?php

require './http/respond.php';
require './http/getBody.php';
require './http/authenticate.php';

$body = detectRequestBody();

if (!authenticate($body)) {
    send_response('Not found', 404);
} else {
    send_response('OK', 200);
}
