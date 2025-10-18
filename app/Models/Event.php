<?php

namespace App\Models;

use App\Models\User;
use App\Models\EventCategory;
use App\Models\EventParticipant;
use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property string $title
 * @property string|null $description
 * @property int|null $category_id
 * @property int|null $creator_id
 * @property string|null $location_address
 * @property string|null $location_latitude
 * @property string|null $location_longitude
 * @property \Illuminate\Support\Carbon $start_at
 * @property \Illuminate\Support\Carbon $end_at
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read EventCategory|null $category
 * @property-read User|null $creator
 * @property-read \Illuminate\Database\Eloquent\Collection<int, EventParticipant> $participant
 * @property-read int|null $participant_count
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Event newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Event newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Event query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Event whereCategoryId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Event whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Event whereCreatorId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Event whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Event whereEndAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Event whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Event whereLocationAddress($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Event whereLocationLatitude($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Event whereLocationLongitude($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Event whereStartAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Event whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Event whereUpdatedAt($value)
 * @mixin \Eloquent
 */
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
        'is_active'
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
        return $this->hasMany(EventParticipant::class, 'event_id', 'id');
    }

    public function creator()
    {
        return $this->belongsTo(User::class, 'creator_id', 'id');
    }
}
