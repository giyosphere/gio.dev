export default function Tag({ label, variant = "default" }) {
  return (
    <span
      className={`inline-block text-xs font-mono px-3 py-1 rounded-full border transition-colors duration-200 ${
        variant === "accent"
          ? "text-accent border-accent/40 bg-accent/10"
          : "text-muted border-border bg-surface hover:border-accent/30 hover:text-text"
      }`}
    >
      {label}
    </span>
  );
}
