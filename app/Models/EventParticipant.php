<?php

namespace App\Models;

use App\Models\User;
use App\Models\Event;
use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property int $user_id
 * @property int $event_id
 * @property bool $reminder_active
 * @property \Illuminate\Support\Carbon|null $reminder_at
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read Event $event
 * @property-read User $user
 * @method static \Illuminate\Database\Eloquent\Builder<static>|EventParticipant newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|EventParticipant newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|EventParticipant query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|EventParticipant whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|EventParticipant whereEventId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|EventParticipant whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|EventParticipant whereReminderActive($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|EventParticipant whereReminderAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|EventParticipant whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|EventParticipant whereUserId($value)
 * @mixin \Eloquent
 */
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
