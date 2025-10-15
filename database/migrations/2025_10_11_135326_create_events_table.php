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
        Schema::create('events', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->longText('description')->nullable();
            $table->foreignIdFor(\App\Models\EventCategory::class,'category_id')->nullable()->constrained()->nullOnDelete();
            $table->foreignIdFor(\App\Models\User::class, 'creator_id')->nullable()->constrained()->nullOnDelete();
            $table->text('location_address')->nullable();
            $table->string('location_latitude')->nullable();
            $table->string('location_longitude')->nullable();
            $table->datetime('start_at');
            $table->datetime('end_at');
            $table->boolean('is_active')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('events');
    }
};
