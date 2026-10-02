# Seaside Digital Workspace

A lightweight, static internal homepage for **Seaside Investments**. It acts as a polished launchpad to the systems used across Seaside operations — documents, email, tasks, calendar, passwords, and related tools.

This is intentionally **not** a full application. There is no backend, database, authentication, or live API integration. All destinations are simple links defined in a configuration file.

## Features

- Clean, premium single-page portal for internal use
- Large primary service cards with clear call-to-action buttons
- Administration & security section for restricted tools
- “Where should I go?” quick guide for nontechnical users
- Configurable useful links (advisors, contacts, guides)
- Fully responsive layout (desktop grid → mobile single column)
- Accessible focus states, keyboard-friendly links, new-tab navigation

## Tech stack

- React
- TypeScript
- Vite
- Tailwind CSS

## Getting started

### Prerequisites

- Node.js 20+ (recommended)
- npm 10+

### Install

```bash
npm install
```

### Local development

```bash
npm run dev
```

Open the URL shown in the terminal (typically `http://localhost:5173`).

### Production build

```bash
npm run build
```

Static assets are written to `dist/`.

### Preview the production build

```bash
npm run preview
```

## Updating service URLs

All service destinations live in one place:

[`src/config/services.ts`](src/config/services.ts)

Update:

- `portalConfig` — brand name, title, subtitle, welcome message, footer
- `primaryServices` — Google Drive, Claude, Asana, Gmail, Calendar, 1Password
- `adminServices` — Workspace Admin, Emergency Continuity
- `quickGuide` — question → destination mappings
- `usefulLinks` — Advisors, Key Contacts, guides, etc.

Replace placeholder `url` values with your organization’s real destinations. Components read from this config and do not hardcode URLs.

## Project structure

```text
src/
  components/     Reusable UI sections and cards
  config/         Portal copy and service link configuration
  types/          Shared TypeScript types
  App.tsx         Page composition
  index.css       Theme tokens and global styles
  main.tsx        Application entry
```

## Deployment

Because this is a static Vite app, you can host `dist/` on any static hosting provider:

- **Netlify / Vercel / Cloudflare Pages** — connect the repo, build command `npm run build`, publish directory `dist`
- **GitHub Pages** — build and publish the `dist` folder
- **Any nginx / S3 / blob static host** — upload the contents of `dist/`

No server-side runtime is required.

### Suggested Netlify / Cloudflare settings

| Setting | Value |
| --- | --- |
| Build command | `npm run build` |
| Publish directory | `dist` |

## Design notes

The visual language is intentionally calm and restrained: warm light neutrals, navy text, muted blue and green accents, and a subtle gold highlight for a family-office feel. Avoid adding charts, dense dashboards, or developer-oriented UI patterns.

## License

Internal use — Seaside Investments.
