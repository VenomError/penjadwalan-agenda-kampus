<x-layouts.dashboard>

    <div class="row">
        <div class="col-12 p-4">
            <x-table.basic>
                <x-slot:header>
                    <div class="d-flex justify-content-between align-items-center">
                        <h3 class="card-title">List Prodi</h3>
                        <!-- Button to Open Modal -->
                        <button
                            class="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#modalCreate"
                            type="button"
                        >
                            Tambah Prodi
                        </button>
                    </div>
                </x-slot:header>
                <x-slot:head>
                    <tr>
                        <th>Prodi</th>
                        <th>Email</th>
                        <th></th>
                    </tr>
                </x-slot:head>
                @foreach ($users as $prodi)
                    <tr>
                        <td>{{ $prodi->name }}</td>
                        <td>{{ $prodi->email }}</td>
                        <td class="text-start">
                            <div class="btn-group gap-1">
                                <x-button-icon
                                    href="{{ route('account.user-edit', ['user' => $prodi->id]) }}"
                                    title="edit"
                                    color="warning"
                                    icon="square-pen"
                                />
                                <x-button-icon
                                    href="{{ route('account.user-remove', ['user' => $prodi->id]) }}"
                                    title="hapus"
                                    color="danger"
                                    icon="trash-2"
                                />
                            </div>
                        </td>
                    </tr>
                @endforeach
            </x-table.basic>
        </div>
    </div>

    <x-slot:modal>
        <!-- Modal -->
        <x-modal id="modalCreate" title="Tambah Prodi" size="lg">
            <x-form :action="route('account.user-create', ['role' => 'prodi'])" enctype="multipart/form-data">
                <div class="mb-3">
                    <x-input name="name" label="full name" placeholder="Full Name" />
                </div>
                <div class="mb-3">
                    <x-input
                        name="email"
                        type="email"
                        label="email"
                        placeholder="Email"
                    />
                </div>
                <div class="mb-3">
                    <x-input-password name="password" label="password" placeholder="Password" />
                </div>
                <div class="mb-3">
                    <x-input name="avatar" type="file" label="avatar" />
                </div>
                <div class="d-flex float-end text-end">
                    <button class="btn btn-success" type="submit">SUBMIT</button>
                </div>
            </x-form>
        </x-modal>
        <x-modal id="modalUpdate" title="Edit Prodi" size="lg">
            @php
                $user = session('userId') ? \App\Models\User::find(session('userId')) : null;
            @endphp
            <x-form method="PUT" :action="route('account.user-update', ['user' => $user?->id])" enctype="multipart/form-data">
                <div class="mb-3">
                    <x-input
                        name="name"
                        value="{{ old('name', $user?->name) }}"
                        label="full name"
                        placeholder="Full Name"
                    />
                </div>
                <div class="mb-3">
                    <x-input
                        name="email"
                        type="email"
                        value="{{ old('email', $user?->email) }}"
                        label="email"
                        placeholder="Email"
                    />
                </div>
                <div class="d-flex float-end text-end">
                    <button class="btn btn-success" type="submit">SUBMIT</button>
                </div>
            </x-form>
        </x-modal>
    </x-slot:modal>

</x-layouts.dashboard>
