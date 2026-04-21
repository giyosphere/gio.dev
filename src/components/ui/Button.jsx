const variants = {
  primary: "bg-text text-bg hover:opacity-80 active:scale-[0.97]",
  ghost:   "bg-transparent text-text border border-border hover:bg-surface active:scale-[0.97]",
  outline: "bg-transparent text-text border border-border hover:bg-text hover:text-bg active:scale-[0.97]",
};

const base =
  "inline-flex items-center gap-2 px-5 py-2.5 font-body text-xs tracking-[0.1em] uppercase transition-all duration-200 min-h-[40px] cursor-pointer select-none";

export default function Button({ children, href, onClick, variant = "primary", className = "", external = false }) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return external ? (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    ) : (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
