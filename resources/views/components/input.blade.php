 @props(['name', 'label' => ''])
 @if ($label)
     <label
         for="form-input-{{ $name }}"
         class="form-label"
     >
         {{ Str::title($label) }}
     </label>
 @endif
 <input
     {{ $attributes->merge([
        'type' => 'text',
        'name' => $name,
        'id' => "form-input-{$name}",
        'value' => old($name),
        'class' => 'form-control'
     ]) }}
 >
 @error($name)
     <small class="text-danger">{{ $message }}</small>
 @enderror
