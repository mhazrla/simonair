<?php

namespace App\Http\Controllers;

use App\Models\Dashboard;
use App\Models\Logdata;
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
        $alats = Dashboard::get();
        $sensor = Dashboard::where('id_alat', $id)->get();
        return Inertia::render(
            'Dashboard/Detail',
            [
                'title' => 'Detail',
                'sensor' => $sensor,
                'alats' => $alats
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

        return to_route('/')->with('message', 'Alat Berhasil Ditambahkan');
    }

    public function getData(Request $request)
    {
        $id_alat = $request->segment(3);
        $nama_alat = $request->segment(4);
        $ph = $request->segment(5);
        $suhu = $request->segment(6);
        $amonia = $request->segment(7);
        $tss = $request->segment(8);
        $tds = $request->segment(9);
        $salinitas = $request->segment(10);
        $status = 0;


        $amonia < 0.1 and $suhu > 27 && $suhu < 29 and
            $ph > 7 && $ph < 8 and $tss <= 5 and
            $tds <= 1000 and $salinitas == 0 ? $status = 1 : $status;

        $data = [
            "id_alat" => $id_alat,
            "nama_alat" => $nama_alat,
            "ph" => $ph,
            "suhu" => $suhu,
            "amonia" => $amonia,
            "tss" => $tss,
            "tds" => $tds,
            "salinitas" => $salinitas,
            "status" => $status
        ];

        Dashboard::where('id_alat', $id_alat)->update($data);
        Logdata::create($data);
        // Not finished yet
        return redirect("/detail/" . $id_alat);
    }
}
