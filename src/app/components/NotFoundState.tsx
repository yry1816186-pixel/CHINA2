import { ArrowLeft, Compass } from "lucide-react";
import { Link } from "react-router";
import usePageMeta from "../hooks/usePageMeta";

interface NotFoundStateProps {
  title?: string;
  description?: string;
  actionLabel?: string;
  to?: string;
  eyebrow?: string;
}

export default function NotFoundState({
  title = "页面未找到",
  description = "当前访问的页面不存在，或已经被迁移到新的内容结构中。你可以先返回首页，从专题总览重新进入。",
  actionLabel = "返回首页",
  to = "/",
  eyebrow = "404",
}: NotFoundStateProps) {
  usePageMeta({
    title,
    description,
  });

  return (
    <div
      id="main-content"
      tabIndex={-1}
      role="main"
      className="flex min-h-screen items-center justify-center bg-[var(--color-bg)] px-6"
    >
      <div className="max-w-xl rounded-[2rem] border border-white/10 bg-[rgba(10,16,17,0.88)] p-8 text-center shadow-[var(--shadow-panel-strong)]">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[var(--color-gold-soft)]/30 bg-[var(--color-panel-warm)] text-[var(--color-gold-soft)]">
          <Compass size={28} />
        </div>
        <p className="mt-6 text-xs uppercase tracking-[0.3em] text-[var(--color-gold-soft)]">
          {eyebrow}
        </p>
        <h1 className="mt-4 text-3xl tracking-[0.12em] text-[var(--color-ink-contrast)]">
          {title}
        </h1>
        <p className="mt-4 text-base leading-8 text-[var(--color-ink-muted)]">{description}</p>
        <Link
          to={to}
          className="mt-8 inline-flex items-center gap-3 rounded-full bg-[var(--color-gold-soft)] px-6 py-3 text-sm tracking-[0.16em] text-[var(--color-bg)] transition hover:brightness-105"
        >
          <ArrowLeft size={16} />
          {actionLabel}
        </Link>
      </div>
    </div>
  );
}
