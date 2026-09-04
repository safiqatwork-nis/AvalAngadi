# Aval Angadi

Aval Angadi is a Vite-powered React storefront with React Router, Tailwind CSS, and a small Express health-check server.

## Development

```bash
npm install
npm run dev
```

Run the API separately when needed:

```bash
npm run server
```

## Verification

```bash
npm run lint
npm run build
```

## Project structure

```text
public/                  Static files served as-is
server/                  Express API
src/
  assets/                Imported images and other bundled assets
  components/            Shared UI components
  layout/                Page-level shared layouts
  pages/                  Route pages and page-specific sections
  routes/                 React Router configuration
  App.jsx                 Application composition
  index.css               Global styles and Tailwind import
  main.jsx                Browser entry point
```

Generated files are written to `dist/`. Installed packages are stored in `node_modules/`. Both directories are excluded from Git.
