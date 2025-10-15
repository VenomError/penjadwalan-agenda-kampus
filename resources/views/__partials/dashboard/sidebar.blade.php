@use('App\Enum\UserRole')
  <div
      id="main-sidebar"
      class="main-sidebar"
  >
      <div class="sidebar-wrapper">
          <a
              href="/dashboard"
              class="navbar-brand"
          >
              <div class="logo-lg">
                  <x-img
                      src="assets/images/main-logo.png"
                      loading="lazy"
                      aria-label="logo"
                      alt=""
                      height="24"
                      class="logo-dark mx-auto"
                  />
                  <x-img
                      src="assets/images/logo-white.png"
                      loading="lazy"
                      aria-label="logo"
                      alt=""
                      height="24"
                      class="logo-light mx-auto"
                  />
              </div>
              <div class="logo-sm">
                  <x-img
                      src="assets/images/logo-sm-dark.png"
                      loading="lazy"
                      aria-label="logo"
                      alt=""
                      height="24"
                      class="logo-dark mx-auto"
                  />
                  <x-img
                      src="assets/images/logo-sm-white.png"
                      loading="lazy"
                      aria-label="logo"
                      alt=""
                      height="24"
                      class="logo-light mx-auto"
                  />
              </div>
          </a>
          <div class="dropdown profile-dropdown">
              <a
                  href="#!"
                  class="btn d-flex align-items-center w-100 gap-2 p-4 text-start"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
              >
                  <img
                      src="assets/images/user-45.png"
                      loading="lazy"
                      alt=""
                      class="size-10 rounded"
                  >
                  <div class="flex-grow-1 content">
                      <h6
                          class="fw-medium text-truncate mb-0"
                          data-translate="pe-lucas-ethan"
                      >Lucas Ethan</h6>
                      <p class="fs-14">ID: 150001</p>
                  </div>
                  <div class="arrow">
                      <i
                          data-lucide="chevron-down"
                          class="size-4"
                      ></i>
                  </div>
              </a>
              <div class="dropdown-menu profile-dropdown-menu p-4">
                  <div class="d-flex align-items-center gap-2">
                      <img
                          src="assets/images/user-17.png"
                          loading="lazy"
                          alt=""
                          class="rounded-circle size-10 flex-shrink-0"
                      >
                      <div class="flex-grow-1 overflow-hidden">
                          <h6 class="text-truncate mb-0">Lucas Ethan</h6>
                          <p class="text-truncate mb-0"><a
                                  href="#!"
                                  class="link link-primary text-dark fw-medium"
                              >lucas@domiex.com</a></p>
                      </div>
                  </div>
                  <div class="border-top mt-3 pt-2">
                      <ul class="list-unstyled mb-0">
                          <li>
                              <a
                                  class="profile-link"
                                  href="pages-user-activity.html"
                              ><i
                                      data-lucide="bell-dot"
                                      class="d-inline-block me-2 size-4"
                                  ></i> Profile Activity</a>
                          </li>
                          <li>
                              <a
                                  class="profile-link"
                                  href="pages-user-projects.html"
                              ><i
                                      data-lucide="presentation"
                                      class="d-inline-block me-2 size-4"
                                  ></i> Manage Projects</a>
                          </li>
                          <li>
                              <a
                                  class="profile-link"
                                  href="pages-account-settings.html"
                              ><i
                                      data-lucide="settings"
                                      class="d-inline-block me-2 size-4"
                                  ></i> Account Settings</a>
                          </li>
                          <li>
                              <a
                                  class="profile-link"
                                  href="pages-help-center.html"
                              ><i
                                      data-lucide="headset"
                                      class="d-inline-block me-2 size-4"
                                  ></i> Help Center</a>
                          </li>
                          <li>
                              <a
                                  class="profile-link"
                                  href="pages-pricing.html"
                              ><i
                                      data-lucide="gem"
                                      class="d-inline-block me-2 size-4"
                                  ></i> Upgrade Plan</a>
                          </li>
                      </ul>
                  </div>
                  <div class="border-top mt-2 pt-3">
                      <a
                          class="profile-link pb-0"
                          href="auth-signin-basic.html"
                      ><i
                              data-lucide="log-out"
                              class="me-2 inline-block size-4"
                          ></i> Log Out</a>
                  </div>
              </div>
          </div>
          <div
              class="navbar-menu px-5"
              id="navbar-menu-list"
              data-simplebar
          >
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
