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
        <h4 class="text-gradient fw-bold mb-2 text-center">Login Dashboard</h4>
        <p class="text-muted mb-3 text-center">Don't have an account? <a
                href="{{ route('register') }}"
                class="link link-primary"
            >Sign Up</a></p>
        <form
            action="{{ route('login-process') }}"
            method="post"
        >
            @csrf
            <!-- Error Alert -->
            @if (session()->has('isSuccess') && session('isSuccess') === false)
                <div
                    class="alert alert-danger alert-dismissible"
                    role="alert"
                >
                    <span><b>Login Failed</b> , Invalid Email or Password</span>
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="alert"
                        aria-label="Close"
                    ></button>
                </div>
            @endif
            <div class="row g-4 mt-3">
                <div class="col-12 mt-0">
                   <x-input name="email" placeholder="Enter your Email" label="Email" />
                </div>
                <div class="col-12">
                    <x-input-password name="password" placeholder="Enter your Password" label="Password" />
                </div>

                <div class="col-12 d-flex justify-content-between align-items-center">
                    <div class="form-check check-primary">
                        <input
                            type="checkbox"
                            id="rememberMe"
                            class="form-check-input"
                            name="remember"
                        >
                        <label
                            for="rememberMe"
                            class="form-check-label"
                        >Remember me</label>
                    </div>
                    {{-- <a
                        href="auth-forgot-password-basic.html"
                        class="fs-sm"
                    >Forgot Password?</a> --}}
                </div>
                <div class="col-12">
                    <button
                        type="submit"
                        class="btn btn-primary w-100"
                    >Sign In</button>
                </div>
            </div>
        </form>
    </div>
</x-layouts.auth>
