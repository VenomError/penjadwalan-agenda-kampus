@props(['id' => 'datatable'])

@push('style')
    <!-- DataTables Bootstrap 5 CSS -->
    <link href="https://cdn.datatables.net/1.13.6/css/dataTables.bootstrap5.min.css" rel="stylesheet">
@endpush

@push('script')
    <!-- jQuery (DataTables requirement) -->
    <script src="https://code.jquery.com/jquery-3.7.0.min.js"></script>
    <!-- DataTables JS -->
    <script src="https://cdn.datatables.net/1.13.6/js/jquery.dataTables.min.js"></script>
    <script src="https://cdn.datatables.net/1.13.6/js/dataTables.bootstrap5.min.js"></script>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            let tableId = @json($id);
            $('#' + tableId).DataTable({
                responsive: true,
                pageLength: 10,
                lengthMenu: [5, 10, 25, 50, 100],
            });
        });
    </script>
@endpush

<div class="card">
    <div class="card-header">
        {{ $header ?? '' }}
    </div>
    <div class="card-body">
        <div class="table-responsive">
            <table class="table-striped table-bordered table" id="{{ $id }}">
                <thead class="table-light">
                    {{ $head }}
                </thead>
                <tbody>
                    {{ $slot }}
                </tbody>
                <tfoot class="table-light">
                    {{ $footer ?? '' }}
                </tfoot>
            </table>
        </div>
    </div>
</div>
