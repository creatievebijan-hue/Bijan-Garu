import React, { useState } from 'react';
import { Layers, ArrowRight, Info, CheckCircle } from 'lucide-react';
import { Language, translations } from '../translations';

interface StageGuideProps {
  lang: Language;
  onSelectStage: (stageTitle: string) => void;
}

export const HairStageGuide: React.FC<StageGuideProps> = ({ lang, onSelectStage }) => {
  const [activeStage, setActiveStage] = useState<number>(1);
  const t = translations[lang];

  const current = t.stageGuide.stages[activeStage] || t.stageGuide.stages[0];

  return (
    <section className="py-16 bg-slate-900/40 text-slate-100 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-400/10 text-cyan-300 border border-cyan-400/20 mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>{t.stageGuide.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            {t.stageGuide.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            {t.stageGuide.subtitle}
          </p>
        </div>

        {/* Stage Selection Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {t.stageGuide.stages.map((s, idx) => (
            <button
              key={s.stage}
              onClick={() => setActiveStage(idx)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeStage === idx
                  ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/20 scale-105'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800 hover:border-slate-700'
              }`}
            >
              <span className="font-bold mr-1.5">{s.stage}:</span>
              <span>{s.name}</span>
            </button>
          ))}
        </div>

        {/* Selected Stage Detail Card */}
        <div className="max-w-4xl mx-auto bg-slate-950 p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-xl">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-md text-xs font-bold bg-amber-400/20 text-amber-300 border border-amber-400/30">
                  {current.stage}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {current.name}
                </h3>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                {current.description}
              </p>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-400">
                  <Info className="w-4 h-4 shrink-0" />
                  <span>{t.stageGuide.focusLabel}</span>
                </div>
                <p className="text-xs text-slate-300 pl-6">
                  {current.consultationFocus}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
                  <CheckCircle className="w-4 h-4 shrink-0" />
                  <span>{t.stageGuide.approachLabel}</span>
                </div>
                <p className="text-xs text-slate-300 pl-6">
                  {current.typicalApproach}
                </p>
              </div>
            </div>

            <div className="md:col-span-5 flex flex-col justify-center items-center p-6 bg-slate-900/80 rounded-2xl border border-slate-800 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 font-extrabold text-sm sm:text-base">
                {current.stage}
              </div>
              <div>
                <h4 className="text-base font-bold text-white">
                  {t.stageGuide.exploreTitle(current.stage)}
                </h4>
                <p className="text-xs text-slate-400 mt-1">
                  {t.stageGuide.exploreDesc}
                </p>
              </div>
              <button
                onClick={() => onSelectStage(`${current.stage} - ${current.name}`)}
                className="w-full py-3 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
              >
                <span>{t.stageGuide.btnLabel(current.stage)}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
