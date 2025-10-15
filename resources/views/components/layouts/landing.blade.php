<!DOCTYPE html>
<html
    data-bs-theme="light"
    data-colors="default"
    lang="en"
    dir="ltr"
>

    <!-- Mirrored from srbthemes.kcubeinfotech.com/domiex/bootstrap/light/landing-school.html by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 03 Oct 2025 18:50:09 GMT -->

    <head>

        <!-- Basic Meta Tags -->
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Event Landing Page</title>

        <!-- favicon -->
        <x-link href="assets/images/favicon.ico" rel="shortcut icon" />

        <x-script
            src="assets/js/src/landing-school.js"
            type="module"
            crossorigin
        ></x-script>
        <x-link
            href="assets/admin.bundle-DI9_jvUJ.js"
            rel="modulepreload"
            crossorigin
        />
        <x-link
            href="assets/aos.init-Di4NEl7u.js"
            rel="modulepreload"
            crossorigin
        />
        <x-link
            href="assets/simpleParallaxVanilla.es-DqfRU-su.js"
            rel="modulepreload"
            crossorigin
        />
        <x-link
            href="assets/swiper-bundle-BRj3juaA.js"
            rel="modulepreload"
            crossorigin
        />

        <x-link
            href="assets/css/aos.css"
            rel="stylesheet"
            crossorigin
        />
        <x-link
            href="assets/css/swiper-bundle.css"
            rel="stylesheet"
            crossorigin
        />
        <x-link
            href="assets/css/admin.css"
            rel="stylesheet"
            crossorigin
        />
    </head>

    <body
        data-bs-spy="scroll"
        data-bs-target="#navbarSchool"
        data-bs-root-margin="0px 0px -10%"
        data-bs-smooth-scroll="true"
    >

        <!----------Start Menu------------>
        @include('__partials.landing.header')
        <!----------End Menu------------>
        {{ $slot }}

        <!----------Start Menu------------>
        @include('__partials.landing.footer')
        <!----------End Menu------------>

        <button
            class="btn btn-orange position-fixed top-50 avatar rounded-start rounded-end-0 end-0 size-12 p-0 text-white"
            id="theme-toggle-btn"
            type="button"
        >
            <i
                class="d-block size-5"
                id="moon-icon"
                data-lucide="moon"
            ></i>
            <i
                class="d-none size-5"
                id="sun-icon"
                data-lucide="sun"
            ></i>
        </button>

        <!-- load your vendor scripts for all pages  -->

    </body>

</html>
