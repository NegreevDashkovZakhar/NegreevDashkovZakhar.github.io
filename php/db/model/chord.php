<?php

class Chord
{
    public $id;
    public $name;
    public $fileName;

    function __construct($id, $name, $fileName)
    {
        $this->id = $id;
        $this->name = $name;
        $this->fileName = $fileName;
    }
}
