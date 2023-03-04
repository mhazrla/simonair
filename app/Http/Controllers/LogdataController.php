<?php

namespace App\Http\Controllers;

use App\Models\Logdata;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LogdataController extends Controller
{
    public function show($id)
    {
        $log = Logdata::where('id', $id)->get();

        return Inertia::render(
            'Logdata/Detail',
            [
                'log' => $log,
            ]
        );
    }
}
