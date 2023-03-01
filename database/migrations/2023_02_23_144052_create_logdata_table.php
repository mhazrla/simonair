<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('logdata', function (Blueprint $table) {
            $table->id();
            $table->string('nama_alat');
            $table->char('alatId', 12);
            $table->foreign('alatId')->references('alatId')->on('dashboard');
            $table->float('ph', 2, 2);
            $table->float('suhu', 2, 2);
            $table->float('amonia', 2, 2);
            $table->float('tds', 2, 2);
            $table->float('tss', 2, 2);
            $table->float('salinitas', 2, 2);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('logdata');
    }
};
