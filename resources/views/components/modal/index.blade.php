@props([
    'id' => 'modalId',
    'title' => '',
    'size' => 'md',
    'footer' => null,
])

<div
    class="modal fade"
    id="{{ $id }}"
    aria-labelledby="{{ $id }}Label"
    aria-hidden="true"
    tabindex="-1"
>
    <div class="modal-dialog modal-dialog-centered modal-{{ $size }}">
        <div class="modal-content">
            <!-- Modal Header -->
            <div class="modal-header">
                <h5 class="modal-title" id="{{ $id }}Label">{{ $title }}</h5>
                <button
                    class="btn-close"
                    data-bs-dismiss="modal"
                    type="button"
                    aria-label="Close"
                ></button>
            </div>

            <!-- Modal Body -->
            <div class="modal-body">
                {{ $slot }}
            </div>

            <!-- Modal Footer (optional) -->
            @if ($footer)
                <div class="modal-footer">
                    {{ $footer }}
                </div>
            @endif
        </div>
    </div>
</div>

<script>
    document.addEventListener('DOMContentLoaded', function() {
        @if (session('showModal') === $id)
            const modalEl = document.getElementById('{{ $id }}');
            if (modalEl) {
                const modal = new bootstrap.Modal(modalEl);
                modal.show();
            }
        @endif
    });
</script>
