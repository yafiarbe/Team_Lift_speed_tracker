# Copilot Instructions for Team Lift Speed Tracker

## Overview

This is a Nuxt 4 (Vue 3) PWA for tracking parcel processing speed during work shifts. The app is designed for real-time progress tracking, offline use, and mobile installation.

## Architecture & Key Files

- `app/` — Main application code. Entry: `app.vue` (contains most logic, UI, and state management)
- `public/` — Static assets (e.g., icons, robots.txt)
- `scripts/` — Utility scripts (e.g., deployment helpers)
- `nuxt.config.ts` — Nuxt configuration (modules, PWA, UI, etc.)
- `package.json` — Scripts, dependencies, and build commands

## Developer Workflows

- **Install dependencies:** `npm install`
- **Development server:** `npm run dev`
- **Static site generation:** `npm run generate`
- **Deploy to GitHub Pages:** `npm run deploy` (uses `gh-pages` to publish `.output/public`)
- **Linting:** ESLint is configured via `eslint.config.mjs` and runs automatically in many editors

## Project-Specific Patterns

- **State & Logic:**
    - All main state and logic are in `app/app.vue` using `<script setup lang="ts">`.
    - Uses Vue's `ref`, `computed`, and `watch` for reactivity.
    - Shift and time slot logic is encapsulated in composables within the same file.
- **UI:**
    - Uses Nuxt UI components (`UApp`, `UButton`, `UCard`, etc.)
    - Tailwind CSS utility classes for styling.
- **PWA:**
    - PWA setup is handled via `@vite-pwa/nuxt` in `nuxt.config.ts`.
    - App can be installed on mobile and works offline.
- **Persistence:**
    - User progress and settings are stored in `localStorage` (see logic in `app.vue`).
- **Dynamic Tab Title:**
    - The browser tab title is dynamically updated to show the current "Крайнее время" (deadline time) using `useHead` and `watchEffect` after all computed properties are initialized.

## Conventions & Integration

- **No Vuex/Pinia:** All state is local to `app.vue`.
- **TypeScript:** Used throughout, especially for state and settings interfaces.
- **No backend:** All logic is client-side; no API calls or server integration.
- **Deployment:** Only GitHub Pages is supported out-of-the-box.

## Examples

- See `app/app.vue` for:
    - Shift logic and time slot generation
    - Dynamic UI updates and notifications
    - PWA install prompt handling
    - LocalStorage usage for persistence

---

If you are unsure about a workflow or pattern, check `README.md` and `app/app.vue` first. For deployment, always use the provided npm scripts.
