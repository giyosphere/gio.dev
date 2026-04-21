import { motion } from "framer-motion";
import {
  SiReact, SiJavascript, SiHtml5, SiTailwindcss,
  SiVite, SiFigma, SiGit, SiGithub, SiNpm,
  SiVercel, SiFramer, SiNodedotjs, SiPostman,
} from "react-icons/si";
import Reveal from "./Reveal.jsx";
import { toolsRow1, toolsRow2 } from "@/data/skills.js";

const ICON_MAP = {
  react:      { Icon: SiReact,            color: "#61DAFB" },
  javascript: { Icon: SiJavascript,       color: "#F7DF1E" },
  html5:      { Icon: SiHtml5,            color: "#E34F26" },
  tailwind:   { Icon: SiTailwindcss,      color: "#38BDF8" },
  vite:       { Icon: SiVite,             color: "#646CFF" },
  figma:      { Icon: SiFigma,            color: "#F24E1E" },
  git:        { Icon: SiGit,              color: "#F05032" },
  github:     { Icon: SiGithub,           color: "#e4e4e4" },
  npm:        { Icon: SiNpm,              color: "#CB3837" },
  vercel:     { Icon: SiVercel,           color: "#e4e4e4" },
  framer:     { Icon: SiFramer,           color: "#0055FF" },
  nodejs:     { Icon: SiNodedotjs,        color: "#539E43" },
  postman:    { Icon: SiPostman,          color: "#FF6C37" },
};

function ToolCard({ name, iconKey }) {
  const entry = ICON_MAP[iconKey];
  if (!entry) return null;
  const { Icon, color } = entry;

  return (
    <div className="flex items-center gap-3 px-5 py-3 rounded-none border border-border hover:bg-surface transition-all duration-200 group cursor-default select-none shrink-0">
      <Icon size={20} style={{ color }} className="shrink-0" />
      <span className="glitch font-mono text-xs text-muted group-hover:text-text transition-colors whitespace-nowrap tracking-wide">
        {name}
      </span>
    </div>
  );
}

function MarqueeRow({ tools, direction = "left", duration = 32 }) {
  const doubled = [...tools, ...tools];
  const animate =
    direction === "left"
      ? { x: ["0%", "-50%"] }
      : { x: ["-50%", "0%"] };

  return (
    <div className="overflow-hidden marquee-fade">
      <motion.div
        className="flex gap-0 w-max py-1"
        animate={animate}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      >
        {doubled.map((tool, i) => (
          <ToolCard key={`${tool.key}-${i}`} name={tool.name} iconKey={tool.key} />
        ))}
      </motion.div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 border-b border-border overflow-hidden">
      <div className="px-8 md:px-14 lg:px-20 mb-14">
        <Reveal>
          <p className="glitch font-body text-[11px] tracking-[0.22em] uppercase text-muted mb-8">
            Stack
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="glitch font-body font-[200] text-3xl md:text-4xl text-text tracking-wide">
            Tools I work with
          </h2>
        </Reveal>
      </div>

      <Reveal delay={0.2} direction="none">
        <div className="flex flex-col gap-0">
          <MarqueeRow tools={toolsRow1} direction="left"  duration={30} />
          <MarqueeRow tools={toolsRow2} direction="right" duration={36} />
        </div>
      </Reveal>
    </section>
  );
}
