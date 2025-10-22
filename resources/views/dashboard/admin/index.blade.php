<x-layouts.dashboard>
    <div class="row">
        <div class="col-12 mb-5">
            <div class="alert alert-solid-primary alert-dismissible">
                <div class="d-flex align-items-center gap-3">
                    <i data-lucide="shield-user" style="font-size: 40px"></i>
                    <div>
                        <p class="mb-1">Welcome Dashboard Admin</p>
                        <h6 class="fw-medium mb-1 opacity-75">Helo {{ auth()->user()->name }}</h6>
                    </div>
                </div>
                <button
                    class="btn-close"
                    data-bs-dismiss="alert"
                    type="button"
                    aria-label="Close"
                ></button>
            </div>
        </div>
        <x-widget.count
            title="Total Event"
            count="200"
            color="indigo"
            icon="calendar-clock"
        />
        <x-widget.count
            title="Completed"
            count="50"
            color="success"
            icon="calendar-check-2"
        />
        <x-widget.count
            title="Upcoming"
            count="150"
            color="orange"
            icon="calendar-clock"
        />
        <x-widget.count
            title="Total Participant"
            :count="Number::format(2000)"
            color="pink"
            icon="graduation-cap"
        />
    </div>

</x-layouts.dashboard>
