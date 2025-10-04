<!DOCTYPE html>
<html
    lang="en"
    class="group scroll-smooth"
    data-layout="modern"
    data-content-width="default"
    data-bs-theme="light"
    data-sidebar-colors="dark"
    data-sidebar="large"
    data-nav-type="default"
    dir="ltr"
    data-colors="default"
    data-profile-sidebar
>

    <head>

        <!-- Basic Meta Tags -->
        <meta charset="UTF-8">
        <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, user-scalable=no"
        >
        <meta
            http-equiv="X-UA-Compatible"
            content="ie=edge"
        >
        <title>Sign Up | Domiex - Admin Dashboard Template</title>

        <!-- favicon -->
        <x-link
            rel="shortcut icon"
            href="assets/images/favicon.ico"
        />

        <x-script
            type="module"
            crossorigin
            src="assets/admin.bundle-DI9_jvUJ.js"
        ></x-script>

        <x-link
            rel="stylesheet"
            crossorigin
            href="assets/css/admin.css"
        />

        @vite(['resources/css/app.css', 'resources/js/app.js'])

    </head>

    <body class="sidebar-hidden">
        <div class="auth-wrapper">
            <div class="min-vh-100 d-flex align-items-center container py-10">
                <div class="w-100">
                    <div class="row justify-content-center">
                        <div class="col-12 col-md-10 col-lg-7 col-xl-6 col-xxl-4">
                            <div class="card mb-0">
                                {{ $slot }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </body>

</html>
