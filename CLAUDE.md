# Portfolio Website Design Skill
**Stack: React + Tailwind CSS**

This skill guides Claude in building a distinctive, production-grade personal portfolio website. The goal is a memorable, visually cohesive experience that reflects the owner's identity — not a generic template.

---

## Tech Stack

- **Framework**: React (functional components + hooks)
- **Styling**: Tailwind CSS utility classes only — no custom CSS files unless absolutely necessary
- **Animations**: `framer-motion` for page transitions and scroll reveals
- **Icons**: `lucide-react` (primary) + `@phosphor-icons/react` (supplemental)
- **Fonts**: Playfair Display + DM Sans + Space Mono — loaded via `@import` in `globals.css` from Google Fonts

---

## Portfolio Structure

Build as a single-page app with smooth scroll sections, or separate route-based pages. Default to single-page.

### Required Sections
1. **Hero** — Name, title/tagline, CTA button(s), strong visual anchor
2. **About** — Short bio, personality, photo or illustration
3. **Skills / Stack** — Technologies, tools, and strengths
4. **Projects** — Cards or feature highlights with links
5. **Contact** — Email, social links, or a simple form

### Optional Sections
- Experience / Timeline
- Testimonials
- Blog / Writing
- Resume download

---

## Design Thinking (Do This First)

Before writing any code, commit to a clear aesthetic direction:

- **Tone** — Pick one extreme and own it:
  - *Minimal editorial* (lots of whitespace, sharp type, muted palette)
  - *Retro-futuristic* (grid overlays, glitch effects, monospace fonts)
  - *Warm & crafted* (earthy tones, hand-drawn accents, serif type)
  - *Bold & maximalist* (vivid colors, big type, layered elements)
  - *Dark & refined* (near-black bg, gold/silver accents, glass morphism)

- **One Memorable Thing** — What will visitors remember? A scroll-triggered animation, an interactive hero, a striking color combo, a typographic statement?

- **Color Strategy** — Use Tailwind's `extend.colors` in `tailwind.config.js` for a custom palette. Define 1–2 dominant colors + 1 sharp accent. Avoid purple-on-white.

- **Typography Rules** (locked-in pairing for gio.dev):
  - **Display:** Playfair Display — serif, elegant, high contrast at large sizes
  - **Body:** DM Sans — clean grotesque, highly readable at small sizes
  - **Mono:** Space Mono — techy, used for code tags, badges, and accents
  - Use `font-display`, `font-body`, `font-mono` Tailwind aliases (configured below)

---

## Google Fonts Import

Add this to the top of `globals.css` (or `index.css`):

```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=DM+Sans:wght@400;500;600&family=Space+Mono:wght@400;700&display=swap');
```

---

## Icons

| Library | Role | Install |
|---|---|---|
| `lucide-react` | Primary — all UI icons (nav, buttons, social links, close, arrow) | already included |
| `@phosphor-icons/react` | Supplemental — expressive / decorative icons in Hero and About | `npm i @phosphor-icons/react` |

**Usage:**

```tsx
// Lucide — UI icons
import { ArrowRight, Menu, X, Github, Mail } from "lucide-react";

// Phosphor — decorative accents
import { Code, Sparkle, RocketLaunch } from "@phosphor-icons/react";

// Phosphor supports 6 weight variants
<Sparkle size={32} weight="duotone" className="text-accent" />
<Code size={24} weight="bold" />
```

**Rule:** Use Lucide for anything functional (buttons, nav, forms). Use Phosphor only when the icon is decorative or needs to feel more expressive — like skill icons or section accents.

---

## Tailwind Configuration

Always extend Tailwind for the project's brand:

```js
// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#0f0f0f",
          surface: "#1a1a1a",
          primary: "#e8d5b0",
          accent: "#ff6b35",
          muted: "#6b6b6b",
        },
      },
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        body: ["'DM Sans'", "sans-serif"],
        mono: ["'Space Mono'", "monospace"],
      },
    },
  },
};
```

---

## Component Patterns

### Hero Section
```jsx
// Bold, full-viewport hero with animated entrance
<section className="min-h-screen flex flex-col justify-center px-8 md:px-20 relative overflow-hidden">
  <motion.h1
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="font-display text-6xl md:text-9xl leading-none tracking-tight"
  >
    Your Name
  </motion.h1>
  <p className="font-body text-brand-muted text-xl mt-4">
    Frontend Developer · UI Designer · Creative Coder
  </p>
</section>
```

