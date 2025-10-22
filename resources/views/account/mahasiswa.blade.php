<x-layouts.dashboard>

    <div class="row">
        <div class="col-12 p-4">
            <x-table.basic>
                <x-slot:header>
                    <div class="d-flex justify-content-between align-items-center">
                        <h3 class="card-title">List Mahasiswa</h3>
                        <!-- Button to Open Modal -->
                        <button
                            class="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#modalCreate"
                            type="button"
                        >
                            Tambah Mahasiswa
                        </button>
                    </div>
                </x-slot:header>
                <x-slot:head>
                    <tr>
                        <th>Mahasiswa</th>
                        <th>NIM</th>
                        <th>Email</th>
                        <th></th>
                    </tr>
                </x-slot:head>
                @foreach ($users as $mahasiswa)
                    <tr>
                        <td>{{ $mahasiswa->name }}</td>
                        <td>{{ $mahasiswa->nim }}</td>
                        <td>{{ $mahasiswa->email }}</td>
                        <td class="text-start">
                            <div class="btn-group gap-1">
                                <x-button-icon
                                    href="{{ route('account.user-edit', ['user' => $mahasiswa->id]) }}"
                                    title="edit"
                                    color="warning"
                                    icon="square-pen"
                                />
                                <x-form method="DELETE" :action="route('account.user-remove', ['user' => $mahasiswa->id])">
                                    <x-button-icon
                                        type="submit"
                                        href="{{ route('account.user-remove', ['user' => $mahasiswa->id]) }}"
                                        title="hapus"
                                        buttonType="button"
                                        color="danger"
                                        icon="trash-2"
                                    />
                                </x-form>
                            </div>
                        </td>
                    </tr>
                @endforeach
            </x-table.basic>
        </div>
    </div>

    <x-slot:modal>
        <!-- Modal -->
        <x-modal id="modalCreate" title="Tambah Mahasiswa" size="lg">
            <x-form :action="route('account.user-create', ['role' => 'mahasiswa'])" enctype="multipart/form-data">
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
                <div class="mb-3">
                    <x-input
                        name="nim"
                        type="number"
                        label="NIM Mahasiswa"
                        placeholder="NIM Mahasiswa"
                    />
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
                <div class="mb-3">
                    <x-input
                        name="nim"
                        type="text"
                        value="{{ old('nim', $user?->nim) }}"
                        label="NIM"
                        placeholder="NIM"
                    />
                </div>
                <div class="d-flex float-end text-end">
                    <button class="btn btn-success" type="submit">SUBMIT</button>
                </div>
            </x-form>
        </x-modal>
    </x-slot:modal>

</x-layouts.dashboard>
