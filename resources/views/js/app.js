import "./bootstrap";

import Alpine from "alpinejs";
import { createIcons } from "lucide"; // lebih baik import langsung fungsi

window.Alpine = Alpine;

// Jalankan Alpine dulu
Alpine.start();

// Render semua icon lucide setelah Alpine render
document.addEventListener("alpine:init", () => {
    createIcons();
});
