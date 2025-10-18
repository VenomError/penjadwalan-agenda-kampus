<?php

namespace App\Repository;

use Carbon\Carbon;
use App\Models\User;
use App\Models\Event;
use App\Models\EventCategory;
use App\Models\EventParticipant;

class EventRepository
{
    // Event
    public function createEvent(array $data, ?User $creator = null, ?EventCategory $category = null): Event
    {
        $event = new Event($data);

        if ($creator) {
            $event->creator()->associate($creator);
        }
        if ($category) {
            $event->category()->associate($category);
        }

        $event->save();

        return $event;
    }

    public function updateEvent(Event $event, array $data): Event
    {
        $event->update($data);
        $event->save();
        $event->refresh();

        return $event;
    }

    public function deleteEvent(Event $event): bool|null
    {
        return $event->forceDelete();
    }

    public function toggleActive(Event $event): bool
    {
        $is_active = $event->is_active;
        $event->is_active = !$is_active;
        $event->save();

        $event->refresh();

        return $event->is_active;
    }

    public function changeCategory(Event $event, EventCategory $category): Event
    {
        $event->category()->associate($category);
        $event->refresh();

        return $event;
    }

    public function joinEvent(Event $event, User $user, bool $reminder_active = false, ?Carbon $reminder_at = null): EventParticipant
    {
        $eventParicipant = new EventParticipant([
            'event_id' => $event->id,
            'user_id' => $user->id,
        ]);

        if ($reminder_active && !is_null($reminder_at)) {
            $eventParicipant->reminder_active = $reminder_active;
            $eventParicipant->reminder_at = $reminder_at;
        }

        $eventParicipant->save();

        return $eventParicipant;
    }

    public function reminderEvent(Event $event, User $user, Carbon $reminder_at): EventParticipant
    {
        return $this->joinEvent($event, $user, true, $reminder_at);
    }

}
