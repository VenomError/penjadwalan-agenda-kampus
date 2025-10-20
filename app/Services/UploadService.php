<?php

namespace App\Services;

use Request;
use Validator;
use Illuminate\Http\UploadedFile;
use Illuminate\Validation\ValidationException;

class UploadService
{
    /**
     * Upload file ke folder tertentu.
     *
     * @param UploadedFile $file
     * @param string $folder
     * @param string $visibility
     * @return string|null Path file yang tersimpan
     * @throws ValidationException
     */
    public static function upload(UploadedFile $file, string $folder = 'uploads', string $visibility = 'public'): ?string
    {
        $validator = Validator::make(
            ['file' => $file],
            ['file' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',]
        );

        if ($validator->fails()) {
            throw new ValidationException($validator);
        }

        // Generate nama file unik
        $filename = time() . '_' . $file->getClientOriginalName();

        // Simpan file ke storage/app/public/{folder}
        $path = $file->storeAs($folder, $filename, $visibility);

        return $path;
    }
}
