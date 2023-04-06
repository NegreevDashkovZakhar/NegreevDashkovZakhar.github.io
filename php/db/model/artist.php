<?php

class Artist
{
    public $name;
    public $description;

    function __construct($name, $description)
    {
        $this->name = $name;
        $this->description = $description;
    }
}
