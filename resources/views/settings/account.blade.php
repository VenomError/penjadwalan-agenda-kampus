<x-layouts.dashboard>
    <div>
        <div class="position-relative mb-6">
            <div class="position-relative profile-widget h-44 overflow-hidden rounded">
                <div class="size-96"></div>
                <div class="size-80"></div>
                <div class="size-40"></div>
            </div>
            <div class="text-center">
                <div class="position-relative d-inline-block profile-avatar mx-auto">
                    <div class="profile-avatar-wrapper mt-n14">
                        <img
                            class="profile-avatar-img mx-auto size-28"
                            src="{{ $user->avatar }}"
                            alt="user-45"
                            loading="lazy"
                        >
                    </div>
                    <div class="profile-avatar-dot bg-success size-4"></div>
                </div>
                <div class="avatar gap-1">
                    <h5 class="text-capitalize mb-1 mt-2">{{ $user->name }}</h5>
                    <i class="icon-primary size-5" data-lucide="badge-check"></i>
                </div>
                <ul class="text-muted avatar flex-wrap gap-2">
                    <li class="d-flex align-items-center gap-2">
                        <i class="size-4" data-lucide="shield-user"></i>
                        <span>{{ $user->role }}</span>
                    </li>
                    <li class="d-flex align-items-center gap-2">
                        <i class="size-4" data-lucide="mail"></i>
                        <span>{{ $user->email }}</span>
                    </li>
                </ul>
            </div>
        </div>

        <div class="card mt-5">
            <div class="card-header">
                <h6 class="card-title">Personal Information</h6>
            </div>
            <x-form method="PUT" :action="route('settings.account-update')">
                <div class="card-body">
                    <div class="row">
                        <div class="col-4">

                            <div>
                                <img
                                    class="rounded-3 size-20"
                                    id="profileImage"
                                    src="{{ $user->avatar }}"
                                    alt="Profile Image"
                                    loading="lazy"
                                >
                                @error('avatar')
                                    <small class="text-danger">{{ $message }}</small>
                                @enderror
                            </div>
                            <label class="btn btn-sub-primary d-inline-flex align-items-center mt-4 gap-2"
                                for="fileInput"
                            >
                                <i class="size-4" data-lucide="upload"></i>
                                Upload Profile
                                <input
                                    class="d-none"
                                    id="fileInput"
                                    name="avatar"
                                    type="file"
                                >

                            </label>

                        </div>
                        <div class="col-8">
                            <div class="mb-3">
                                <x-input
                                    name="name"
                                    type="text"
                                    value="{{ old('name') ?? $user->name }}"
                                    label="Full Name"
                                    placeholder="Input Full Name"
                                />
                            </div>
                            <div class="mb-3">
                                <x-input
                                    name="email"
                                    type="email"
                                    value="{{ old('email') ?? $user->email }}"
                                    label="Email"
                                    placeholder="Input Email"
                                />
                            </div>

                            @if ($user->nim)
                                <div class="mb-3">
                                    <x-input
                                        name="nim"
                                        type="text"
                                        value="{{ old('nim') ?? $user->nim }}"
                                        label="Phone"
                                        placeholder="Input NIM"
                                    />
                                </div>
                            @endif
                            <div class="mb-3">
                                <x-input
                                    name="password"
                                    type="password"
                                    label="Password"
                                    placeholder="Input Password"
                                />
                            </div>
                            <div class="mb-3">
                                <x-input
                                    name="new_password"
                                    type="password"
                                    label="New Password (optional)"
                                    placeholder="Input New Password"
                                >Input new Password jika anda ingin mengganti password lama</x-input>
                            </div>

                        </div>
                        <div class="col-12">
                            <div class="justify-content-end d-flex">
                                <button class="btn btn-primary" type="submit">Update Profile</button>
                            </div>
                        </div>
                    </div>
                </div>
            </x-form>
        </div>
    </div>
</x-layouts.dashboard>
