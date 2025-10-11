<?php

namespace App\Models;

use App\Models\User;
use App\Models\EventCategory;
use App\Models\EventParticipant;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    protected $fillable = [
        'title',
        'description',
        'category_id',
        'creator_id',
        'location_address',
        'location_latitude',
        'location_longitude',
        'start_at',
        'end_at',
    ];

    protected $casts = [
        'start_at' => 'datetime',
        'end_at' => 'datetime',
    ];

    public function category()
    {
        return $this->belongsTo(EventCategory::class, 'category_id', 'id');
    }
    public function participant()
    {
        return $this->belongsTo(EventParticipant::class, 'event_id', 'id');
    }

    public function creator()
    {
        return $this->belongsTo(User::class, 'creator_id', 'id');
    }
}
