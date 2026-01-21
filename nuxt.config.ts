// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
	compatibilityDate: "2025-07-15",
	devtools: { enabled: true },
	ssr: false,

	// Modules
	modules: ["@nuxt/eslint", "@nuxt/hints", "@nuxt/image", "@nuxt/ui", "@pinia/nuxt", "@vite-pwa/nuxt"],

	// CSS
	css: ["~/assets/css/main.css"],

	// Vite configuration for Tailwind CSS v4
	vite: {
		plugins: [tailwindcss()],
	},

	// App configuration
	app: {
		head: {
			title: "Team Lift Speed Tracker",
			meta: [{ charset: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1" }, { name: "description", content: "Track your team's lifting speeds and performance" }],
			link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
		},
	},

	// Runtime configuration
	runtimeConfig: {
		// Server keys
		apiSecret: "",
		// Public keys
		public: {
			apiBase: process.env.NUXT_PUBLIC_API_BASE || "http://localhost:3000",
		},
	},

	// TypeScript
	typescript: {
		strict: true,
		typeCheck: false,
	},

	// Nitro configuration for server
	nitro: {
		prerender: {
			crawlLinks: false,
			routes: ["/sitemap.xml", "/robots.txt"],
			ignore: ["/admin"],
		},
	},

	// PWA Configuration
	pwa: {
		manifest: {
			name: "Team Lift Speed Tracker",
			short_name: "Lift Tracker",
			description: "Отследить скорость обработки посылок во время смены",
			display: "standalone",
			orientation: "portrait-primary",
			scope: "/",
			start_url: "/",
			background_color: "#ffffff",
			theme_color: "#000000",
			categories: ["productivity", "utilities"],
			screenshots: [
				{
					src: "/pwa-192x192.png",
					sizes: "192x192",
					type: "image/png",
					purpose: "any",
				},
				{
					src: "/pwa-512x512.png",
					sizes: "512x512",
					type: "image/png",
					purpose: "any",
				},
			],
			icons: [
				{
					src: "/favicon.ico",
					sizes: "64x64",
					type: "image/x-icon",
				},
				{
					src: "/pwa-192x192.png",
					sizes: "192x192",
					type: "image/png",
				},
				{
					src: "/pwa-512x512.png",
					sizes: "512x512",
					type: "image/png",
				},
			],
		},
		workbox: {
			runtimeCaching: [
				{
					urlPattern: "^https://.*",
					handler: "NetworkFirst",
					options: {
						cacheName: "api-cache",
						expiration: {
							maxEntries: 50,
							maxAgeSeconds: 300,
						},
					},
				},
			],
		},
		registerType: "autoUpdate",
		devOptions: {
			enabled: true,
			suppressWarnings: true,
		},
	},
});
