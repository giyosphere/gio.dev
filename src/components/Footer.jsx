export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="px-8 md:px-14 lg:px-20 py-8 flex flex-col sm:flex-row justify-between items-center gap-3">
      <p className="glitch font-mono text-[10px] text-muted tracking-widest uppercase">
        © {year} Gio Dalaoyan
      </p>
      <p className="glitch font-mono text-[10px] text-muted tracking-widest uppercase">
        Built with React &amp; Tailwind CSS
      </p>
    </footer>
  );
}
