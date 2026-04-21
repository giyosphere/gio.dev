import { useState } from "react";
import { Menu, X, Mail, Linkedin } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { AnimatePresence, motion } from "framer-motion";
import { useActiveSection } from "@/hooks/useActiveSection.js";
import ThemeToggle from "./ui/ThemeToggle.jsx";

const NAV_ITEMS = [
  { label: "HOME",     href: "#" },
  { label: "PROJECTS", href: "#projects" },
  { label: "SKILLS",   href: "#skills" },
  { label: "CONTACT",  href: "#contact" },
];

const SOCIALS = [
  { Icon: Linkedin, href: "https://linkedin.com",          label: "LinkedIn" },
  { Icon: SiGithub, href: "https://github.com",            label: "GitHub"   },
  { Icon: Mail,     href: "mailto:giodalaoyan@gmail.com",  label: "Email"    },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection(["home", "projects", "skills", "contact"]);

  return (
    <>
      {/* ── Desktop sidebar ── */}
      <aside className="hidden md:flex fixed top-0 left-0 h-screen w-36 lg:w-44 flex-col px-7 py-10 z-40 border-r border-border">
        <nav className="flex flex-col gap-5">
          {NAV_ITEMS.map(({ label, href }) => {
            const sectionKey = href.replace("#", "") || "home";
            const isActive =
              active === sectionKey || (sectionKey === "home" && active === "");
            return (
              <a
                key={label}
                href={href}
                className={`glitch font-body text-[11px] tracking-[0.18em] uppercase transition-colors duration-200 group flex flex-col gap-1 ${
                  isActive ? "text-text" : "text-muted hover:text-text"
                }`}
              >
                {label}
                <span
                  className={`h-px bg-text transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        <div className="flex-1" />

        <div className="flex flex-col gap-5 mb-6">
          {SOCIALS.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="text-muted hover:text-text transition-colors duration-200"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>

        <div className="mb-4">
          <ThemeToggle />
        </div>

        <p className="font-mono text-[9px] text-muted leading-relaxed">
          © Gio Dalaoyan
        </p>
      </aside>

      {/* ── Mobile top bar ── */}
      <div className="md:hidden fixed top-0 inset-x-0 z-50 flex justify-between items-center px-6 py-3 bg-bg/80 backdrop-blur-md border-b border-border">
        <span className="font-body text-xs tracking-[0.18em] uppercase text-text">
          gio.dev
        </span>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="text-muted hover:text-text transition-colors p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
          >
            <Menu size={20} />
          </button>
        </div>
      </div>

      {/* ── Mobile full-screen menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 z-[60] bg-bg flex flex-col justify-center items-center gap-10"
          >
            <button
              className="absolute top-5 right-6 text-muted hover:text-text transition-colors p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={22} />
            </button>

            {NAV_ITEMS.map(({ label, href }, i) => (
              <motion.a
                key={label}
                href={href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="font-body font-[100] text-4xl tracking-[0.12em] uppercase text-text hover:text-muted transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </motion.a>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.32, duration: 0.4 }}
              className="flex gap-6 mt-4"
            >
              {SOCIALS.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-muted hover:text-text transition-colors p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
                >
                  <Icon size={18} />
                </a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
