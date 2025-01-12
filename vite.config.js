import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";

export default defineConfig({
    server: {
        https: true, // Mengaktifkan HTTPS untuk server Vite
        proxy: {
            // Anda juga bisa menambahkan pengaturan proxy jika diperlukan
            "/": "https://localhost", // Misalnya, proxy ke server lokal
        },
    },
    plugins: [
        laravel({
            input: ["resources/css/app.css", "resources/js/app.js"],
            refresh: true,
        }),
    ],
});
