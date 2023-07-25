<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Voltage extends Model
{
    use HasFactory, HasUuids;

    protected $fillable = ['id_alat', 'nama_alat', 'ph', 'suhu', 'amonia', 'tss', 'tds', 'salinitas'];
}
