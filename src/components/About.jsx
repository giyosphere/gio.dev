import Reveal from "./Reveal.jsx";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div>
          <Reveal>
            <p className="font-mono text-accent text-xs tracking-[0.2em] uppercase mb-4">
              About Me
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl md:text-5xl text-text leading-tight mb-6">
              I build things
              <br />
              <span className="text-accent italic">for the web.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="font-body text-muted leading-relaxed mb-4">
              {/* TODO: Replace with your real bio */}
              I&apos;m a frontend developer focused on creating fast, beautiful,
              and accessible web experiences. I care deeply about the details —
              from smooth animations to pixel-perfect layouts.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="font-body text-muted leading-relaxed">
              When I&apos;m not coding, I&apos;m probably sketching UI concepts,
              exploring new design systems, or learning something that has no
              practical purpose yet.
            </p>
          </Reveal>
        </div>

        {/* Photo placeholder */}
        <Reveal delay={0.2} direction="left">
          <div className="aspect-square rounded-2xl bg-surface border border-border flex items-center justify-center">
            {/* TODO: Replace with <img src="/photo.jpg" alt="Gio" className="w-full h-full object-cover rounded-2xl" /> */}
            <span className="font-mono text-muted text-sm">photo.jpg</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
