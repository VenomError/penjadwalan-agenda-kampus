<?php

namespace App\Repository;

use App\Models\User;
use App\Models\Event;
use App\Models\EventCategory;

class EventCategoryRepository
{
    public function createPublic(array $data)
    {
        $category = new EventCategory($data);
        $category->save();

        return $category;
    }

    public function createPrivate(array $data, User $user)
    {
        $category = new EventCategory($data);
        $category->owner()->associate($user);
        $category->save();

        return $category;
    }

    public function getEvents(EventCategory $category, ?User $owner)
    {
        return Event::query()
            ->whereBelongsTo($category)
            ->when($owner, fn($q) => $q->whereBelongsTo($owner, 'owner'))
            ->get();
    }
}
