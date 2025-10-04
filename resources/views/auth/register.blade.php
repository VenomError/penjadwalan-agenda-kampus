<x-layouts.auth>
    <div class="p-sm-8 p-md-10 card-body">
        <div class="mb-4 text-center">
            <a
                href="index.html"
                class="logos"
            >
                <x-img
                    src="assets/images/main-logo.png"
                    loading="lazy"
                    alt="Logo"
                    class="logo-dark h-8"
                />
                <x-img
                    src="assets/images/logo-white.png"
                    loading="lazy"
                    alt="Logo White"
                    class="logo-light h-8"
                />
            </a>
        </div>
        <h4 class="text-gradient fw-bold mb-2 text-center">Register New Account</h4>
        <p class="text-muted mb-3 text-center">Already have an account? <a
                href="{{ route('login') }}"
                class="link link-primary"
            >Sign In</a></p>
        <form
            action="{{ route('register-process') }}"
            method="post"
        >
            @csrf
            <!-- Error Alert -->
            @if (session()->has('register-failed') && session('register-failed') === true)
                <div
                    class="alert alert-danger alert-dismissible"
                    role="alert"
                >
                    <span><b>Register Failed</b> , Register new Account Failed</span>
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="alert"
                        aria-label="Close"
                    ></button>
                </div>
            @endif
            <div class="row g-4 mt-3">
                <div class="col-6 mt-5">
                    <x-input
                        name="first_name"
                        placeholder="Enter your First Name"
                        label="First Name"
                    />
                </div>
                <div class="col-6 mt-5">
                    <x-input
                        name="last_name"
                        placeholder="Enter your Last Name"
                        label="Last Name"
                    />
                </div>
                <div class="col-12">
                    <x-input
                        name="nim"
                        type="number"
                        placeholder="Enter your NIM"
                        label="NIM"
                    />
                </div>
                <div class="col-12">
                    <x-input
                        name="email"
                        type="email"
                        placeholder="Enter your Email"
                        label="Email"
                    />
                </div>
                <div class="col-12">
                    <x-input-password
                        name="password"
                        placeholder="Enter your Password"
                        label="Password"
                    />
                </div>
                <div class="col-12">
                    <x-input-password
                        name="password_confirmation"
                        placeholder="Enter your Password Confirmation"
                        label="Password Confirmation"
                    />
                </div>

                <div class="col-12">
                    <button
                        type="submit"
                        class="btn btn-primary w-100"
                    >Sign Up</button>
                </div>
            </div>
        </form>
    </div>
</x-layouts.auth>
