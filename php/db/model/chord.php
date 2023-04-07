<?php

class Chord
{
    public $name;
    public $fileName;

    function __construct($name, $fileName)
    {
        $this->name = $name;
        $this->fileName = $fileName;
    }
}
