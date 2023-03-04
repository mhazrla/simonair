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
            $table->char('id_alat', 12);
            $table->foreign('id_alat')->references('id_alat')->on('dashboard');
            $table->float('ph', 2, 2)->default(0);
            $table->float('suhu', 2, 2)->default(0);
            $table->float('amonia', 2, 2)->default(0);
            $table->float('tds', 2, 2)->default(0);
            $table->float('tss', 2, 2)->default(0);
            $table->float('salinitas', 2, 2)->default(0);
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
