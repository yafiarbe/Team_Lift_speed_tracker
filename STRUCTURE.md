# Team Lift Speed Tracker - Nuxt 4.2.2 Project Structure

## 📁 Project Structure

````
app/
├── assets/              # Static assets (CSS, images, fonts)
│   └── css/
│       └── main.css    # Global styles
├── components/         # Vue components (auto-imported)
│   ├── Header.vue      # Navigation header
│   └── Footer.vue      # Footer component
├── composables/        # Vue composables (reusable logic)
│   └── useFormat.ts    # Formatting utilities
├── layouts/            # Layout components
│   └── default.vue     # Default layout with Header & Footer
├── middleware/         # Route middleware
│   └── auth.ts         # Authentication middleware example
├── pages/              # Pages (auto-routed)
│   ├── index.vue       # Home page
│   ├── about.vue       # About page
│   ├── dashboard.vue   # Dashboard page
│   └── teams.vue       # Teams page
├── server/
│   └── api/            # Server API routes
│       └── hello.ts    # Example API endpoint
├── stores/             # Pinia stores (state management)
│   └── counter.ts      # Counter store example
├── utils/              # Utility functions
│   └── helpers.ts      # Helper functions
└── app.vue             # Root component

## 🚀 Getting Started

### Installation
```bash
npm install
````

### Development

```bash
npm run dev
```

Visit `http://localhost:3000`

### Build

```bash
npm run build
npm run preview
```

## 📦 Technologies

- **Nuxt 4.2.2** - Vue.js framework for production
- **Vue 3** - Progressive JavaScript framework
- **TypeScript** - Type-safe development
- **Pinia** - State management
- **Nuxt UI** - Component library
- **Nuxt Image** - Image optimization

## 🏗️ Architecture

### Pages

- `pages/` directory contains all routable components
- File-based routing is automatic
- Use `definePageMeta()` to configure page-specific settings

### Layouts

- `layouts/` directory contains layout components
- Default layout wraps all pages
- Use `definePageMeta({ layout: 'custom' })` to change layout

### Components

- Reusable Vue components
- Auto-imported (no need for explicit imports)
- Use PascalCase naming

### Composables

- Reusable logic extracted from components
- Use `use` prefix convention
- Auto-imported like components

### Stores (Pinia)

- `stores/` directory contains state management
- Define stores with `defineStore()`
- Access stores with `useCounterStore()`

### Server API

- `server/api/` contains backend routes
- Create files like `server/api/hello.ts`
- Automatically available as `http://localhost:3000/api/hello`

### Middleware

- Route guards and logic
- Global middleware runs on every route
- Page-specific middleware in `definePageMeta()`

### Utils

- Pure functions and helpers
- No Vue-specific logic
- Import directly: `import { calculateAverage } from '~/utils/helpers'`

## 🎨 Styling

- Global CSS in `assets/css/main.css`
- Scoped styles in components with `<style scoped>`
- CSS variables for theming:
    - `--color-primary`: #1a1a1a
    - `--color-accent`: #00dc82
    - More in `main.css`

## 🔧 Configuration

### App Configuration (`nuxt.config.ts`)

```typescript
- compatibilityDate: Nuxt compatibility version
- devtools: Development tools
- modules: Installed Nuxt modules
- css: Global styles
- runtimeConfig: Environment variables
- typescript: TypeScript settings
- nitro: Server configuration
```

### Environment Variables

```bash
# .env
NUXT_PUBLIC_API_BASE=http://localhost:3000
```

## 📝 Best Practices

1. **Components**: Keep components small and focused
2. **Composables**: Extract logic into composables for reusability
3. **Stores**: Use Pinia for global state management
4. **Types**: Always use TypeScript for type safety
5. **Layouts**: Use layouts for page structure
6. **Middleware**: Use middleware for route guards
7. **Utils**: Keep utility functions pure (no side effects)

## 🔗 Useful Links

- [Nuxt Documentation](https://nuxt.com)
- [Vue 3 Documentation](https://vuejs.org)
- [Pinia Documentation](https://pinia.vuejs.org)
- [Nuxt UI Documentation](https://ui.nuxt.com)

## 📄 File Naming Conventions

- **Components**: `Header.vue`, `Footer.vue` (PascalCase)
- **Pages**: `index.vue`, `about.vue` (kebab-case for multi-word)
- **Composables**: `useFormat.ts` (use prefix)
- **Stores**: `counter.ts` (camelCase)
- **Utils**: `helpers.ts` (descriptive name)
- **Middleware**: `auth.ts` (descriptive name)

## 🧪 Testing

Add your testing framework configuration here.

## 🚀 Deployment

- Build: `npm run build`
- Output: `.output/` directory
- Deploy to Vercel, Netlify, or any Node.js host

---

**Created**: January 2026
**Version**: 1.0.0
**Framework**: Nuxt 4.2.2
