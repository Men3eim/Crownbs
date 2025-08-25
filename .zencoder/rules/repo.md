# Repository Overview

- **Project Name**: Crown Business Solutions Website
- **Framework/Tooling**: Vite + React 19 + TypeScript + Tailwind CSS
- **Backend/DB**: Convex (serverless functions + data)
- **Routing**: react-router-dom v7
- **Package Manager**: npm

## Scripts
- **dev**: Runs frontend (Vite) and Convex backend concurrently
- **build**: Vite production build
- **lint**: Type checks both convex and app, generates convex types once, then builds

## Tech Stack
- **React** ^19, **TypeScript** ~5.7
- **Vite** ^6
- **Tailwind CSS** ~3, **PostCSS** ~8, **Autoprefixer** ~10
- **Convex** ^1.24 (with @convex-dev/auth)
- **UI Utilities**: clsx, tailwind-merge
- **UX**: sonner (toasts)

## App Structure
- **src/**
  - **components/**: UI components (Hero, Services, Portfolio, Testimonials, Header, Footer, AdminOTAs, Partnerships, OTAChannels)
  - **pages/**: Route pages (Home, About, Services, Portfolio, Contact, Partnerships, Admin, CustomerExcellence, etc.)
  - **lib/**: Utilities (utils.ts)
  - **assets/logos/**: In public/ and src/ for various brand images
- **convex/**: Serverless functions, schema, HTTP handlers, email tasks
- **public/**: Static assets, favicons, OTA logos, manifests

## Routing
- Entry: index.html -> src/main.tsx -> src/App.tsx
- Pages use react-router-dom v7

## Data
- Convex modules: inquiries, otas, partnerships, properties, testimonials, etc.
- Generated API/types in convex/_generated

## Development
1. Install dependencies: `npm install`
2. Run dev servers: `npm run dev` (Vite + Convex)
3. Production build: `npm run build`

## Notable Conventions
- OTAs are treated as distribution channels, not partners. Wording reflects: “OTAChannels” component and clarifying copy.
- Tailwind used via utility classes; config in `tailwind.config.js`.

## Recent Changes
- Renamed component: `OTAPartners` -> `OTAChannels`; updated imports and removed old file.
- Clarified OTA wording sitewide to avoid implying partnership/endorsement.

## Deployment
- Vercel config present (`vercel.json`). Vite static build output in `dist/`.

## Notes
- Environment variables in `.env.local` (not committed). Ensure Convex is configured for local dev.
- For OTA images, assets live under `public/logos-ota/`.