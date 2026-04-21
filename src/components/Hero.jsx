import { motion } from "framer-motion";

const ABOUT_PARAGRAPHS = [
  "I'm a frontend developer focused on building fast, beautiful, and accessible web experiences. I care deeply about the details — from smooth animations to pixel-perfect layouts.",
  "My main focus is web development and UI design. I enjoy exploring new technologies and experimenting with creative ideas.",
  "Outside of programming, I'm constantly learning new tools and pushing the limits of what's possible on the web.",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row border-b border-border"
    >
      {/* ── Left: Name block ─────────────────────────────────── */}
      <div className="flex-1 flex flex-col justify-between px-8 md:px-14 lg:px-20 pt-28 md:pt-0 md:justify-center pb-10 border-b md:border-b-0 md:border-r border-border">
        <div>
          {/* Big name */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="glitch font-body font-[100] text-[13.5vw] md:text-[9.5vw] leading-[0.92] tracking-[0.02em] uppercase text-text select-none"
          >
            Gio
            <br />
            Dalaoyan
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="glitch font-body font-[200] text-muted text-base md:text-lg tracking-[0.06em] mt-5"
          >
            Frontend Developer / Designer
          </motion.p>
        </div>

        {/* Email at bottom-left */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 md:mt-0"
        >
          <p className="font-body text-muted text-xs tracking-wide leading-relaxed">
            For business inquiries, email me at
          </p>
          <a
            href="mailto:giodalaoyan@gmail.com"
            className="glitch font-body text-text text-xs tracking-wide hover:text-muted transition-colors duration-200"
          >
            giodalaoyan@gmail.com
          </a>
        </motion.div>
      </div>

      {/* ── Right: About panel ───────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="w-full md:w-[340px] lg:w-[400px] shrink-0 flex flex-col justify-center px-8 md:px-10 lg:px-14 py-14 md:py-0"
      >
        {/* Heading with divider */}
        <div className="border-b border-border pb-4 mb-8">
          <span className="font-body text-[11px] tracking-[0.22em] uppercase text-text">
            About Me
          </span>
        </div>

        {/* Bio paragraphs */}
        <div className="flex flex-col gap-5">
          {ABOUT_PARAGRAPHS.map((para, i) => (
            <p
              key={i}
              className="font-body text-muted text-sm leading-[1.8] font-[300]"
            >
              {para}
            </p>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
