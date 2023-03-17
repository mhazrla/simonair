<?php

namespace App\Http\Controllers;

use App\Models\Dashboard;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;

class DashboardController extends Controller
{
    public function index()
    {
        $alats = Dashboard::get();
        return Inertia::render(
            'Dashboard/Index',
            [
                'title' => 'Dashboard',
                'alats' => $alats
            ]
        );
    }

    public function show($id)
    {
        $sensors = Dashboard::where('id_alat', $id)->get();
        return Inertia::render(
            'Dashboard/Detail',
            [
                'title' => 'Detail',
                'sensors' => $sensors
            ]
        );
    }

    public function store(Request $request)
    {

        $this->validate(
            $request,
            ['nama_alat' => 'required']
        );

        Dashboard::create([
            'nama_alat' => $request->nama_alat,
            'id_alat' => Str::random(12),
        ]);

        return to_route('dashboard')->with('message', 'Alat Berhasil Ditambahkan');
    }
}
