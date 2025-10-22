@props(['buttonType' => 'a', 'icon' => '', 'color' => 'primary'])
<{{ $buttonType }} class="btn rounded-0 btn-outline-{{ $color }} btn-icon" {{ $attributes->merge() }}>
    <span class="icon">
        <i data-lucide="{{ $icon }}"></i>
    </span>
    </{{ $buttonType }}>
