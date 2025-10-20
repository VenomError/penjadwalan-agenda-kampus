{{-- Dashboard --}}
<x-nav-title title="Dashboard" />
<x-nav-item href="/dashboard" title="Dashboard" icon="layout-dashboard" />

{{-- EVENT --}}
<x-nav-title title="Event" />
<x-nav-item href="/event" title="List Event" icon="list" />
<x-nav-item href="/event/calendar" title="Kalender" icon="calendar" />
<x-nav-item href="/event/add" title="Tambah Event" icon="plus-circle" />

{{-- AKUN --}}
<x-nav-title title="Akun" />
<x-nav-item href="{{ route('account.prodi') }}" title="Prodi" icon="graduation-cap" />
<x-nav-item href="{{ route('account.admin') }}" title="Admin" icon="user-cog" />
<x-nav-item href="{{ route('account.mahasiswa') }}" title="Mahasiswa" icon="users" />

{{-- SETTINGS --}}
<x-nav-title title="Setting" />
<x-nav-item href="/settings/account" title="Setting" icon="settings" />
