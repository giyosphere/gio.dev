import { Mail } from "lucide-react";
import { SiGithub } from "react-icons/si";
import Reveal from "./Reveal.jsx";

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 px-8 md:px-14 lg:px-20 border-b border-border">
      <Reveal>
        <p className="glitch font-body text-[11px] tracking-[0.22em] uppercase text-muted mb-8">
          Contact
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <h2 className="glitch font-body font-[100] text-[8vw] md:text-[5vw] leading-[0.95] tracking-[0.02em] uppercase text-text mb-12">
          Let&apos;s work
          <br />
          together.
        </h2>
      </Reveal>

      <Reveal delay={0.2}>
        <div className="flex flex-col sm:flex-row gap-6 items-start">
          <a
            href="mailto:giodalaoyan@gmail.com"
            className="glitch flex items-center gap-3 font-body text-sm text-muted hover:text-text transition-colors duration-200 tracking-wide group"
          >
            <Mail size={15} className="shrink-0" />
            giodalaoyan@gmail.com
            <span className="h-px w-0 bg-text group-hover:w-16 transition-all duration-300" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="glitch flex items-center gap-3 font-body text-sm text-muted hover:text-text transition-colors duration-200 tracking-wide group"
          >
            <SiGithub size={15} className="shrink-0" />
            github.com/gio
            <span className="h-px w-0 bg-text group-hover:w-16 transition-all duration-300" />
          </a>
        </div>
      </Reveal>
    </section>
  );
}
