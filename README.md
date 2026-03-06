# Portfolio Website

Personal portfolio website built with **React + TypeScript** using **Vite**, styled with **Tailwind CSS**, and featuring UI/animation tooling like **Framer Motion** and **GSAP**.

## Tech Stack

- **Frontend:** React 18 + TypeScript
- **Build tool:** Vite
- **Styling:** Tailwind CSS (PostCSS + Autoprefixer)
- **Routing:** React Router
- **Animations:** Framer Motion, GSAP
- **Icons:** lucide-react
- **Email:** emailjs-com
- **Analytics/Performance:** @vercel/analytics, @vercel/speed-insights
- **Linting:** ESLint

## Project Structure

Common folders you’ll see in this repo:

- `src/` — application source code (components, pages, styles, etc.)
- `public/` — static assets served directly
- `Images/` — project images/assets (as committed)
- Config files:
  - `vite.config.ts`
  - `tailwind.config.js`
  - `postcss.config.js`
  - `tsconfig*.json`
  - `eslint.config.js`

## Getting Started (Local Development)

### Prerequisites
- **Node.js** (recommended: latest LTS)
- npm (comes with Node)

### Install
```bash
npm install
```

### Run the dev server
```bash
npm run dev
```

Vite will print a local URL (commonly `http://localhost:5173`) in your terminal.

## Scripts

- **Start dev server:**  
  ```bash
  npm run dev
  ```
- **Production build:**  
  ```bash
  npm run build
  ```
- **Preview production build locally:**  
  ```bash
  npm run preview
  ```
- **Lint:**  
  ```bash
  npm run lint
  ```

## Building for Production

```bash
npm run build
```

This will generate a production build (Vite default output is typically `dist/`).

## Notes

- SVG imports are supported via `vite-plugin-svgr` (see `vite.config.ts`).
- If you use EmailJS in the app, you’ll likely need to configure keys via environment variables (e.g. a `.env` file). If you add env vars, remember to **not commit secrets**—use `.env.example` for placeholders.

## License

Add a license if/when you’re ready (e.g., MIT). If you already have a preferred license, create a `LICENSE` file and update this section.
