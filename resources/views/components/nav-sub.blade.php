@props([
    'title' => '',
    'icon' => 'folder',
    'id' => Str::slug($title, '-'), 
])

<li class="nav-item">
    <a
        class="nav-link collapsed"
        data-bs-toggle="collapse"
        href="#collapse-{{ $id }}"
        aria-expanded="false"
    >
        <span class="icons"><i data-lucide="{{ $icon }}"></i></span>
        <span class="content">{{ $title }}</span>
        <span class="menu-arrow ms-auto">
            <i
                data-lucide="chevron-down"
                class="size-4"
            ></i>
        </span>
    </a>

    <div
        class="collapse"
        id="collapse-{{ $id }}"
    >
        <ul class="nav-menu-sub">
            {{ $slot }}
        </ul>
    </div>
</li>
