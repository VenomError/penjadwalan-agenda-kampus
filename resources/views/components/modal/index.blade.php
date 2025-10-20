@props([
    'id' => 'modalId',
    'title' => '',
    'size' => 'md',
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
            {{ $footer ?? '' }}
        </div>
    </div>
</div>

<script>
    document.addEventListener('DOMContentLoaded', function() {
        @if (session('showModal'))
            var myModal = new bootstrap.Modal(document.getElementById('{{ $id }}'));
            myModal.show();
        @endif
    });
</script>
