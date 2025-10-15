@props(['title', 'count' => 0, 'icon' => 'calendar-clock', 'color' => 'success' , 'class' => 'col-12 col-md-6 col-xl-3'])
<div  {{ $attributes->merge([
    'class' => $class,
]) }}>
    <div class="card bg-{{ $color }}-subtle border-{{ $color }}-subtle">
        <div class="card-body">
            <div class="d-flex align-items-center gap-3">
                <div class="flex-grow-1">
                    <p class="text-{{ $color }} mb-1">{{ Str::title($title) }}</p>
                    <h6 class="text-{{ $color }} mb-0">{{ $count }}</h6>
                </div>
                <div class="avatar rounded-circle icon-outline-{{ $color }} size-12 p-2">
                    <i data-lucide="{{ $icon }}"></i>
                </div>
            </div>
        </div>
    </div>
</div>