### Project Cards
```jsx
// Minimal card with hover reveal
<div className="group relative overflow-hidden rounded-2xl bg-brand-surface p-6 cursor-pointer transition-all duration-300 hover:scale-[1.02]">
  <h3 className="font-display text-2xl">{project.title}</h3>
  <p className="text-brand-muted mt-2 text-sm">{project.description}</p>
  <div className="flex gap-2 mt-4 flex-wrap">
    {project.tags.map(tag => (
      <span key={tag} className="text-xs px-2 py-1 rounded-full bg-brand-bg text-brand-accent font-mono">
        {tag}
      </span>
    ))}
  </div>
  <div className="absolute inset-0 bg-brand-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
</div>
```

### Scroll Reveal Wrapper
```jsx
// Reusable reveal component
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function Reveal({ children, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
```

---

## Navigation

- Sticky top navbar with smooth scroll links
- Minimal: logo/name on the left, links on the right
- Mobile: hamburger menu with slide-in drawer
- Active section highlighting using `IntersectionObserver`

```jsx
<nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-4 backdrop-blur-md bg-brand-bg/80 border-b border-white/5">
  <span className="font-display text-xl">YN</span>
  <ul className="hidden md:flex gap-8 font-body text-sm text-brand-muted">
    {["About", "Projects", "Skills", "Contact"].map(item => (
      <li key={item}>
        <a href={`#${item.toLowerCase()}`} className="hover:text-brand-primary transition-colors">
          {item}
        </a>
      </li>
    ))}
  </ul>
</nav>
```

---

## Responsiveness Rules

- Always mobile-first: start with base styles, add `md:` and `lg:` breakpoints
- Hero text: `text-4xl md:text-7xl lg:text-9xl`
- Grid columns: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- Padding: `px-6 md:px-12 lg:px-24`
- Never let content touch viewport edges on mobile

### Mobile-First Approach

Design at 320px and scale up — not the reverse.

**Breakpoint ladder:**
| Breakpoint | Width | Use For |
|---|---|---|
| *(base)* | 0px+ | Mobile portrait — primary design target |
| `sm:` | 640px+ | Mobile landscape, small tablets |
| `md:` | 768px+ | Tablets, narrow desktops |
| `lg:` | 1024px+ | Desktops |
| `xl:` | 1280px+ | Wide desktops |
| `2xl:` | 1536px+ | Ultra-wide |

**Layout rules by viewport:**

```jsx
// Navigation — hamburger on mobile, full links on desktop
<nav className="fixed top-0 inset-x-0 z-50 flex justify-between items-center px-6 md:px-12 py-4">
  <span className="font-display text-lg">YN</span>

  {/* Desktop links */}
  <ul className="hidden md:flex gap-8 text-sm text-brand-muted">
    {navItems.map(item => <li key={item}><a href={`#${item.toLowerCase()}`}>{item}</a></li>)}
  </ul>

  {/* Mobile hamburger */}
  <button className="md:hidden" aria-label="Open menu">
    <Menu size={24} />
  </button>
</nav>

// Hero — stacked on mobile, side-by-side on desktop
<section className="min-h-screen flex flex-col md:flex-row items-center gap-12 px-6 md:px-20 pt-24 md:pt-0">
  <div className="flex-1 text-center md:text-left">
    <h1 className="font-display text-5xl md:text-7xl lg:text-9xl leading-none">Your Name</h1>
  </div>
</section>

// Projects — 1 col → 2 col → 3 col
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {projects.map(p => <ProjectCard key={p.id} {...p} />)}
</div>
```

**Touch targets:** All buttons and links must be at least `44×44px` on mobile — use `min-h-[44px] min-w-[44px]` or `p-3` to pad small icons.

**Typography scaling:**
```jsx
// Never let text overflow or wrap awkwardly
<h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl leading-[1.05] tracking-tight" />
<p className="text-base md:text-lg leading-relaxed max-w-prose" />
```

**Mobile drawer (hamburger menu):**
```jsx
// Slide-in full-screen menu for mobile
<motion.div
  initial={{ x: "100%" }}
  animate={{ x: 0 }}
  exit={{ x: "100%" }}
  transition={{ type: "tween", duration: 0.3 }}
  className="fixed inset-0 z-50 bg-brand-bg flex flex-col justify-center items-center gap-10 md:hidden"
>
  {navItems.map(item => (
    <a key={item} href={`#${item.toLowerCase()}`} className="font-display text-4xl" onClick={closeMenu}>
      {item}
    </a>
  ))}
