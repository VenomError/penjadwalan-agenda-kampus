@push('style')
    <x-link href="./assets/css/virtual-select.css" rel="stylesheet" crossorigin />
@endpush

@push('script')
    <x-script src="assets/libs/virtual-select-plugin/virtual-select.min.js"></x-script>

    <x-script src="assets/libs/fullcalendar/index.global.min.js"></x-script>
@endpush

<div class="page-heading flex-column flex-md-row mb-3 gap-2">
    <h6 class="flex-grow-1 mb-0">Kalender Event</h6>
</div>
<div class="d-flex align-items-center mb-3 flex-wrap gap-2" id="external-events">
    <div class="d-flex align-items-center flex-grow-1 flex-wrap gap-2" id="external-events">
        <div class="btn btn-secondary draggable-event text-white" draggable="true">
            <div class="fc-event-main fs-13">Events</div>
        </div>
        <div class="btn btn-primary draggable-event text-white" draggable="true">
            <div class="fc-event-main fs-13">Personal</div>
        </div>
        <div class="btn btn-success draggable-event text-white" draggable="true">
            <div class="fc-event-main fs-13">Meeting</div>
        </div>
        <div class="btn btn-info draggable-event text-white" draggable="true">
            <div class="fc-event-mai fs-13n">Festival Function</div>
        </div>
    </div>

    <button
        class="btn btn-primary d-flex align-items-center"
        id="newEvent"
        data-bs-toggle="modal"
        data-bs-target="#addEventModal"
        type="button"
    >
        <i class="me-1 size-4" data-lucide="circle-plus"></i>
        Add Event
    </button>
</div>

<div class="card">
    <div class="card-body">
        <div id='calendar'></div>
    </div>
</div>

<!-- Modal -->
<div
    class="modal fade"
    id="addEventModal"
    aria-labelledby="addEventModalLabel"
    aria-hidden="true"
    tabindex="-1"
>
    <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h6 class="mb-0" id="modalTitle">Add Event</h6>
                <button
                    class="btn-close"
                    data-bs-dismiss="modal"
                    type="button"
                    aria-label="Close"
                ></button>
            </div>
            <div class="modal-body">
                <form id="eventForm" action="#!">
                    <div class="row g-5">
                        <div class="col-12">
                            <label class="form-label" for="eventNameInput">Event Name</label>
                            <input
                                class="form-control"
                                id="eventNameInput"
                                type="text"
                                placeholder="Enter Event Name"
                            >
                        </div>
                        <div class="col-4">
                            <div>
                                <label class="form-label" for="eventDateInput">Event Date</label>
                                <div class="position-relative">
                                    <input
                                        class="form-control ps-9"
                                        id="eventDateInput"
                                        type="date"
                                        placeholder="Select date"
                                    >
                                    <i class="text-muted position-absolute top-50 translate-middle-y start-0 ms-3 size-4"
                                        data-lucide="calendar-check"
                                    ></i>
                                </div>
                            </div>
                        </div>
                        <div class="col-4">
                            <div>
                                <label class="form-label" for="endEventDateInput">End Date</label>
                                <div class="position-relative">
                                    <input
                                        class="form-control ps-9"
                                        id="endEventDateInput"
                                        type="date"
                                        placeholder="Select date"
                                    >
                                    <i class="text-muted position-absolute top-50 translate-middle-y start-0 ms-3 size-4"
                                        data-lucide="calendar-check"
                                    ></i>
                                </div>
                            </div>
                        </div>
                        <div class="col-4">
                            <div>
                                <label class="form-label" for="eventTimeInput">Event Time</label>
                                <div class="position-relative">
                                    <input
                                        class="form-control ps-9"
                                        id="eventTimeInput"
                                        type="time"
                                        placeholder="Select time"
                                    >
                                    <i class="text-muted position-absolute top-50 translate-middle-y start-0 ms-3 size-4"
                                        data-lucide="clock"
                                    ></i>
                                </div>
                            </div>
                        </div>
                        <div class="col-12">
                            <label class="form-label" for="ColorSelect">Color</label>
                            <div id="ColorSelect"></div>
                        </div>
                        <div class="col-12">
                            <label class="form-label" for="locationInput">Location</label>
                            <input
                                class="form-control"
                                id="locationInput"
                                type="text"
                                placeholder="Enter Location"
                            >
                        </div>
                        <div class="col-12">
                            <label class="form-label" for="guestInput">Add Guests</label>
                            <div class="position-relative">
                                <input
                                    class="form-control"
                                    id="guestInput"
                                    type="text"
                                    placeholder="example@domain.com"
                                >
                                <button
                                    class="btn btn-sub-primary btn-sm position-absolute top-50 translate-middle-y end-0 me-2"
                                    id="addGuestBtn" type="button"
                                >Add</button>
                            </div>
                            <div class="d-flex mt-2 flex-wrap gap-2" id="guestList">
                                <!-- Guest avatars will be dynamically added here -->
                            </div>
                        </div>
                    </div>
                    <div class="d-flex justify-content-end mt-3 gap-2">
                        <button class="btn btn-active-danger" data-bs-dismiss="modal" type="button">Cancel</button>
                        <button class="btn btn-primary" id="submitEventBtn" type="submit">Create Event</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
