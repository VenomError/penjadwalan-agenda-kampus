 @props(['name', 'label' => ''])
 @if ($label)
     <label
         for="form-input-{{ $name }}"
         class="form-label"
     >
         {{ Str::title($label) }}
     </label>
 @endif
 <div
     class="position-relative"
     x-data="{ show: false }"
 >
     <input
         {{ $attributes->merge([
             'name' => $name,
             'id' => "form-input-{$name}",
             'value' => old($name),
             'class' => 'form-control',
         ]) }}
         :type="show ? 'text' : 'password'"
     >
     <div
         class="position-absolute top-50 translate-middle-y text-muted end-0 me-3 cursor-pointer"
         @click="show = !show"
     >
         <i
             data-lucide="eye-off"
             class="size-5"
             x-show="!show"
         ></i>
         <i
             data-lucide="eye"
             class="size-5"
             x-show="show"
         ></i>
     </div>
 </div>
 @error($name)
     <small class="text-danger">{{ $message }}</small>
 @enderror
