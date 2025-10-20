@use('App\Enum\UserRole')
<div class="main-sidebar" id="main-sidebar">
    <div class="sidebar-wrapper">
        <a class="navbar-brand" href="/dashboard">
            <div class="logo-lg">
                DASHBOARD
            </div>
            <div class="logo-sm">
                D
            </div>
        </a>
        <div class="dropdown profile-dropdown">
            <a
                class="btn d-flex align-items-center w-100 gap-2 p-4 text-start"
                data-bs-toggle="dropdown"
                href="#!"
                aria-expanded="false"
            >
                <img
                    class="size-10 rounded"
                    src="assets/images/user-45.png"
                    alt=""
                    loading="lazy"
                >
                <div class="flex-grow-1 content">
                    <h6 class="fw-medium text-truncate mb-0" data-translate="pe-lucas-ethan">Lucas Ethan</h6>
                    <p class="fs-14">ID: 150001</p>
                </div>
                <div class="arrow">
                    <i class="size-4" data-lucide="chevron-down"></i>
                </div>
            </a>
            <div class="dropdown-menu profile-dropdown-menu p-4">
                <div class="d-flex align-items-center gap-2">
                    <img
                        class="rounded-circle size-10 flex-shrink-0"
                        src="assets/images/user-17.png"
                        alt=""
                        loading="lazy"
                    >
                    <div class="flex-grow-1 overflow-hidden">
                        <h6 class="text-truncate mb-0">Lucas Ethan</h6>
                        <p class="text-truncate mb-0"><a class="link link-primary text-dark fw-medium"
                                href="#!">lucas@domiex.com</a></p>
                    </div>
                </div>
                <div class="border-top mt-3 pt-2">
                    <ul class="list-unstyled mb-0">
                        <li>
                            <a class="profile-link" href="pages-user-activity.html"><i
                                    class="d-inline-block me-2 size-4" data-lucide="bell-dot"
                                ></i> Profile Activity</a>
                        </li>
                        <li>
                            <a class="profile-link" href="pages-user-projects.html"><i
                                    class="d-inline-block me-2 size-4" data-lucide="presentation"
                                ></i> Manage Projects</a>
                        </li>
                        <li>
                            <a class="profile-link" href="pages-account-settings.html"><i
                                    class="d-inline-block me-2 size-4" data-lucide="settings"
                                ></i> Account Settings</a>
                        </li>
                        <li>
                            <a class="profile-link" href="pages-help-center.html"><i class="d-inline-block me-2 size-4"
                                    data-lucide="headset"
                                ></i> Help Center</a>
                        </li>
                        <li>
                            <a class="profile-link" href="pages-pricing.html"><i class="d-inline-block me-2 size-4"
                                    data-lucide="gem"
                                ></i> Upgrade Plan</a>
                        </li>
                    </ul>
                </div>
                <div class="border-top mt-2 pt-3">
                    <a class="profile-link pb-0" href="auth-signin-basic.html"><i class="me-2 inline-block size-4"
                            data-lucide="log-out"
                        ></i> Log Out</a>
                </div>
            </div>
        </div>
        <div class="navbar-menu px-5" id="navbar-menu-list" data-simplebar>
            <ul class="list-unstyled navbar-nav-menu p-0">
                {{-- sidebar admin --}}
                {{-- sidebar prodi --}}
                {{-- sidebar mahasiswa --}}
                @switch(auth()->user()->role)
                    @case(UserRole::ADMIN)
                        @include('__partials.dashboard.sidebar-admin')
                    @break

                    @case(UserRole::PRODI)
                        @include('__partials.dashboard.sidebar-prodi')
                    @break

                    @default
                        @include('__partials.dashboard.sidebar-mahasiswa')
                @endswitch
            </ul>
        </div>
    </div>
</div>
