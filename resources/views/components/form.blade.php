@props(['action'])
<form action="{{ $action }}" method="post" {{ $attributes->merge() }}>
    @csrf
    @method('POST')

    {{ $header ?? '' }}

    {{ $slot }}

    {{ $bottom ?? '' }}

</form>
