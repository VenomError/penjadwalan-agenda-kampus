<header class="main-topbar" id="main-topbar">
    <div class="navbar-brand">
        <div class="logos">
            <a href="/dashboard" aria-label="Topbar Logo">

            </a>
        </div>
        <button
            class="sidebar-toggle btn p-0"
            id="toggleSidebar"
            type="button"
            aria-label="sidebar-toggle"
        ><i class="size-4" data-lucide="panel-right-open"></i></button>
    </div>

    <div class="d-flex align-items-center ms-auto gap-2">

        <button
            class="topbar-link topbar-mode btn"
            id="darkModeButton"
            type="button"
            aria-label="topbar-link"
        >
            <i class="dark size-4" data-lucide="moon"></i>
            <i class="light size-4" data-lucide="sun"></i>
        </button>
        <button class="topbar-main-btn d-none d-md-flex btn" type="button" aria-label="topbar-link">
            <i class="me-2 size-4" data-lucide="calendar-range"></i>
            <span class="d-none d-md-inline-block">Schedule</span>
        </button>
        <div class="dropdown profile-dropdown">
            <button
                class="btn topbar-link"
                data-bs-toggle="dropdown"
                type="button"
                aria-expanded="false"
            >
                <x-img
                    class="object-fit-cover size-8 rounded"
                    src="assets/images/user-45.png"
                    alt="en"
                    loading="lazy"
                />
            </button>
            <div class="dropdown-menu profile-dropdown-menu p-4">
                <div class="d-flex align-items-center gap-2">
                    <x-img
                        class="rounded-circle size-10 flex-shrink-0"
                        src="assets/images/user-45.png"
                        alt=""
                        loading="lazy"
                    />
                    <div class="flex-grow-1 overflow-hidden">
                        <h6 class="text-truncate mb-0">{{ auth()->user()->name }}</h6>
                        <p class="text-truncate mb-0"><span
                                class="link link-custom-primary fw-medium">{{ auth()->user()->email }}</span></p>
                    </div>
                </div>
                <div class="border-top mt-3 pt-2">
                    <ul class="list-unstyled mb-0">

                        <li>
                            <a class="profile-link" href="pages-account-settings.html"><i
                                    class="d-inline-block me-2 size-4" data-lucide="settings"
                                ></i> Account Settings</a>
                        </li>
                    </ul>
                </div>
                <div class="border-top mt-2">
                    <a class="profile-link pb-0" href="{{ route('logout') }}"><i class="me-2 inline-block size-4"
                            data-lucide="log-out"
                        ></i> Log Out</a>
                </div>
            </div>
        </div>

    </div>
</header>
