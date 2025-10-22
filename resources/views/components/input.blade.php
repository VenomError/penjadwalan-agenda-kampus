 @props(['name', 'label' => ''])
 @if ($label)
     <label class="form-label" for="form-input-{{ $name }}">
         {{ Str::title($label) }}
     </label>
 @endif
 <input
     {{ $attributes->merge([
         'type' => 'text',
         'name' => $name,
         'id' => "form-input-{$name}",
         'value' => old($name),
         'class' => 'form-control',
     ]) }}
 >
 <small class="text-muted">{{ $slot }}</small>
 @error($name)
     <small class="text-danger">{{ $message }}</small>
 @enderror
