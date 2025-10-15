<x-layouts.dashboard>
    <div class="row">
        <div class="col-12 mb-5">
            <div class="alert alert-solid-primary alert-dismissible">
                <div class="d-flex align-items-center gap-3">
                    <i data-lucide="graduation-cap" style="font-size: 40px"></i>
                    <div>
                        <p class="mb-1">Welcome Dashboard Mahasiswa</p>
                        <h6 class="fw-medium mb-1 opacity-75">Helo {{ auth()->user()->name }}</h6>
                    </div>
                </div>
                <button class="btn-close" data-bs-dismiss="alert" type="button" aria-label="Close"></button>
            </div>
        </div>
        <x-widget.count title="Total Event" class="col-lg-4" count="200" color="indigo" icon="calendar-clock" />
        <x-widget.count title="Completed" class="col-lg-4" count="50" color="success" icon="calendar-check-2" />
        <x-widget.count title="Upcoming" class="col-lg-4" count="150" color="orange" icon="calendar-clock" />

    </div>
    DASHBOARD MAHASISWA
</x-layouts.dashboard>
