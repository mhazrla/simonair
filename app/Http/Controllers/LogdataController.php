<?php

namespace App\Http\Controllers;

use App\Models\Dashboard;
use App\Models\Logdata;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LogdataController extends Controller
{
    public function show($id)
    {
        $log = Logdata::where('id_alat', $id)->get();
        $data = time();
        $alats = Dashboard::get();

        return Inertia::render(
            'Logdata/Detail',
            [
                'title' => 'Log Data',
                'log' => $log,
                'alats' => $alats,
                'datas' => $data
            ]
        );
    }
}
