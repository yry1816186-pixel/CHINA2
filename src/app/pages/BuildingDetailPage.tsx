import { useEffect, useMemo, useState, type ReactNode } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  BookMarked,
  CheckCircle2,
  ExternalLink,
  MapPin,
  ScrollText,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Link, useParams } from "react-router";
import ModuleVisualizer from "../components/site/ModuleVisualizer";
import MonumentIllustration from "../components/site/MonumentIllustration";
import { buildingsById, buildingsData } from "../data/buildings";
import { useProgress } from "../context/ProgressContext";
import { getModuleProgressKey, moduleLabels, type ModuleId } from "../types";

export default function BuildingDetailPage() {
  const { id } = useParams<{ id: string }>();
  const building = (id && buildingsById[id]) || null;
  const {
    progress,
    visitBuilding,
    completeModule,
    earnSeal,
    hasCompletedModule,
    hasEarnedSeal,
    getBuildingProgress,
  } = useProgress();

  const [activeModuleId, setActiveModuleId] = useState<ModuleId>("axis");
  const [activeStep, setActiveStep] = useState(0);
  const { scrollYProgress } = useScroll();
  const progressScale = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    mass: 0.25,
  });

  useEffect(() => {
    if (building && building.modules.length > 0) {
      visitBuilding(building.id);
      setActiveModuleId(building.modules[0].id);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [building, visitBuilding]);

  const activeModule = useMemo(() => {
    if (!building) {
      return null;
    }

    return building.modules.find((module) => module.id === activeModuleId) ?? building.modules[0];
  }, [activeModuleId, building]);

  useEffect(() => {
    setActiveStep(0);
  }, [activeModuleId]);

  if (!building || !activeModule) {
    return <NotFoundState />;
  }

  const currentStep = activeModule.steps[activeStep] ?? activeModule.steps[0];
  const moduleKey = getModuleProgressKey(building.id, activeModule.id);
  const isModuleDone = hasCompletedModule(moduleKey);
  const isBuildingDone = hasEarnedSeal(building.id);
  const buildingProgress = getBuildingProgress(building.id, building.modules.length);

  const currentIndex = buildingsData.findIndex((candidate) => candidate.id === building.id);
  const previousBuilding = currentIndex > 0 ? buildingsData[currentIndex - 1] : null;
  const nextBuilding = currentIndex < buildingsData.length - 1 ? buildingsData[currentIndex + 1] : null;

  const relatedCases = buildingsData.filter(
    (candidate) => candidate.id !== building.id && candidate.category === building.category,
  );

  const handleCompleteModule = () => {
    if (isModuleDone) {
      return;
    }

    const nextCompleted = new Set(progress.completedModules);
    nextCompleted.add(moduleKey);
    completeModule(moduleKey);

    const isAllDone = building.modules.every((module) =>
      nextCompleted.has(getModuleProgressKey(building.id, module.id)),
    );

    if (isAllDone && !isBuildingDone) {
      earnSeal({
        id: building.id,
        name: `${building.name}专题藏印`,
        description: `已完成 ${building.name} 的全部主题模块浏览与记录。`,
      });
    }
  };

  return (
    <div className="min-h-screen bg-[var(--color-bg)] pb-20">
      <motion.div
        style={{ scaleX: progressScale }}
        className="fixed left-0 right-0 top-0 z-50 h-[3px] origin-left bg-[linear-gradient(90deg,var(--color-gold-soft),var(--color-accent),var(--color-sky))]"
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(216,186,105,0.14),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(104,156,183,0.12),transparent_28%)]" />

      <header className="sticky top-0 z-40 border-b border-white/8 bg-[rgba(10,16,17,0.82)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 md:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-3 text-sm tracking-[0.16em] text-[var(--color-ink-contrast)] transition hover:text-[var(--color-gold-soft)]"
          >
            <ArrowLeft size={16} />
            返回专题总览
          </Link>

          <div className="text-right">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-gold-soft)]">
              {moduleLabels[activeModule.id]}
            </p>
            <p className="mt-1 text-sm tracking-[0.14em] text-[var(--color-ink-soft)]">
              {isBuildingDone ? "专题已完成" : "专题进行中"}
            </p>
          </div>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-7xl px-6 pt-8 md:px-8 md:pt-10">
        <section className="grid gap-8 xl:grid-cols-[1.04fr_0.96fr]">
          <div className="rounded-[2.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(216,186,105,0.12),rgba(255,255,255,0.03))] p-8 shadow-[var(--shadow-panel-strong)]">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/4 px-4 py-2 text-xs tracking-[0.24em] text-[var(--color-gold-soft)]">
                <BookMarked size={14} />
                {building.englishName}
              </span>
              <span className="rounded-full border border-white/10 px-4 py-2 text-xs tracking-[0.18em] text-[var(--color-ink-soft)]">
                {building.dynasty}
              </span>
            </div>

            <h1 className="mt-7 text-4xl tracking-[0.12em] text-[var(--color-ink-contrast)] md:text-6xl">
              {building.name}
            </h1>
            <p className="mt-4 max-w-3xl text-xl leading-9 text-[var(--color-ink-muted)]">
              {building.tagline}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm tracking-[0.14em] text-[var(--color-ink-soft)]">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2">
                <MapPin size={14} />
                {building.location}
              </span>
              {isBuildingDone && (
                <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/10 px-4 py-2 text-[var(--color-accent)]">
                  <CheckCircle2 size={14} />
                  已获得专题藏印
                </span>
              )}
            </div>

            <p className="mt-8 text-base leading-8 text-[var(--color-ink-muted)]">
              {building.overview}
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {building.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-[1.5rem] border border-white/8 bg-black/12 px-5 py-4"
                >
                  <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-soft)]">
                    {metric.label}
                  </p>
                  <p className="mt-2 text-sm tracking-[0.12em] text-[var(--color-ink-contrast)]">
                    {metric.value}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-[var(--color-ink-muted)]">
                    {metric.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-[2.6rem] border border-white/10 bg-[rgba(255,255,255,0.04)] p-6 shadow-[var(--shadow-panel)]">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-gold-soft)]">
                  Spatial Stage
                </p>
                <p className="mt-2 text-sm leading-7 text-[var(--color-ink-soft)]">
                  当前阅读围绕建筑轮廓、结构关系和叙事节点同步展开。
                </p>
              </div>
              <span className="rounded-full border border-white/10 bg-white/4 px-3 py-1 text-xs tracking-[0.18em] text-[var(--color-ink-soft)]">
                {buildingProgress.completed}/{buildingProgress.total}
              </span>
            </div>

            <div className="mt-6 rounded-[2rem] border border-white/8 bg-[rgba(255,255,255,0.03)] p-5">
              <MonumentIllustration
                kind={building.illustration}
                palette={building.palette}
                className="h-[24rem] w-full"
              />
            </div>

            <div className="mt-6 rounded-[1.8rem] border border-white/8 bg-black/14 px-5 py-5">
              <div className="flex items-center justify-between gap-4">
                <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-gold-soft)]">
                  阅读进度
                </p>
                <p className="text-sm tracking-[0.16em] text-[var(--color-ink-soft)]">
                  {Math.round(buildingProgress.ratio * 100)}%
                </p>
              </div>
              <div className="mt-4 h-2 rounded-full bg-white/8">
                <div
                  className="h-full rounded-full bg-[linear-gradient(90deg,var(--color-gold-soft),var(--color-accent))]"
                  style={{ width: `${buildingProgress.ratio * 100}%` }}
                />
              </div>
              <div className="mt-5 grid gap-3 md:grid-cols-2">
                <div className="rounded-[1.2rem] border border-white/8 bg-white/4 px-4 py-4">
                  <p className="text-xs tracking-[0.18em] text-[var(--color-ink-soft)]">当前模块</p>
                  <p className="mt-2 text-base tracking-[0.1em] text-[var(--color-ink-contrast)]">
                    {activeModule.title}
                  </p>
                </div>
                <div className="rounded-[1.2rem] border border-white/8 bg-white/4 px-4 py-4">
                  <p className="text-xs tracking-[0.18em] text-[var(--color-ink-soft)]">当前步骤</p>
                  <p className="mt-2 text-base tracking-[0.1em] text-[var(--color-ink-contrast)]">
                    {currentStep.title}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-10 grid gap-8 xl:grid-cols-[300px_minmax(0,1fr)]">
          <aside className="space-y-5 xl:sticky xl:top-28 xl:h-fit">
            <div className="rounded-[2rem] border border-white/10 bg-[rgba(255,255,255,0.04)] p-5 shadow-[var(--shadow-panel)]">
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[var(--color-gold-soft)]">
                <ScrollText size={14} />
                章节导航
              </div>
              <div className="mt-5 space-y-3">
                {building.modules.map((module, index) => {
                  const currentModuleKey = getModuleProgressKey(building.id, module.id);
                  const moduleDone = hasCompletedModule(currentModuleKey);
                  const isActive = module.id === activeModule.id;

                  return (
                    <button
                      key={module.id}
                      type="button"
                      onClick={() => setActiveModuleId(module.id)}
                      className={`w-full rounded-[1.5rem] border px-4 py-4 text-left transition ${
                        isActive
                          ? "border-[var(--color-gold-soft)] bg-[rgba(216,186,105,0.12)]"
                          : "border-white/8 bg-black/12 hover:bg-white/4"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-xs tracking-[0.22em] text-[var(--color-gold-soft)]">
                            0{index + 1}
                          </p>
                          <p className="mt-2 text-sm tracking-[0.12em] text-[var(--color-ink-contrast)]">
                            {module.title}
                          </p>
                          <p className="mt-2 text-sm leading-7 text-[var(--color-ink-muted)]">
                            {module.strapline}
                          </p>
                        </div>
                        {moduleDone && (
                          <CheckCircle2 size={17} className="text-[var(--color-accent)]" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-[rgba(255,255,255,0.04)] p-5">
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[var(--color-gold-soft)]">
                <ShieldCheck size={14} />
                当前阅读焦点
              </div>
              <p className="mt-4 text-base tracking-[0.1em] text-[var(--color-ink-contrast)]">
                {currentStep.title}
              </p>
              <p className="mt-3 text-sm leading-7 text-[var(--color-ink-muted)]">
                {currentStep.detail}
              </p>
              {currentStep.emphasis && (
                <p className="mt-3 rounded-[1.2rem] border border-[var(--color-gold-soft)]/18 bg-[var(--color-panel-warm)] px-4 py-4 text-sm leading-7 text-[var(--color-ink-contrast)]">
                  {currentStep.emphasis}
                </p>
              )}
            </div>
          </aside>

          <div className="space-y-8">
            <section className="rounded-[2.2rem] border border-white/10 bg-[rgba(255,255,255,0.04)] p-6 shadow-[var(--shadow-panel)]">
              <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-gold-soft)]">
                    Current Chapter
                  </p>
                  <h2 className="mt-3 text-3xl tracking-[0.12em] text-[var(--color-ink-contrast)]">
                    {activeModule.title}
                  </h2>
                  <p className="mt-3 max-w-3xl text-base leading-8 text-[var(--color-ink-muted)]">
                    {activeModule.summary}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleCompleteModule}
                  className={`inline-flex items-center justify-center gap-3 rounded-full px-5 py-3 text-sm tracking-[0.16em] transition ${
                    isModuleDone
                      ? "border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/10 text-[var(--color-accent)]"
                      : "bg-[var(--color-gold-soft)] text-[var(--color-bg)] hover:brightness-105"
                  }`}
                >
                  <CheckCircle2 size={16} />
                  {isModuleDone ? "本模块已记录" : "记录本模块"}
                </button>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {activeModule.takeaways.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/8 bg-black/12 px-4 py-2 text-sm leading-7 text-[var(--color-ink-muted)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </section>

            <section className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr]">
              <div className="space-y-6">
                <div className="rounded-[2rem] border border-white/10 bg-[rgba(255,255,255,0.04)] p-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-gold-soft)]">
                    核心步骤
                  </p>
                  <h3 className="mt-3 text-2xl tracking-[0.1em] text-[var(--color-ink-contrast)]">
                    按顺序拆解这一章的理解路径
                  </h3>

                  <div className="mt-6 space-y-4">
                    {activeModule.steps.map((step, index) => {
                      const isActive = index === activeStep;
                      return (
                        <button
                          key={step.title}
                          type="button"
                          onClick={() => setActiveStep(index)}
                          className={`w-full rounded-[1.5rem] border px-5 py-5 text-left transition ${
                            isActive
                              ? "border-[var(--color-gold-soft)] bg-[rgba(216,186,105,0.12)]"
                              : "border-white/8 bg-black/12 hover:bg-white/4"
                          }`}
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <p className="text-sm tracking-[0.18em] text-[var(--color-gold-soft)]">
                                {step.title}
                              </p>
                              <p className="mt-2 text-sm leading-7 text-[var(--color-ink-muted)]">
                                {step.detail}
                              </p>
                              {step.emphasis && (
                                <p className="mt-3 text-sm leading-7 text-[var(--color-ink-contrast)]">
                                  {step.emphasis}
                                </p>
                              )}
                            </div>
                            <span className="rounded-full border border-white/10 px-3 py-1 text-xs tracking-[0.18em] text-[var(--color-ink-soft)]">
                              0{index + 1}
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="rounded-[2rem] border border-white/10 bg-[rgba(255,255,255,0.04)] p-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-gold-soft)]">
                    关键事实
                  </p>
                  <div className="mt-5 grid gap-4 md:grid-cols-2">
                    {activeModule.facts.map((fact) => (
                      <div
                        key={fact.label}
                        className="rounded-[1.5rem] border border-white/8 bg-black/12 px-5 py-4"
                      >
                        <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-soft)]">
                          {fact.label}
                        </p>
                        <p className="mt-2 text-base tracking-[0.1em] text-[var(--color-ink-contrast)]">
                          {fact.value}
                        </p>
                        <p className="mt-2 text-sm leading-7 text-[var(--color-ink-muted)]">
                          {fact.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6 lg:sticky lg:top-28 lg:h-fit">
                <ModuleVisualizer
                  module={activeModule}
                  activeStep={activeStep}
                  onStepSelect={setActiveStep}
                />

                <div className="rounded-[2rem] border border-white/10 bg-[rgba(255,255,255,0.04)] p-6">
                  <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[var(--color-gold-soft)]">
                    <Sparkles size={14} />
                    当前步骤摘要
                  </div>
                  <p className="mt-4 text-2xl tracking-[0.1em] text-[var(--color-ink-contrast)]">
                    {currentStep.title}
                  </p>
                  <p className="mt-3 text-sm leading-8 text-[var(--color-ink-muted)]">
                    {currentStep.detail}
                  </p>
                  {currentStep.emphasis && (
                    <p className="mt-4 rounded-[1.4rem] border border-[var(--color-gold-soft)]/18 bg-[var(--color-panel-warm)] px-4 py-4 text-sm leading-7 text-[var(--color-ink-contrast)]">
                      {currentStep.emphasis}
                    </p>
                  )}
                </div>
              </div>
            </section>

            <section className="rounded-[2rem] border border-white/10 bg-[rgba(255,255,255,0.04)] p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-gold-soft)]">
                这个案例值得记住什么
              </p>
              <div className="mt-5 grid gap-4 lg:grid-cols-3">
                {building.significance.map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.5rem] border border-white/8 bg-black/12 px-5 py-4 text-sm leading-7 text-[var(--color-ink-muted)]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </section>

            <section className="grid gap-8 lg:grid-cols-[0.94fr_1.06fr]">
              <div className="rounded-[2rem] border border-white/10 bg-[rgba(255,255,255,0.04)] p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-gold-soft)]">
                  历史节点
                </p>
                <div className="mt-5 space-y-4">
                  {building.timeline.map((item) => (
                    <div
                      key={`${item.era}-${item.title}`}
                      className="rounded-[1.4rem] border border-white/8 bg-black/12 px-5 py-4"
                    >
                      <div className="flex items-baseline gap-4">
                        <span className="text-sm tracking-[0.22em] text-[var(--color-gold-soft)]">
                          {item.era}
                        </span>
                        <h3 className="text-base tracking-[0.1em] text-[var(--color-ink-contrast)]">
                          {item.title}
                        </h3>
                      </div>
                      <p className="mt-2 text-sm leading-7 text-[var(--color-ink-muted)]">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-[rgba(255,255,255,0.04)] p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-gold-soft)]">
                  史实依据
                </p>
                <div className="mt-5 space-y-3">
                  {building.sources.map((source) => (
                    <a
                      key={source.url}
                      href={source.url}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between rounded-[1.4rem] border border-white/8 bg-black/12 px-5 py-4 text-sm tracking-[0.12em] text-[var(--color-ink-contrast)] transition hover:border-[var(--color-gold-soft)]/35 hover:bg-white/4"
                    >
                      <span>{source.label}</span>
                      <ExternalLink size={16} className="text-[var(--color-gold-soft)]" />
                    </a>
                  ))}
                </div>
              </div>
            </section>

            {(relatedCases.length > 0 || previousBuilding || nextBuilding) && (
              <section className="grid gap-8 lg:grid-cols-[1fr_auto]">
                <div className="rounded-[2rem] border border-white/10 bg-[rgba(255,255,255,0.04)] p-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-gold-soft)]">
                    同类型延伸阅读
                  </p>
                  <div className="mt-5 grid gap-4 md:grid-cols-2">
                    {relatedCases.map((caseItem) => (
                      <Link
                        key={caseItem.id}
                        to={`/building/${caseItem.id}`}
                        className="rounded-[1.4rem] border border-white/8 bg-black/12 px-5 py-4 text-sm leading-7 text-[var(--color-ink-muted)] transition hover:border-[var(--color-gold-soft)]/35 hover:bg-white/4"
                      >
                        <p className="text-base tracking-[0.12em] text-[var(--color-ink-contrast)]">
                          {caseItem.name}
                        </p>
                        <p className="mt-2">{caseItem.tagline}</p>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1 lg:self-start">
                  {previousBuilding && (
                    <StoryJumpCard
                      direction="上一例"
                      title={previousBuilding.name}
                      subtitle={previousBuilding.tagline}
                      to={`/building/${previousBuilding.id}`}
                      icon={<ArrowLeft size={16} />}
                    />
                  )}
                  {nextBuilding && (
                    <StoryJumpCard
                      direction="下一例"
                      title={nextBuilding.name}
                      subtitle={nextBuilding.tagline}
                      to={`/building/${nextBuilding.id}`}
                      icon={<ArrowRight size={16} />}
                    />
                  )}
                </div>
              </section>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

function StoryJumpCard({
  direction,
  title,
  subtitle,
  to,
  icon,
}: {
  direction: string;
  title: string;
  subtitle: string;
  to: string;
  icon: ReactNode;
}) {
  return (
    <Link
      to={to}
      className="rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(216,186,105,0.1),rgba(255,255,255,0.03))] px-5 py-5 text-sm leading-7 text-[var(--color-ink-muted)] transition hover:border-[var(--color-gold-soft)]/35 hover:bg-[rgba(216,186,105,0.08)]"
    >
      <div className="flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-[var(--color-gold-soft)]">
        {icon}
        {direction}
      </div>
      <p className="mt-3 text-xl tracking-[0.1em] text-[var(--color-ink-contrast)]">{title}</p>
      <p className="mt-2">{subtitle}</p>
    </Link>
  );
}

function NotFoundState() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--color-bg)] px-6">
      <div className="max-w-lg rounded-[2rem] border border-white/10 bg-white/4 p-8 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-gold-soft)]">404</p>
        <h1 className="mt-4 text-3xl tracking-[0.12em] text-[var(--color-ink-contrast)]">
          未找到对应建筑专题
        </h1>
        <p className="mt-4 text-base leading-8 text-[var(--color-ink-muted)]">
          当前链接对应的案例不存在，或已被调整到新的内容结构中。
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-3 rounded-full bg-[var(--color-gold-soft)] px-6 py-3 text-sm tracking-[0.16em] text-[var(--color-bg)]"
        >
          <ArrowLeft size={16} />
          返回首页
        </Link>
      </div>
    </div>
  );
}
