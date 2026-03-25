import { LoaderCircle, ScrollText } from "lucide-react";

export default function RouteLoadingScreen() {
  return (
    <div
      id="main-content"
      tabIndex={-1}
      className="flex min-h-screen items-center justify-center bg-[var(--color-bg)] px-6"
      role="status"
      aria-live="polite"
    >
      <div className="w-full max-w-xl rounded-[2rem] border border-white/10 bg-[rgba(10,16,17,0.82)] p-8 shadow-[var(--shadow-panel-strong)] backdrop-blur-xl">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[var(--color-gold-soft)]/25 bg-[var(--color-panel-warm)] text-[var(--color-gold-soft)]">
            <LoaderCircle size={24} className="animate-spin" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-gold-soft)]">
              Loading Route
            </p>
            <h1 className="mt-2 text-2xl tracking-[0.1em] text-[var(--color-ink-contrast)]">
              正在展开建筑卷轴
            </h1>
          </div>
        </div>

        <p className="mt-6 text-sm leading-8 text-[var(--color-ink-muted)]">
          页面内容、图形模块与叙事章节正在加载，请稍候片刻。
        </p>

        <div className="mt-6 grid gap-3">
          {[0, 1, 2].map((item) => (
            <div
              key={item}
              className="h-14 animate-pulse rounded-[1.25rem] border border-white/8 bg-white/4"
            />
          ))}
        </div>

        <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-white/10 px-4 py-2 text-xs tracking-[0.2em] text-[var(--color-ink-soft)]">
          <ScrollText size={14} />
          正在准备专题阅读体验
        </div>
      </div>
    </div>
  );
}
