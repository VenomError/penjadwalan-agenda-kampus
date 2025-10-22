@props(['img', 'title', 'href' => '#!'])
<div class="d-flex align-items-center gap-2">
    @php
        if ($img && Storage::disk('public')->exists($img)) {
            $src = Storage::url($img);
        } else {
            $src = asset('avatar-default.png');
        }
    @endphp
    <img
        class="avatar rounded-circle size-9 border"
        src="{{ $src }}"
        alt=""
        loading="lazy"
    >
    <h6 class="mb-0">
        <a class="text-reset" href="{{ $href }}">
            {{ Str::title($title) }}
        </a>
    </h6>
</div>
