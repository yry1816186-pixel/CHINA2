import { motion } from "motion/react";
import { ArrowDown, BookOpenText, Landmark, Layers3, Sparkles } from "lucide-react";
import BuildingCard from "../components/site/BuildingCard";
import MonumentIllustration from "../components/site/MonumentIllustration";
import SectionHeading from "../components/site/SectionHeading";
import {
  buildingsData,
  curationPrinciples,
  footerSourceNote,
  homeSummary,
  siteThemes,
  technologyPillars,
} from "../data/buildings";
import { useProgress } from "../context/ProgressContext";

export default function HomePage() {
  const { progress, hasVisited, hasEarnedSeal } = useProgress();

  const completedCases = buildingsData.filter((building) => hasEarnedSeal(building.id)).length;

  return (
    <div className="relative min-h-screen overflow-hidden bg-[var(--color-bg)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(216,186,105,0.18),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(104,156,183,0.14),transparent_28%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:48px_48px]" />

      <header className="sticky top-0 z-30 border-b border-white/8 bg-[rgba(10,16,17,0.82)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 md:px-8">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-gold-soft)]">
              Digital Heritage
            </p>
            <h1 className="mt-1 text-lg tracking-[0.2em] text-[var(--color-ink-contrast)]">
              中国古代建筑艺术与科技融合
            </h1>
          </div>
          <div className="hidden items-center gap-3 md:flex">
            <StatPill label="已浏览案例" value={String(progress.visitedBuildings.length)} />
            <StatPill label="已掌握模块" value={String(progress.completedModules.length)} />
            <StatPill label="已完成专题" value={String(completedCases)} />
          </div>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-7xl px-6 pb-20 pt-8 md:px-8 md:pt-14">
        <section className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 rounded-full border border-[var(--color-gold-soft)]/20 bg-[var(--color-gold-soft)]/8 px-4 py-2 text-xs uppercase tracking-[0.3em] text-[var(--color-gold-soft)]"
            >
              <Sparkles size={14} />
              全量整改升级版
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 max-w-4xl text-4xl leading-tight tracking-[0.08em] text-[var(--color-ink-contrast)] md:text-6xl"
            >
              {homeSummary.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 max-w-3xl text-lg leading-9 text-[var(--color-ink-muted)]"
            >
              {homeSummary.subtitle}
            </motion.p>

            <div className="mt-8 grid gap-3 md:max-w-2xl md:grid-cols-3">
              {homeSummary.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[1.5rem] border border-white/10 bg-white/4 px-5 py-4"
                >
                  <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--color-ink-soft)]">
                    {stat.label}
                  </p>
                  <p className="mt-3 text-xl tracking-[0.14em] text-[var(--color-ink-contrast)]">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#cases"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[var(--color-gold-soft)] px-6 py-3 text-sm tracking-[0.18em] text-[var(--color-bg)] transition hover:brightness-105"
              >
                <Landmark size={16} />
                浏览代表案例
              </a>
              <a
                href="#method"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/12 px-6 py-3 text-sm tracking-[0.18em] text-[var(--color-ink-contrast)] transition hover:border-[var(--color-gold-soft)]/40 hover:bg-white/4"
              >
                <Layers3 size={16} />
                查看技术表达路径
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(216,186,105,0.12),rgba(255,255,255,0.04))] p-6 shadow-[0_30px_100px_rgba(0,0,0,0.28)]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(216,186,105,0.16),transparent_35%)]" />
            <div className="relative z-10">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-gold-soft)]">
                    Hero Case
                  </p>
                  <h3 className="mt-2 text-2xl tracking-[0.12em] text-[var(--color-ink-contrast)]">
                    太和殿
                  </h3>
                </div>
                <span className="rounded-full border border-white/12 px-3 py-1 text-xs tracking-[0.2em] text-[var(--color-ink-soft)]">
                  以结构读礼制
                </span>
              </div>
              <MonumentIllustration
                kind="taihedian"
                palette={["#d8ba69", "#7a2f1e"]}
                className="h-[22rem] w-full"
              />
              <div className="mt-4 rounded-[1.5rem] border border-white/8 bg-black/12 px-5 py-4">
                <p className="text-sm leading-7 text-[var(--color-ink-muted)]">
                  从礼制中轴、木构等级到当代保护，这一版首页把“怎么建、为何这样建、今天怎样看见它”放进同一条浏览路径。
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="mt-20">
          <SectionHeading
            eyebrow="Narrative Themes"
            title="五条主线重新组织内容逻辑"
            description="先把叙事骨架搭准，再让视觉和交互去放大它。每条主线都能独立成立，也能在案例详情页彼此交叉印证。"
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-5">
            {siteThemes.map((theme) => (
              <div
                key={theme.title}
                className="rounded-[1.75rem] border border-white/10 bg-white/4 p-6"
              >
                <span
                  className="inline-block h-2 w-16 rounded-full"
                  style={{ background: `linear-gradient(90deg, ${theme.accent}, transparent)` }}
                />
                <h3 className="mt-5 text-xl tracking-[0.12em] text-[var(--color-ink-contrast)]">
                  {theme.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[var(--color-ink-muted)]">
                  {theme.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="cases" className="mt-20">
          <SectionHeading
            eyebrow="Featured Cases"
            title="代表性个案进入专题页深读"
            description="每个案例都拥有独立模块配置和史实叙事，不再把不同建筑类型硬套进同一套错误玩法。"
          />
          <div className="mt-10 grid gap-6 xl:grid-cols-2">
            {buildingsData.map((building) => (
              <BuildingCard
                key={building.id}
                building={building}
                visited={hasVisited(building.id)}
                sealed={hasEarnedSeal(building.id)}
              />
            ))}
          </div>
        </section>

        <section id="method" className="mt-20 grid gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <SectionHeading
              eyebrow="Execution Method"
              title="技术表达服务文化内容，而不是反过来"
              description="这次整改把“科技感”从炫技效果改成了内容放大器：先让结构、空间和保护逻辑变得可阅读，再考虑交互动效的节奏。"
            />
            <div className="mt-8 space-y-4">
              {curationPrinciples.map((principle) => (
                <div
                  key={principle}
                  className="rounded-[1.5rem] border border-white/10 bg-white/4 px-5 py-4 text-sm leading-7 text-[var(--color-ink-muted)]"
                >
                  {principle}
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-5">
            {technologyPillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
                className="rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--color-gold-soft)]/25 bg-[var(--color-gold-soft)]/10 text-[var(--color-gold-soft)]">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl tracking-[0.12em] text-[var(--color-ink-contrast)]">
                      {pillar.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[var(--color-ink-contrast)]">
                      {pillar.description}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-[var(--color-ink-muted)]">
                      {pillar.detail}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mt-20 overflow-hidden rounded-[2.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(216,186,105,0.1),rgba(255,255,255,0.02))] p-8 md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-gold-soft)]">
                Project Note
              </p>
              <h3 className="mt-3 text-3xl tracking-[0.12em] text-[var(--color-ink-contrast)]">
                这次升级解决了什么
              </h3>
              <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--color-ink-muted)]">
                旧项目同时存在构建链路损坏、内容源乱码、分类错配、模块套用错误和大量页面硬编码问题。现在首页直接由可追溯内容源驱动，详情页按建筑个案独立组织模块，项目可以稳定构建、稳定浏览，也为后续扩展新案例留出了统一接口。
              </p>
            </div>
            <div className="flex items-center gap-3 text-sm tracking-[0.2em] text-[var(--color-ink-soft)]">
              <BookOpenText size={16} />
              <span>{footerSourceNote}</span>
            </div>
          </div>
        </section>
      </main>

      <a
        href="#cases"
        className="fixed bottom-6 right-6 z-30 inline-flex items-center gap-2 rounded-full border border-white/12 bg-[rgba(10,16,17,0.8)] px-4 py-3 text-xs tracking-[0.22em] text-[var(--color-ink-contrast)] backdrop-blur-lg transition hover:border-[var(--color-gold-soft)]/40 hover:bg-[rgba(216,186,105,0.08)]"
      >
        <ArrowDown size={14} />
        下滑进入案例
      </a>
    </div>
  );
}

function StatPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-full border border-white/10 bg-white/4 px-4 py-2 text-center">
      <p className="text-[10px] uppercase tracking-[0.24em] text-[var(--color-ink-soft)]">
        {label}
      </p>
      <p className="mt-1 text-sm tracking-[0.16em] text-[var(--color-ink-contrast)]">{value}</p>
    </div>
  );
}
