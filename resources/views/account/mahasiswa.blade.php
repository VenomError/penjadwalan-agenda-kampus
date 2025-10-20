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
                            data-bs-target="#modalCreateMahasiswa"
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
                @foreach ($mahasiswas as $mahasiswa)
                    <tr>
                        <td>{{ $mahasiswa->name }}</td>
                        <td>{{ $mahasiswa->nim }}</td>
                        <td>{{ $mahasiswa->email }}</td>
                        <td></td>
                    </tr>
                @endforeach
            </x-table.basic>
        </div>
    </div>

    <x-slot:modal>
        <!-- Modal -->
        <x-modal id="modalCreateMahasiswa" title="Tambah Mahasiswa" size="lg">
            <x-form :action="route('account.mahasiswa-create')" enctype="multipart/form-data">
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
    </x-slot:modal>

</x-layouts.dashboard>