</motion.div>
```

---

## Dark Mode

Use Tailwind's `dark:` variant with a class-based strategy (not `media` — gives manual toggle control).

### Setup

```js
// tailwind.config.js
module.exports = {
  darkMode: "class",   // toggle via .dark on <html>
  // ...
}
```

```tsx
// Apply to root layout so dark: variants cascade everywhere
<html className="dark">   {/* or manage dynamically */}
```

### Color Strategy

Define semantic tokens as CSS variables — one set for light, one for dark. Never hardcode `#hex` values in components.

```css
/* globals.css */
:root {
  --color-bg:       #f5f2ec;
  --color-surface:  #ffffff;
  --color-text:     #1a1a1a;
  --color-muted:    #6b6b6b;
  --color-accent:   #ff6b35;
  --color-border:   rgba(0,0,0,0.08);
}

.dark {
  --color-bg:       #0f0f0f;
  --color-surface:  #1a1a1a;
  --color-text:     #e8d5b0;
  --color-muted:    #6b6b6b;
  --color-accent:   #ff6b35;
  --color-border:   rgba(255,255,255,0.06);
}
```

```js
// tailwind.config.js — wire CSS vars to utility classes
extend: {
  colors: {
    bg:      "var(--color-bg)",
    surface: "var(--color-surface)",
    text:    "var(--color-text)",
    muted:   "var(--color-muted)",
    accent:  "var(--color-accent)",
    border:  "var(--color-border)",
  }
}
```

Now components use semantic names and inherit the right color automatically:

```jsx
<section className="bg-bg text-text">
  <p className="text-muted">Secondary content</p>
  <span className="bg-surface border border-border rounded-xl">Card</span>
</section>
```

### Manual Toggle

```tsx
// hooks/useTheme.ts
import { useEffect, useState } from "react";

export function useTheme() {
  const [dark, setDark] = useState(() =>
    typeof window !== "undefined"
      ? document.documentElement.classList.contains("dark")
      : true
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return { dark, toggle: () => setDark(d => !d) };
}
```

```tsx
// ThemeToggle.tsx
"use client";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

export function ThemeToggle() {
  const { dark, toggle } = useTheme();
  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="p-2 rounded-full hover:bg-surface transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
    >
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
```

### Dark Mode Anti-Patterns

| ❌ Don't | ✅ Do Instead |
|---|---|
| `dark:text-white` scattered everywhere | Semantic CSS vars that auto-swap |
| Pure `#000000` background | Near-black `#0f0f0f` — easier on eyes |
| Pure `#ffffff` text on dark | Warm off-white `#e8d5b0` or `#f0ede8` |
| `dark:` on every single element | Set on `bg`/`text` at layout level, inherit down |
| Hard-coded `dark:` in image overlays | Use `bg-black/40` opacity — works in both modes |

---

## Performance & Accessibility

- Use `loading="lazy"` on all images
- All interactive elements must have `aria-label` or visible text
- Color contrast: text must meet WCAG AA (4.5:1 minimum)
- Smooth scroll: `scroll-behavior: smooth` on `html`
- Avoid layout shift: set explicit `width` and `height` on images

---

## Anti-Patterns to Avoid

| ❌ Don't | ✅ Do Instead |
|---|---|
| Purple gradient on white | Pick a distinct, original palette |
| Inter / Roboto everywhere | Distinctive display + body font pairing |
| Generic card grid | Varied layouts: asymmetric, featured + grid |
| Flat, static sections | Scroll-triggered reveals, parallax accents |
| Walls of text in About | Short, punchy copy with visual breaks |
| Centered everything | Mix alignments for visual rhythm |
| Overusing shadows | Use sparingly as intentional depth cues |

---

## Starter File Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Projects.jsx
│   ├── Skills.jsx
│   ├── Contact.jsx
│   └── Reveal.jsx          ← reusable scroll reveal
├── data/
│   └── projects.js         ← project data array
├── App.jsx
├── index.css               ← Google Font imports
└── main.jsx
```

---

## Quick Reference: Tailwind Classes for Portfolio

| Use Case | Classes |
|---|---|
| Full viewport hero | `min-h-screen flex flex-col justify-center` |
| Section spacing | `py-24 md:py-32 px-6 md:px-16` |
| Section heading | `font-display text-4xl md:text-6xl font-bold` |
| Subtle divider | `border-t border-white/10` |
| Glass card | `bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10` |
| Tag / badge | `text-xs font-mono px-2 py-1 rounded-full` |
| Muted body text | `text-sm text-brand-muted leading-relaxed` |
| CTA button | `px-6 py-3 rounded-full font-body font-medium transition-all` |

---

*Use this skill as a reference for every portfolio-related component or section Claude builds. Consistency, intentionality, and originality are the goals.*
