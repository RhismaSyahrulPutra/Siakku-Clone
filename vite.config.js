import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true,
      },
      includeAssets: [
        "favicon.svg",
        "favicon.ico",
        "robots.txt",
        "apple-touch-icon.png",
      ],
      manifest: {
        name: "Portal Mahasiswa SIAKku UPI",
        short_name: "SIAKku UPI",
        description:
          "Portal SIAK Mahasiswa UPI Terintegrasi ini adalah satu-satunya layanan akademik untuk mahasiswa UPI yang memuat seluruh aktifitas utama administrasi akademik. Sistem ini menggunakan Single Sign On UPI sebagai fitur otentifikasi.",
        theme_color: "#ffffff",
        background_color: "#ffffff",
        display: "standalone",
        start_url: "/Siakku-Clone/",
        icons: [
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
  base: "/Siakku-Clone/",
});
