# gio.dev

Personal portfolio website for Geomar Dalaoyan — frontend developer and UI designer.

Built with React and Vite, animated with Framer Motion, and styled entirely with Tailwind CSS.

---

## Tech Stack

| Tool | Purpose |
|---|---|
| React 18 | UI framework |
| Vite | Build tool & dev server |
| Tailwind CSS | Utility-first styling |
| Framer Motion | Animations & transitions |
| Lucide React / Phosphor Icons | UI & decorative icons |

---

## Features

- **Hero** — Animated intro with name, tagline, and about blurb
- **Projects** — Clickable project list with a detail modal (live + GitHub links)
- **Skills** — Dual-row infinite marquee of tools and technologies
- **Contact** — CTA section with email and GitHub links
- **Sidebar Nav** — Fixed vertical navigation on desktop with smooth scroll; collapsible hamburger menu on mobile
- **Dark / Light Mode** — Theme toggle with `localStorage` persistence
- **Scroll Reveals** — Framer Motion fade-in animations as sections enter the viewport
- **Responsive** — Mobile-first layout, tested from 320px up

---

## Getting Started

**Prerequisites:** Node.js 18+

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev

# Build for production
npm run build

# Preview the production build
npm run preview
```

The dev server runs at `http://localhost:5173` by default.

---

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Sidebar nav (desktop) + mobile menu
│   ├── Hero.jsx            # Hero section
│   ├── Projects.jsx        # Project list + modal
│   ├── ProjectModal.jsx    # Project detail overlay
│   ├── Skills.jsx          # Animated skills marquee
│   ├── Contact.jsx         # Contact CTA
│   ├── Footer.jsx          # Footer
│   ├── Reveal.jsx          # Scroll-reveal wrapper component
│   └── ui/
│       ├── Button.jsx      # Reusable button
│       ├── Tag.jsx         # Project tag badge
│       └── ThemeToggle.jsx # Dark/light mode toggle
├── data/
│   ├── projects.js         # Project data array
│   └── skills.js           # Skills/tools arrays (two marquee rows)
├── hooks/
│   └── useActiveSection.js # IntersectionObserver hook for active nav link
├── App.jsx                 # Root layout
├── main.jsx                # Entry point
└── index.css               # Global styles & font imports
```

---

## Customization

**Projects** — Edit `src/data/projects.js` to add, remove, or update your projects. Each project supports a title, description, tags, live URL, and GitHub URL.

**Skills** — Edit `src/data/skills.js` to update the two marquee rows with your current tools.

**Content** — Update the bio, tagline, and contact details directly in `src/components/Hero.jsx` and `src/components/Contact.jsx`.

**Colors & Fonts** — The palette and typography are configured in `tailwind.config.js` and `src/index.css`.

---

## Fonts

Loaded from Google Fonts via `@import` in `index.css`:

- **Playfair Display** — display headings
- **DM Sans** — body text
- **Space Mono** — code labels and badges

---

------By: Gio dalaoyan
