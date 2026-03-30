import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useParams, useNavigate } from 'react-router';
import { ArrowLeft, Volume2, VolumeX } from 'lucide-react';
import { BuildingData, BuildingModule } from '../types';
import { buildingsData } from '../data/buildings';
import { useProgress } from '../context';
import AxisModule from '../modules/AxisModule';
import StructureModule from '../modules/StructureModule';
import DougongModule from '../modules/DougongModule';
import CaissonModule from '../modules/CaissonModule';
import SeasonsModule from '../modules/SeasonsModule';
import RidgeBeastModule from '../modules/RidgeBeastModule';
import RestorationModule from '../modules/RestorationModule';
import GardenModule from '../modules/GardenModule';
import PagodaModule from '../modules/PagodaModule';
import BridgeModule from '../modules/BridgeModule';
import DwellingModule from '../modules/DwellingModule';
import CinematicAxisModuleV2 from '../modules/CinematicAxisModuleV2';
import CinematicStructureModule from '../modules/CinematicStructureModule';
import CinematicDougongModuleV2 from '../modules/CinematicDougongModuleV2';

export default function BuildingDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { completeModule, earnSeal, hasCompletedModule } = useProgress();
  const [building, setBuilding] = useState<BuildingData | null>(null);
  const [activeModule, setActiveModule] = useState<BuildingModule | null>(null);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const found = buildingsData.find(b => b.id === id);
    if (found) {
      setBuilding(found);
      if (found.modules && found.modules.length > 0) {
        setActiveModule(found.modules[0]);
      }
    }
  }, [id]);

  const handleBack = () => {
    setIsExiting(true);
    setTimeout(() => {
      navigate('/');
    }, 500);
  };

  const handleModuleComplete = (moduleId: string) => {
    completeModule(`${id}-${moduleId}`);
    
    const sealMap: Record<string, { type: '形' | '构' | '匠' | '饰' | '时' | '礼' | '守' | '园' | '塔' | '桥' | '居'; name: string }> = {
      axis: { type: '礼', name: '中轴之礼' },
      structure: { type: '构', name: '木构之骨' },
      dougong: { type: '匠', name: '斗栱之匠' },
      caisson: { type: '饰', name: '藻井之饰' },
      seasons: { type: '时', name: '四时之序' },
      ridge: { type: '形', name: '脊兽之形' },
      restoration: { type: '守', name: '修缮之守' },
      garden: { type: '园', name: '园林意境' },
      pagoda: { type: '塔', name: '登临宝塔' },
      bridge: { type: '桥', name: '古桥遗韵' },
      dwelling: { type: '居', name: '四时宜居' }
    };

    const sealInfo = sealMap[moduleId];
    if (sealInfo && !hasCompletedModule(`${id}-${moduleId}`)) {
      earnSeal({
        id: `${building?.id}-${moduleId}`,
        name: sealInfo.name,
        type: sealInfo.type,
        earned: true,
        earnedAt: Date.now(),
        description: `完成${building?.name}的${sealInfo.name}探索`
      });
    }
  };

  const renderModule = () => {
    if (!building || !activeModule) return null;

    const props = {
      building,
      onComplete: () => handleModuleComplete(activeModule.id),
      isCompleted: hasCompletedModule(`${id}-${activeModule.id}`)
    };

    switch (activeModule.id) {
      case 'axis':
        return <CinematicAxisModuleV2 {...props} />;
      case 'structure':
        return <CinematicStructureModule {...props} />;
      case 'dougong':
        return <CinematicDougongModuleV2 {...props} />;
      case 'caisson':
        return <CaissonModule {...props} />;
      case 'seasons':
        return <SeasonsModule {...props} />;
      case 'ridge':
        return <RidgeBeastModule {...props} />;
      case 'restoration':
        return <RestorationModule {...props} />;
      case 'garden':
        return <GardenModule {...props} />;
      case 'pagoda':
        return <PagodaModule {...props} />;
      case 'bridge':
        return <BridgeModule {...props} />;
      case 'dwelling':
        return <DwellingModule {...props} />;
      default:
        return null;
    }
  };

  if (!building) {
    return (
      <div className="w-screen h-screen bg-bg-deep flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-12 h-12 border-2 border-gold-500 border-t-transparent rounded-full"
        />
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-screen h-screen bg-bg-deep text-ink-contrast font-serif overflow-hidden relative"
      style={{ fontFamily: "'Noto Serif SC', serif" }}
    >
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/rice-paper.png')] opacity-[0.02] pointer-events-none" />

      <header className="absolute top-0 left-0 right-0 h-20 flex items-center justify-between px-8 z-50 bg-gradient-to-b from-[#0A1110] to-transparent">
        <motion.button
          whileHover={{ x: -5 }}
          onClick={handleBack}
          className="flex items-center gap-3 text-gold-500 hover:text-ink-contrast transition-colors cursor-pointer group"
        >
          <ArrowLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
          <span className="tracking-[0.3em]">收卷</span>
        </motion.button>

        <div className="flex items-center gap-6">
          <h1 className="text-2xl text-gold-500 tracking-[0.5em]">{building.name}</h1>
          <div className="w-12 h-12 border-[2px] border-vermilion-500 border-vermilion-500 flex items-center justify-center rounded-sm shadow-[0_0_20px_rgba(194,53,49,0.25)] bg-vermilion-500/5">
            <span className="text-sm font-bold [writing-mode:vertical-rl] tracking-widest leading-none" style={{ fontFamily: 'SimSun, serif' }}>
              {building.seal}
            </span>
          </div>
        </div>

        <button
          onClick={() => setSoundEnabled(!soundEnabled)}
          className="p-3 text-gold-500 border border-gold-500/30 hover:bg-gold-500/10 transition-all rounded-sm cursor-pointer"
        >
          {soundEnabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
        </button>
      </header>

      {building.modules && building.modules.length > 0 && (
        <nav className="absolute top-24 left-1/2 -translate-x-1/2 z-40">
          <div className="flex flex-col items-center gap-2">
            <div className="flex gap-2 p-2 bg-bg-panel/80 backdrop-blur-md border border-gold-500/20 rounded-sm">
              {building.modules.map((module, index) => (
                <motion.button
                  key={module.id}
                  onClick={() => setActiveModule(module)}
                  className={`px-6 py-3 text-sm tracking-[0.2em] transition-all relative cursor-pointer ${
                    activeModule?.id === module.id
                      ? 'text-bg-deep bg-gold-500'
                      : 'text-gold-500 hover:bg-gold-500/10'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">{module.title}</span>
                  {hasCompletedModule(`${id}-${module.id}`) && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-1 -right-1 w-3 h-3 bg-vermilion-500 rounded-full shadow-[0_0_8px_rgba(194,53,49,0.6)]"
                    />
                  )}
                </motion.button>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                {building.modules.map((module) => (
                  <motion.div
                    key={module.id}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      hasCompletedModule(`${id}-${module.id}`)
                        ? 'bg-vermilion-500 shadow-[0_0_6px_rgba(194,53,49,0.5)]' 
                        : 'bg-gold-500/30'
                    }`}
                    animate={{
                      scale: activeModule?.id === module.id ? 1.3 : 1,
                    }}
                  />
                ))}
              </div>
              <span className="text-xs text-gold-500/60 tracking-wider">
                {building.modules.filter(m => hasCompletedModule(`${id}-${m.id}`)).length}/{building.modules.length}
              </span>
            </div>
          </div>
        </nav>
      )}

      <main className="absolute inset-0 pt-32 pb-8 px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeModule?.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full"
          >
            {renderModule()}
          </motion.div>
        </AnimatePresence>
      </main>

      <AnimatePresence>
        {isExiting && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-bg-deep flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 1, rotate: 0 }}
              animate={{ scale: 0, rotate: 180 }}
              transition={{ duration: 0.5 }}
              className="w-24 h-24 border-4 border-gold-500 rounded-full flex items-center justify-center"
            >
              <span className="text-gold-500 text-2xl tracking-[0.5em]">收</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
