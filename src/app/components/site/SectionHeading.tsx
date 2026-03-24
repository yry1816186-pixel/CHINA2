import { motion } from "motion/react";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const isCentered = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={isCentered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}
    >
      <span className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.35em] text-[var(--color-gold-soft)]">
        <span className="h-px w-12 bg-[linear-gradient(90deg,transparent,var(--color-gold-soft))]" />
        {eyebrow}
      </span>
      <h2 className="mt-5 text-3xl font-semibold tracking-[0.08em] text-[var(--color-ink-contrast)] md:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-[var(--color-ink-muted)] md:text-lg">
        {description}
      </p>
    </motion.div>
  );
}
