@props([
    'href' => '',
    'icon' => '',
    'title' => '',
    'id' => Str::slug($title, '-'),
])
<li
    class="nav-item"
    id="{{ $id }}"
>
    <a
        class="nav-link"
        href="{{ $href }}"
    >
        @if ($icon)
            <span class="icons"><i data-lucide="{{ $icon }}"></i></span>
        @endif
        <span class="content text-capitalize">{{ $title }}</span>
    </a>
</li>
