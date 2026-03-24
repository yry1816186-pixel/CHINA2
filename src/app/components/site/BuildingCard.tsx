import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, CheckCircle2, MapPin } from "lucide-react";
import { categoryLabels, type BuildingData } from "../../types";
import MonumentIllustration from "./MonumentIllustration";

interface BuildingCardProps {
  building: BuildingData;
  visited: boolean;
  sealed: boolean;
}

export default function BuildingCard({ building, visited, sealed }: BuildingCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="group h-full"
    >
      <Link
        to={`/building/${building.id}`}
        className="relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(216,186,105,0.16),transparent_40%),rgba(10,16,17,0.92)] p-6 shadow-[0_20px_70px_rgba(0,0,0,0.24)] transition duration-300 hover:-translate-y-1 hover:border-[var(--color-gold-soft)]/40"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="rounded-full border border-white/12 px-3 py-1 text-[11px] tracking-[0.24em] text-[var(--color-gold-soft)]">
              {categoryLabels[building.category]}
            </span>
            <p className="mt-4 text-2xl tracking-[0.12em] text-[var(--color-ink-contrast)]">
              {building.name}
            </p>
            <p className="mt-2 text-sm uppercase tracking-[0.22em] text-[var(--color-ink-soft)]">
              {building.englishName}
            </p>
          </div>
          {sealed && (
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-accent)]/35 bg-[var(--color-accent)]/10 px-3 py-1 text-xs tracking-[0.18em] text-[var(--color-accent)]">
              <CheckCircle2 size={14} />
              已藏印
            </span>
          )}
        </div>

        <MonumentIllustration
          kind={building.illustration}
          palette={building.palette}
          className="mt-6 h-48 w-full"
        />

        <p className="mt-4 text-sm leading-7 text-[var(--color-ink-muted)]">{building.tagline}</p>

        <div className="mt-5 flex items-center gap-2 text-xs tracking-[0.18em] text-[var(--color-ink-soft)]">
          <MapPin size={14} />
          <span>{building.location}</span>
        </div>

        <div className="mt-6 grid gap-3 md:grid-cols-3">
          {building.metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-2xl border border-white/8 bg-white/4 px-4 py-3"
            >
              <p className="text-[11px] tracking-[0.2em] text-[var(--color-ink-soft)]">
                {metric.label}
              </p>
              <p className="mt-2 text-sm font-medium tracking-[0.08em] text-[var(--color-ink-contrast)]">
                {metric.value}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-white/8 pt-5 text-sm text-[var(--color-ink-soft)]">
          <span>{visited ? "已浏览该案例" : "首次进入该案例"}</span>
          <span className="inline-flex items-center gap-2 tracking-[0.14em] text-[var(--color-gold-soft)]">
            进入专题
            <ArrowRight size={16} className="transition duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </motion.article>
  );
}
