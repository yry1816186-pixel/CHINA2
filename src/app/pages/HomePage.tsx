import { motion, useScroll, useSpring, useTransform } from "motion/react";
import {
  ArrowDown,
  ArrowRight,
  BookOpenText,
  Compass,
  Landmark,
  Layers3,
  ScrollText,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router";
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
import usePageMeta from "../hooks/usePageMeta";

const sectionLinks = [
  { id: "overview", label: "总览" },
  { id: "themes", label: "主线" },
  { id: "cases", label: "案例" },
  { id: "method", label: "方法" },
];

export default function HomePage() {
  const { progress, hasVisited, hasEarnedSeal } = useProgress();
  const heroBuilding = buildingsData[0];
  usePageMeta({
    title: "中国古代建筑艺术与科技融合",
    description: homeSummary.subtitle,
  });
  const { scrollYProgress } = useScroll();
  const progressScale = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    mass: 0.25,
  });
  const heroStageY = useTransform(scrollYProgress, [0, 0.2], [0, 38]);
  const glowY = useTransform(scrollYProgress, [0, 0.24], [0, -34]);

  const completedCases = buildingsData.filter((building) => hasEarnedSeal(building.id)).length;
  const featuredBuildingNames = buildingsData.map((building) => building.name);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[var(--color-bg)]">
      <motion.div
        style={{ scaleX: progressScale }}
        className="fixed left-0 right-0 top-0 z-50 h-[3px] origin-left bg-[linear-gradient(90deg,var(--color-gold-soft),var(--color-accent),var(--color-sky))]"
      />
      <motion.div
        style={{ y: glowY }}
        className="pointer-events-none absolute inset-x-0 top-0 h-[36rem] bg-[radial-gradient(circle_at_top,rgba(216,186,105,0.14),transparent_48%)]"
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(216,186,105,0.18),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(104,156,183,0.16),transparent_28%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:48px_48px]" />

      <header className="sticky top-0 z-40 border-b border-white/8 bg-[rgba(10,16,17,0.78)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 md:px-8">
          <div>
            <p className="text-xs uppercase tracking-[0.34em] text-[var(--color-gold-soft)]">
              Digital Heritage
            </p>
            <h1 className="mt-1 text-lg tracking-[0.18em] text-[var(--color-ink-contrast)]">
              中国古代建筑艺术与科技融合
            </h1>
          </div>

          <nav className="hidden items-center gap-2 lg:flex">
            {sectionLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="rounded-full border border-white/8 px-4 py-2 text-xs tracking-[0.22em] text-[var(--color-ink-soft)] transition hover:border-[var(--color-gold-soft)]/35 hover:bg-white/4 hover:text-[var(--color-ink-contrast)]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <StatPill label="已浏览案例" value={String(progress.visitedBuildings.length)} />
            <StatPill label="已掌握模块" value={String(progress.completedModules.length)} />
            <StatPill label="已完成专题" value={String(completedCases)} />
          </div>
        </div>
      </header>

      <main
        id="main-content"
        tabIndex={-1}
        className="relative z-10 mx-auto max-w-7xl px-6 pb-24 pt-8 outline-none md:px-8 md:pt-14"
      >
        <section
          id="overview"
          className="grid items-start gap-10 lg:grid-cols-[1.04fr_0.96fr] lg:gap-12"
        >
          <div className="pt-2">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 rounded-full border border-[var(--color-gold-soft)]/20 bg-[var(--color-panel-warm)] px-4 py-2 text-xs uppercase tracking-[0.28em] text-[var(--color-gold-soft)]"
            >
              <Sparkles size={14} />
              Curated Atlas 01
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-7 max-w-4xl text-4xl leading-[1.08] tracking-[0.06em] text-[var(--color-ink-contrast)] md:text-6xl"
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

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#cases"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[var(--color-gold-soft)] px-6 py-3 text-sm tracking-[0.16em] text-[var(--color-bg)] transition hover:brightness-105"
              >
                <Landmark size={16} />
                浏览代表案例
              </a>
              <a
                href="#method"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/12 px-6 py-3 text-sm tracking-[0.16em] text-[var(--color-ink-contrast)] transition hover:border-[var(--color-gold-soft)]/40 hover:bg-white/4"
              >
                <Layers3 size={16} />
                查看方法论
              </a>
            </div>

            <div className="mt-10 grid gap-3 md:max-w-3xl md:grid-cols-3">
              {homeSummary.stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.28 + index * 0.08 }}
                  className="rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] px-5 py-5 shadow-[var(--shadow-inner)]"
                >
                  <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--color-ink-soft)]">
                    {stat.label}
                  </p>
                  <p className="mt-3 text-2xl tracking-[0.12em] text-[var(--color-ink-contrast)]">
                    {stat.value}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 rounded-[2rem] border border-white/10 bg-[rgba(255,255,255,0.04)] p-6">
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-[var(--color-gold-soft)]">
                <Compass size={14} />
                本期阅读线索
              </div>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {siteThemes.slice(0, 4).map((theme) => (
                  <div
                    key={theme.title}
                    className="rounded-[1.3rem] border border-white/8 bg-black/12 px-4 py-4"
                  >
                    <p className="text-sm tracking-[0.16em] text-[var(--color-ink-contrast)]">
                      {theme.title}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-[var(--color-ink-muted)]">
                      {theme.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <motion.div
            style={{ y: heroStageY }}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative overflow-hidden rounded-[2.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(216,186,105,0.14),rgba(255,255,255,0.03))] p-6 shadow-[var(--shadow-panel-strong)]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(216,186,105,0.18),transparent_36%)]" />
            <div className="relative z-10">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-gold-soft)]">
                    Hero Case
                  </p>
                  <h3 className="mt-2 text-3xl tracking-[0.12em] text-[var(--color-ink-contrast)]">
                    {heroBuilding.name}
                  </h3>
                  <p className="mt-2 text-sm tracking-[0.16em] text-[var(--color-ink-soft)]">
                    以礼制、结构与保护逻辑打开这部建筑史
                  </p>
                </div>
                <span className="rounded-full border border-white/12 bg-white/4 px-3 py-1 text-xs tracking-[0.18em] text-[var(--color-ink-soft)]">
                  Feature Atlas
                </span>
              </div>

              <div className="mt-6 rounded-[2rem] border border-white/8 bg-[rgba(255,255,255,0.03)] p-5">
                <MonumentIllustration
                  kind="taihedian"
                  palette={heroBuilding.palette}
                  className="h-[23rem] w-full"
                />
              </div>

              <div className="mt-6 rounded-[1.6rem] border border-white/8 bg-black/14 px-5 py-5">
                <p className="text-sm leading-8 text-[var(--color-ink-muted)]">
                  从前庭留白、三层台基到重檐屋顶，这个首页不再只是把建筑“摆出来”，而是把观看顺序、理解顺序和记忆顺序一起设计出来。
                </p>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-[1fr_auto] md:items-end">
                <div className="space-y-3">
                  <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-gold-soft)]">
                    Included Cases
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {featuredBuildingNames.map((name) => (
                      <span
                        key={name}
                        className="rounded-full border border-white/8 bg-white/4 px-3 py-2 text-xs tracking-[0.16em] text-[var(--color-ink-soft)]"
                      >
                        {name}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  to={`/building/${heroBuilding.id}`}
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-[var(--color-gold-soft)]/25 bg-[var(--color-panel-warm)] px-5 py-3 text-sm tracking-[0.16em] text-[var(--color-ink-contrast)] transition hover:border-[var(--color-gold-soft)]/45 hover:bg-[rgba(216,186,105,0.12)]"
                >
                  进入太和殿专题
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="themes" className="mt-24">
          <SectionHeading
            eyebrow="Narrative Themes"
            title="先搭准叙事骨架，再让技术去放大文化"
            description="这版首页不是按“页面模块”来堆信息，而是按建筑阅读逻辑来组织内容。礼制、结构、空间、工艺与保护五条主线，会在每个个案中反复交叉出现。"
            align="center"
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[2.2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-7 shadow-[var(--shadow-panel)]">
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[var(--color-gold-soft)]">
                <ScrollText size={14} />
                策展原则
              </div>
              <div className="mt-6 space-y-4">
                {curationPrinciples.map((principle, index) => (
                  <motion.div
                    key={principle}
                    initial={{ opacity: 0, x: -18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.45, delay: index * 0.06 }}
                    className="rounded-[1.5rem] border border-white/8 bg-black/12 px-5 py-5"
                  >
                    <p className="text-xs tracking-[0.28em] text-[var(--color-gold-soft)]">
                      0{index + 1}
                    </p>
                    <p className="mt-3 text-sm leading-8 text-[var(--color-ink-muted)]">
                      {principle}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-2">
              {siteThemes.map((theme, index) => (
                <motion.div
                  key={theme.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="rounded-[1.9rem] border border-white/10 bg-[rgba(255,255,255,0.04)] p-6"
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
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="cases" className="mt-24">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Featured Cases"
              title="每个代表案例都以独立专题方式被重新讲述"
              description="不再把所有建筑塞进同一套错误玩法里。宫殿、坛庙、园林、高原宫堡与土楼，会通过不同的视觉语法和阅读路径展开。"
            />
            <div className="rounded-[1.6rem] border border-white/10 bg-white/4 px-5 py-4 text-sm leading-7 text-[var(--color-ink-muted)] lg:max-w-sm">
              <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-gold-soft)]">
                Archive Scope
              </p>
              <p className="mt-3">
                当前首批样本共 {buildingsData.length} 组，每组保留 5 个专题模块，用统一结构承接深读与后续扩展。
              </p>
            </div>
          </div>

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

        <section id="method" className="mt-24 grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="rounded-[2.2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(216,186,105,0.12),rgba(255,255,255,0.03))] p-7 shadow-[var(--shadow-panel)]">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-gold-soft)]">
              Reading Method
            </p>
            <h3 className="mt-4 text-3xl tracking-[0.1em] text-[var(--color-ink-contrast)]">
              科技表达是阅读放大器，不是喧宾夺主的特效
            </h3>
            <p className="mt-5 text-base leading-8 text-[var(--color-ink-muted)]">
              真正有效的数字遗产网站，不是让用户被动画击中，而是让他在动画的帮助下更快看懂空间秩序、结构关系和保护逻辑。所以这版交互始终围绕“如何看明白”来设计。
            </p>

            <div className="mt-8 space-y-4">
              {technologyPillars.map((pillar, index) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, x: -18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                  className="rounded-[1.5rem] border border-white/8 bg-black/12 px-5 py-5"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-gold-soft)]/25 bg-[var(--color-panel-warm)] text-[var(--color-gold-soft)]">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="text-lg tracking-[0.1em] text-[var(--color-ink-contrast)]">
                        {pillar.title}
                      </h4>
                      <p className="mt-2 text-sm leading-7 text-[var(--color-ink-contrast)]">
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
          </div>

          <div className="grid gap-5">
            <div className="rounded-[2rem] border border-white/10 bg-[rgba(255,255,255,0.04)] p-6">
              <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-gold-soft)]">
                Reading Experience
              </p>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <ExperienceCard
                  title="从总览到个案"
                  description="首页负责建立语境与方法，详情页负责进入建筑内部的结构逻辑。"
                />
                <ExperienceCard
                  title="从视觉到理解"
                  description="图形化模块首先解释建筑，而不是替代建筑本身。"
                />
                <ExperienceCard
                  title="从事实到记忆"
                  description="时间线、模块步骤与关键事实一起构成可被记住的阅读路径。"
                />
                <ExperienceCard
                  title="从浏览到收藏"
                  description="专题完成状态与藏印反馈，为持续浏览提供温和但明确的激励。"
                />
              </div>
            </div>

            <div className="overflow-hidden rounded-[2.2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(106,144,169,0.12),rgba(255,255,255,0.03))] p-7">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-gold-soft)]">
                    Source Note
                  </p>
                  <h3 className="mt-4 text-3xl tracking-[0.12em] text-[var(--color-ink-contrast)]">
                    这不是终点，而是新的高质量起点
                  </h3>
                  <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--color-ink-muted)]">
                    本轮已经把劣质、混乱、不可维护的旧项目重建成一个可继续精修的数字文化底座。接下来所有更大胆的视觉和交互，都可以在这套清晰结构上继续增长。
                  </p>
                </div>
                <Link
                  to={`/building/${heroBuilding.id}`}
                  className="inline-flex items-center gap-3 rounded-full bg-[var(--color-gold-soft)] px-6 py-3 text-sm tracking-[0.16em] text-[var(--color-bg)] transition hover:brightness-105"
                >
                  从第一个案例开始
                  <ArrowRight size={16} />
                </Link>
              </div>

              <div className="mt-6 flex items-center gap-3 text-sm tracking-[0.18em] text-[var(--color-ink-soft)]">
                <BookOpenText size={16} />
                <span>{footerSourceNote}</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <a
        href="#cases"
        className="fixed bottom-6 right-6 z-30 inline-flex items-center gap-2 rounded-full border border-white/12 bg-[rgba(10,16,17,0.82)] px-4 py-3 text-xs tracking-[0.22em] text-[var(--color-ink-contrast)] backdrop-blur-lg transition hover:border-[var(--color-gold-soft)]/40 hover:bg-[rgba(216,186,105,0.08)]"
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

function ExperienceCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-[1.5rem] border border-white/8 bg-black/12 px-5 py-5">
      <p className="text-base tracking-[0.1em] text-[var(--color-ink-contrast)]">{title}</p>
      <p className="mt-3 text-sm leading-7 text-[var(--color-ink-muted)]">{description}</p>
    </div>
  );
}
