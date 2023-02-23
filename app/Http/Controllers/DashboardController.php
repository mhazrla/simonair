<?php

namespace App\Http\Controllers;

use App\Models\Dashboard;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $tools = Dashboard::get();
        return Inertia::render(
            'Dashboard/Index',
            [
                'title' => 'Dashboard',
                'tools' => $tools
            ]
        );
    }
}
