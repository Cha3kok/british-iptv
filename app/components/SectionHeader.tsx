type Props = {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  className?: string;
};

export default function SectionHeader({ eyebrow, title, subtitle, className = "" }: Props) {
  return (
    <div className={`reveal text-center mb-16 ${className}`}>
      <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-300">
        <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
        {eyebrow}
      </span>
      <h2 className="mt-5 text-4xl sm:text-5xl font-bold text-white">{title}</h2>
      {subtitle && <p className="mt-4 text-zinc-400 text-lg max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
}
