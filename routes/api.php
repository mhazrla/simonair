<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\VoltageController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/monitoring/{id}/{nama}/{ph}/{suhu}/{amonia}/{tss}/{tds}/{salinitas}', [DashboardController::class, 'getData']);
Route::get('/monitoring/voltage/{id}/{nama}/{ph}/{suhu}/{amonia}/{tss}/{tds}/{salinitas}', [VoltageController::class, 'getData']);
Route::get('/datas', [DashboardController::class, 'ApiCall']);
Route::get('/data/{id_alat}', [DashboardController::class, 'ApiCallById']);
