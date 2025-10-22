@props(['action', 'method' => 'POST'])
<form action="{{ $action }}" method="POST" {{ $attributes->merge() }}>
    @csrf
    @method($method)

    {{ $header ?? '' }}

    {{ $slot }}

    {{ $bottom ?? '' }}

</form>
