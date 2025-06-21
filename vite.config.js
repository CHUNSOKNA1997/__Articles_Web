import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
    plugins: [
        laravel({
            input: "resources/js/app.jsx",
            refresh: true,
        }),
        tailwindcss(),
        react(),
    ],
    build: {
        outDir: "dist",
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "resources/js"),
            "@/Components": path.resolve(__dirname, "resources/js/Components"),
            "@/Pages": path.resolve(__dirname, "resources/js/Pages"),
            "@/Layouts": path.resolve(__dirname, "resources/js/Layouts"),
            "@/Hooks": path.resolve(__dirname, "resources/js/Hooks"),
            "@/Utils": path.resolve(__dirname, "resources/js/Utils"),
        },
    },
});
