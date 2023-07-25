<?php

namespace App\Http\Controllers;

use App\Models\Dashboard;
use App\Models\Logdata;
use App\Models\Voltage;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Ramsey\Uuid\Uuid;

class VoltageController extends Controller
{
    public function getData(Request $request)
    {
        $id_alat = $request->segment(4);
        $nama_alat = $request->segment(5);
        $ph = $request->segment(6);
        $suhu = $request->segment(7);
        $amonia = $request->segment(8);
        $tss = $request->segment(9);
        $tds = $request->segment(10);
        $salinitas = $request->segment(11);
        $status = 0;

        if ($amonia < 0.1) {
            if ($ph >= 6 && $ph <= 8.5) {
                if ($suhu >= 28 && $suhu <= 32) {
                    if ($tds < 1000 and ($tss > 3.8 or $salinitas >= 0 && $salinitas <= 0.4)) {
                        $status = 1;
                    }
                }
            }
        }


        $data = [
            'id' => Uuid::uuid4()->toString(),
            "id_alat" => $id_alat,
            "nama_alat" => $nama_alat,
            "ph" => $ph,
            "suhu" => $suhu,
            "amonia" => $amonia,
            "tss" => $tss,
            "tds" => $tds,
            "salinitas" => $salinitas,
            "status" => $status,
            'created_at' => \Carbon\Carbon::now()->toDateTimeString()
        ];
        Voltage::insert($data);
        return response()->json(['message' => 'Success'], 200);
    }

    public function show($id)
    {
        $log = Voltage::where('id_alat', $id)->firstOrFail()->get();
        $alats = Dashboard::get();

        return Inertia::render(
            'Voltage/Detail',
            [
                'title' => 'Voltage Log Data',
                'log' => $log,
                'alats' => $alats,
            ]
        );
    }
}
