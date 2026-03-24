import { motion } from "motion/react";
import { type BuildingModule } from "../../types";

interface ModuleVisualizerProps {
  module: BuildingModule;
  activeStep: number;
  onStepSelect: (index: number) => void;
}

export default function ModuleVisualizer({
  module,
  activeStep,
  onStepSelect,
}: ModuleVisualizerProps) {
  if (module.visualization === "axis") {
    return (
      <div className="relative rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(216,186,105,0.12),rgba(255,255,255,0.02))] p-8">
        <div className="absolute bottom-10 left-1/2 top-10 w-px -translate-x-1/2 bg-[linear-gradient(180deg,transparent,var(--color-gold-soft),transparent)]" />
        <div className="space-y-8">
          {module.steps.map((step, index) => {
            const isActive = index === activeStep;
            return (
              <button
                key={step.title}
                type="button"
                onClick={() => onStepSelect(index)}
                className={`relative grid w-full items-center gap-6 text-left md:grid-cols-[1fr_auto_1fr] ${
                  index % 2 === 0 ? "" : "md:[&>*:first-child]:order-3"
                }`}
              >
                <div className="rounded-2xl border border-white/10 bg-black/18 px-5 py-4">
                  <p className="text-sm tracking-[0.18em] text-[var(--color-gold-soft)]">
                    {step.title}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-[var(--color-ink-muted)]">
                    {step.detail}
                  </p>
                </div>
                <motion.div
                  animate={{
                    scale: isActive ? 1.12 : 1,
                    boxShadow: isActive
                      ? "0 0 0 10px rgba(216, 186, 105, 0.08)"
                      : "0 0 0 0 rgba(216, 186, 105, 0)",
                  }}
                  className={`mx-auto flex h-12 w-12 items-center justify-center rounded-full border ${
                    isActive
                      ? "border-[var(--color-gold-soft)] bg-[var(--color-gold-soft)] text-[var(--color-bg)]"
                      : "border-white/18 bg-[rgba(255,255,255,0.04)] text-[var(--color-ink-soft)]"
                  }`}
                >
                  {index + 1}
                </motion.div>
                <div className="hidden md:block" />
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  if (module.visualization === "layers") {
    return (
      <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-8">
        <div className="space-y-4">
          {module.steps.map((step, index) => {
            const isActive = index === activeStep;
            const width = 100 - index * 12;
            return (
              <button
                key={step.title}
                type="button"
                onClick={() => onStepSelect(index)}
                className="block w-full text-left"
              >
                <motion.div
                  animate={{
                    width: `${width}%`,
                    opacity: isActive ? 1 : 0.68,
                    x: isActive ? 12 : 0,
                  }}
                  className={`rounded-2xl border px-5 py-5 ${
                    isActive
                      ? "border-[var(--color-gold-soft)] bg-[rgba(216,186,105,0.14)]"
                      : "border-white/10 bg-[rgba(255,255,255,0.04)]"
                  }`}
                >
                  <p className="text-sm tracking-[0.18em] text-[var(--color-gold-soft)]">
                    {step.title}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-[var(--color-ink-muted)]">
                    {step.detail}
                  </p>
                </motion.div>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  if (module.visualization === "courtyard") {
    return (
      <div className="grid gap-6 rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(127,176,143,0.12),rgba(255,255,255,0.02))] p-8 lg:grid-cols-[minmax(0,1fr)_220px]">
        <div className="relative aspect-square rounded-[2rem] border border-white/8 bg-black/18 p-6">
          {module.steps.map((step, index) => {
            const inset = 18 + index * 26;
            const isActive = index === activeStep;
            return (
              <button
                key={step.title}
                type="button"
                onClick={() => onStepSelect(index)}
                className="absolute rounded-[1.5rem] border text-left"
                style={{
                  inset,
                  borderColor: isActive ? "rgba(216,186,105,0.9)" : "rgba(255,255,255,0.15)",
                  background: isActive ? "rgba(216,186,105,0.12)" : "rgba(255,255,255,0.02)",
                }}
              >
                <span className="absolute left-4 top-4 text-xs tracking-[0.18em] text-[var(--color-gold-soft)]">
                  {step.title}
                </span>
              </button>
            );
          })}
          <div className="absolute inset-[96px] flex items-center justify-center rounded-[1.4rem] border border-dashed border-white/12 text-sm tracking-[0.16em] text-[var(--color-ink-soft)]">
            中央共享空间
          </div>
        </div>
        <div className="space-y-4">
          {module.steps.map((step, index) => {
            const isActive = index === activeStep;
            return (
              <button
                key={step.title}
                type="button"
                onClick={() => onStepSelect(index)}
                className={`w-full rounded-2xl border px-4 py-4 text-left ${
                  isActive
                    ? "border-[var(--color-gold-soft)] bg-[rgba(216,186,105,0.14)]"
                    : "border-white/10 bg-white/4"
                }`}
              >
                <p className="text-sm tracking-[0.18em] text-[var(--color-gold-soft)]">
                  {step.title}
                </p>
                <p className="mt-2 text-sm leading-7 text-[var(--color-ink-muted)]">
                  {step.detail}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  if (module.visualization === "rings") {
    return (
      <div className="grid gap-6 rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(102,165,214,0.12),rgba(255,255,255,0.02))] p-8 lg:grid-cols-[260px_minmax(0,1fr)]">
        <div className="relative mx-auto flex h-64 w-64 items-center justify-center">
          {module.steps.map((step, index) => {
            const size = 220 - index * 54;
            const isActive = index === activeStep;
            return (
              <button
                key={step.title}
                type="button"
                onClick={() => onStepSelect(index)}
                className="absolute flex items-center justify-center rounded-full border text-center"
                style={{
                  width: size,
                  height: size,
                  borderColor: isActive ? "rgba(216,186,105,0.88)" : "rgba(255,255,255,0.14)",
                  background: isActive ? "rgba(216,186,105,0.12)" : "transparent",
                }}
              >
                <span className="max-w-[7rem] text-xs tracking-[0.2em] text-[var(--color-ink-contrast)]">
                  {step.title}
                </span>
              </button>
            );
          })}
        </div>
        <div className="space-y-4">
          {module.steps.map((step, index) => {
            const isActive = index === activeStep;
            return (
              <button
                key={step.title}
                type="button"
                onClick={() => onStepSelect(index)}
                className={`w-full rounded-2xl border px-4 py-4 text-left ${
                  isActive
                    ? "border-[var(--color-gold-soft)] bg-[rgba(216,186,105,0.14)]"
                    : "border-white/10 bg-white/4"
                }`}
              >
                <p className="text-sm tracking-[0.18em] text-[var(--color-gold-soft)]">
                  {step.title}
                </p>
                <p className="mt-2 text-sm leading-7 text-[var(--color-ink-muted)]">
                  {step.detail}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(208,103,77,0.12),rgba(255,255,255,0.02))] p-8">
      <div className="grid gap-4 md:grid-cols-3">
        {module.steps.map((step, index) => {
          const isActive = index === activeStep;
          return (
            <button
              key={step.title}
              type="button"
              onClick={() => onStepSelect(index)}
              className={`rounded-[1.5rem] border px-5 py-6 text-left ${
                isActive
                  ? "border-[var(--color-gold-soft)] bg-[rgba(216,186,105,0.14)]"
                  : "border-white/10 bg-white/4"
              }`}
            >
              <div className="text-xs tracking-[0.2em] text-[var(--color-gold-soft)]">
                0{index + 1}
              </div>
              <p className="mt-3 text-base tracking-[0.12em] text-[var(--color-ink-contrast)]">
                {step.title}
              </p>
              <p className="mt-3 text-sm leading-7 text-[var(--color-ink-muted)]">
                {step.detail}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
