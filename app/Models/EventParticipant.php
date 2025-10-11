<?php

namespace App\Models;

use App\Models\User;
use App\Models\Event;
use Illuminate\Database\Eloquent\Model;

class EventParticipant extends Model
{
    protected $fillable = [
        'user_id',
        'event_id',
        'reminder_active',
        'reminder_at',
    ];

    protected $casts = [
        'reminder_active' => 'boolean',
        'reminder_at' => 'datetime',
    ];

    public function event(){
        return $this->belongsTo(Event::class);
    }
    public function user(){
        return $this->belongsTo(User::class,'user_id','id');
    }
}
