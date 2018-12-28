<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    // 
    public function getSeasonAttribute($value)
    {
        return config('variables.season')[$value];
    }
}
