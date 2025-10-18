<?php

// @formatter:off
// phpcs:ignoreFile
/**
 * A helper file for your Eloquent Models
 * Copy the phpDocs from this file to the correct Model,
 * And remove them from this file, to prevent double declarations.
 *
 * @author Barry vd. Heuvel <barryvdh@gmail.com>
 */


namespace App\Models{
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
	class Event extends \Eloquent {}
}

namespace App\Models{
/**
 * @property int $id
 * @property string $name
 * @property string $color_hex
 * @property int|null $user_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read User|null $owner
 * @method static \Illuminate\Database\Eloquent\Builder<static>|EventCategory newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|EventCategory newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|EventCategory query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|EventCategory whereColorHex($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|EventCategory whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|EventCategory whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|EventCategory whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|EventCategory whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|EventCategory whereUserId($value)
 * @mixin \Eloquent
 */
	class EventCategory extends \Eloquent {}
}

namespace App\Models{
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
	class EventParticipant extends \Eloquent {}
}

namespace App\Models{
/**
 * @property int $id
 * @property string $name
 * @property string $email
 * @property \Illuminate\Support\Carbon|null $email_verified_at
 * @property string $password
 * @property string|null $avatar
 * @property string|null $nim
 * @property UserRole $role
 * @property string|null $remember_token
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection<int, EventCategory> $eventCategories
 * @property-read int|null $event_categories_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, EventParticipant> $eventParticipants
 * @property-read int|null $event_participants_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, Event> $events
 * @property-read int|null $events_count
 * @property-read \Illuminate\Notifications\DatabaseNotificationCollection<int, \Illuminate\Notifications\DatabaseNotification> $notifications
 * @property-read int|null $notifications_count
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User admin()
 * @method static \Database\Factories\UserFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User mahasiswa()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User prodi()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User whereAvatar($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User whereEmailVerifiedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User whereNim($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User wherePassword($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User whereRememberToken($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User whereRole($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User whereUpdatedAt($value)
 * @mixin \Eloquent
 */
	class User extends \Eloquent {}
}

