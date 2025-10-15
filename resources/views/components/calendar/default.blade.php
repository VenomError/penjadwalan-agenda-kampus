@push('style')
    <x-script
        src="assets/js/src\apps-calendar-default.js"
        type="module"
        crossorigin
    ></x-script>
    <x-link
        href="./assets/css/virtual-select.css"
        rel="stylesheet"
        crossorigin
    />
@endpush

@push('script')
<x-script src="assets/libs/virtual-select-plugin/virtual-select.min.js"></x-script>

<x-script src="assets/libs/fullcalendar/index.global.min.js"></x-script>
@endpush


    <div class="gap-2 page-heading mb-3 flex-column flex-md-row">
        <h6 class="flex-grow-1 mb-0">Kalender Event</h6>
    </div>
    <div class="d-flex flex-wrap align-items-center gap-2 mb-3" id="external-events">
        <div id="external-events" class="d-flex flex-wrap align-items-center gap-2 flex-grow-1">
            <div class="btn btn-secondary text-white draggable-event" draggable="true">
                <div class="fc-event-main fs-13">Events</div>
            </div>
            <div class="btn btn-primary text-white draggable-event" draggable="true">
                <div class="fc-event-main fs-13">Personal</div>
            </div>
            <div class="btn btn-success text-white draggable-event" draggable="true">
                <div class="fc-event-main fs-13">Meeting</div>
            </div>
            <div class="btn btn-info text-white draggable-event" draggable="true">
                <div class="fc-event-mai fs-13n">Festival Function</div>
            </div>
        </div>

        <button type="button" class="btn btn-primary d-flex align-items-center" id="newEvent" data-bs-toggle="modal" data-bs-target="#addEventModal">
            <i data-lucide="circle-plus" class="size-4 me-1"></i>
            Add Event
        </button>
    </div>

    <div class="card">
        <div class="card-body">
            <div id='calendar'></div>
        </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="addEventModal" tabindex="-1" aria-labelledby="addEventModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h6 class="mb-0" id="modalTitle">Add Event</h6>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form id="eventForm" action="#!">
                        <div class="row g-5">
                            <div class="col-12">
                                <label for="eventNameInput" class="form-label">Event Name</label>
                                <input type="text" id="eventNameInput" class="form-control" placeholder="Enter Event Name">
                            </div>
                            <div class="col-4">
                                <div>
                                    <label for="eventDateInput" class="form-label">Event Date</label>
                                    <div class="position-relative">
                                        <input type="date" class="form-control ps-9" id="eventDateInput" placeholder="Select date">
                                        <i data-lucide="calendar-check" class="size-4 text-muted position-absolute top-50 start-0 ms-3 translate-middle-y"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="col-4">
                                <div>
                                    <label for="endEventDateInput" class="form-label">End Date</label>
                                    <div class="position-relative">
                                        <input type="date" class="form-control ps-9" id="endEventDateInput" placeholder="Select date">
                                        <i data-lucide="calendar-check" class="size-4 text-muted position-absolute top-50 start-0 ms-3 translate-middle-y"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="col-4">
                                <div>
                                    <label for="eventTimeInput" class="form-label">Event Time</label>
                                    <div class="position-relative">
                                        <input type="time" class="form-control ps-9" id="eventTimeInput" placeholder="Select time">
                                        <i data-lucide="clock" class="size-4 text-muted position-absolute top-50 start-0 ms-3 translate-middle-y"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12">
                                <label for="ColorSelect" class="form-label">Color</label>
                                <div id="ColorSelect"></div>
                            </div>
                            <div class="col-12">
                                <label for="locationInput" class="form-label">Location</label>
                                <input type="text" id="locationInput" class="form-control" placeholder="Enter Location">
                            </div>
                            <div class="col-12">
                                <label for="guestInput" class="form-label">Add Guests</label>
                                <div class="position-relative">
                                    <input type="text" id="guestInput" class="form-control" placeholder="example@domain.com">
                                    <button type="button" id="addGuestBtn" class="btn btn-sub-primary btn-sm position-absolute top-50 translate-middle-y end-0 me-2">Add</button>
                                </div>
                                <div class="d-flex gap-2 mt-2 flex-wrap" id="guestList">
                                    <!-- Guest avatars will be dynamically added here -->
                                </div>
                            </div>
                        </div>
                        <div class="d-flex justify-content-end gap-2 mt-3">
                            <button type="button" class="btn btn-active-danger" data-bs-dismiss="modal">Cancel</button>
                            <button type="submit" id="submitEventBtn" class="btn btn-primary">Create Event</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
