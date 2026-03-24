import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronRight, ChevronLeft } from 'lucide-react';

interface GuideStep {
  title: string;
  description: string;
  icon?: string;
}

interface ModuleGuideProps {
  moduleId: string;
  steps: GuideStep[];
  onComplete: () => void;
}

const GUIDE_SHOWN_KEY = 'china2_guide_shown';

export function useShouldShowGuide(moduleId: string): boolean {
  const [shouldShow, setShouldShow] = useState(false);
  
  useEffect(() => {
    const shownGuides = JSON.parse(localStorage.getItem(GUIDE_SHOWN_KEY) || '[]');
    setShouldShow(!shownGuides.includes(moduleId));
  }, [moduleId]);
  
  return shouldShow;
}

export function markGuideShown(moduleId: string): void {
  const shownGuides = JSON.parse(localStorage.getItem(GUIDE_SHOWN_KEY) || '[]');
  if (!shownGuides.includes(moduleId)) {
    shownGuides.push(moduleId);
    localStorage.setItem(GUIDE_SHOWN_KEY, JSON.stringify(shownGuides));
  }
}

export default function ModuleGuide({ moduleId, steps, onComplete }: ModuleGuideProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const shownGuides = JSON.parse(localStorage.getItem(GUIDE_SHOWN_KEY) || '[]');
    if (!shownGuides.includes(moduleId)) {
      setIsVisible(true);
    }
  }, [moduleId]);
  
  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      handleClose();
    }
  };
  
  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };
  
  const handleClose = () => {
    markGuideShown(moduleId);
    setIsVisible(false);
    onComplete();
  };
  
  const handleSkip = () => {
    handleClose();
  };
  
  if (!isVisible) return null;
  
  const step = steps[currentStep];
  
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-[#0A1110]/95 backdrop-blur-md flex items-center justify-center z-50"
        onClick={handleSkip}
      >
        <motion.div
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          className="max-w-lg w-full mx-4 p-8 bg-[#0B120F] border border-[#D4AF37]/30 rounded-sm relative"
          onClick={e => e.stopPropagation()}
        >
          <button
            onClick={handleSkip}
            className="absolute top-4 right-4 p-2 text-[#D4AF37]/60 hover:text-[#D4AF37] transition-colors cursor-pointer"
          >
            <X size={20} />
          </button>
          
          <div className="flex items-center gap-4 mb-6">
            {step.icon && (
              <div className="w-12 h-12 border-2 border-[#D4AF37] flex items-center justify-center rounded-sm">
                <span className="text-[#D4AF37] text-xl">{step.icon}</span>
              </div>
            )}
            <div>
              <h3 className="text-2xl text-[#D4AF37] tracking-[0.3em]">{step.title}</h3>
              <div className="flex gap-1 mt-2">
                {steps.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentStep ? 'bg-[#D4AF37] w-4' : 'bg-[#D4AF37]/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
          
          <p className="text-[#F5F5DC]/80 text-lg leading-relaxed tracking-widest mb-8">
            {step.description}
          </p>
          
          <div className="flex items-center justify-between">
            <button
              onClick={handleSkip}
              className="px-4 py-2 text-[#D4AF37]/60 hover:text-[#D4AF37] tracking-[0.2em] transition-colors cursor-pointer"
            >
              跳过引导
            </button>
            
            <div className="flex gap-3">
              {currentStep > 0 && (
                <button
                  onClick={handlePrev}
                  className="px-4 py-2 text-[#D4AF37] border border-[#D4AF37]/30 hover:bg-[#D4AF37]/10 tracking-[0.2em] transition-all cursor-pointer flex items-center gap-2"
                >
                  <ChevronLeft size={16} /> 上一步
                </button>
              )}
              <button
                onClick={handleNext}
                className="px-6 py-2 bg-[#D4AF37] text-[#0A1110] tracking-[0.2em] hover:bg-[#D4AF37]/90 transition-all cursor-pointer flex items-center gap-2"
              >
                {currentStep === steps.length - 1 ? '开始探索' : '下一步'}
                {currentStep < steps.length - 1 && <ChevronRight size={16} />}
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
