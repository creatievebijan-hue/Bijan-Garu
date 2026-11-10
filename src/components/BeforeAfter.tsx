import React, { useState } from 'react';
import { Sparkles, AlertTriangle, ArrowRight, Clock, MapPin, CheckCircle } from 'lucide-react';
import { Language, translations } from '../translations';

interface BeforeAfterProps {
  lang: Language;
  onBookClick: () => void;
}

export const BeforeAfter: React.FC<BeforeAfterProps> = ({ lang, onBookClick }) => {
  const [activeTab, setActiveTab] = useState(0);
  const t = translations[lang];
  const activeCase = t.beforeAfter.cases[activeTab] || t.beforeAfter.cases[0];

  return (
    <section className="py-20 bg-slate-950 text-slate-100 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-400/10 text-amber-300 border border-amber-400/20 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>{t.beforeAfter.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.beforeAfter.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            {t.beforeAfter.subtitle}
          </p>
        </div>

        {/* Mandatory Prominent Disclaimer Banner */}
        <div className="max-w-4xl mx-auto mb-10 p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-amber-500/30 flex items-start gap-3 text-left">
          <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-slate-300 space-y-1">
            <div className="font-bold text-amber-300">
              {t.beforeAfter.disclaimerTitle}
            </div>
            <p className="font-semibold text-slate-200">
              {t.beforeAfter.disclaimerQuote}
            </p>
            <p className="text-slate-400 text-xs leading-relaxed">
              {t.beforeAfter.disclaimerSub}
            </p>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {t.beforeAfter.cases.map((c, idx) => (
            <button
              key={c.id}
              onClick={() => setActiveTab(idx)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === idx
                  ? 'bg-amber-400 text-slate-950 font-bold shadow-md shadow-amber-400/20'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {c.title}
            </button>
          ))}
        </div>

        {/* Showcase Comparison Card */}
        <div className="max-w-5xl mx-auto bg-slate-900/90 rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual Side-by-side Placeholder Showcase */}
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
              
              {/* Before Card */}
              <div className="rounded-2xl bg-slate-950 border border-slate-800 p-5 flex flex-col justify-between min-h-[260px] relative overflow-hidden group">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-slate-800 text-slate-300">
                    {t.beforeAfter.beforeLabel}
                  </span>
                  <span className="text-[10px] text-slate-400">{lang === 'bn' ? 'ধারণাগত চিত্র' : 'Illustrative'}</span>
                </div>

                {/* Stylized Silhouette Representation */}
                <div className="py-6 flex flex-col items-center justify-center text-center space-y-3">
                  <div className="w-20 h-20 rounded-full bg-slate-900 border-2 border-dashed border-amber-500/40 flex items-center justify-center text-slate-400">
                    <svg className="w-10 h-10 text-amber-500/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <p className="text-xs text-slate-300 max-w-[200px] leading-snug">
                    {activeCase.beforeImg}
                  </p>
                </div>

                <div className="text-[10px] text-center text-slate-400 pt-2 border-t border-slate-800/80">
                  {lang === 'bn' ? 'চিকিৎসা পূর্ববর্তী অবস্থা' : 'Pre-Procedure Baseline'}
                </div>
              </div>

              {/* After Card */}
              <div className="rounded-2xl bg-slate-950 border border-amber-500/30 p-5 flex flex-col justify-between min-h-[260px] relative overflow-hidden group shadow-lg shadow-amber-500/5">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-amber-400/20 text-amber-300 border border-amber-400/30">
                    {t.beforeAfter.afterLabel}
                  </span>
                  <span className="text-[10px] text-emerald-400 flex items-center gap-1 font-semibold">
                    <CheckCircle className="w-3 h-3" /> {t.beforeAfter.potentialTarget}
                  </span>
                </div>

                {/* Stylized Silhouette Representation */}
                <div className="py-6 flex flex-col items-center justify-center text-center space-y-3">
                  <div className="w-20 h-20 rounded-full bg-amber-400/10 border-2 border-amber-400/50 flex items-center justify-center text-amber-400">
                    <svg className="w-10 h-10 text-amber-400" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z" />
                    </svg>
                  </div>
                  <p className="text-xs text-slate-200 font-medium max-w-[200px] leading-snug">
                    {activeCase.afterImg}
                  </p>
                </div>

                <div className="text-[10px] text-center text-amber-400/80 pt-2 border-t border-slate-800/80">
                  {lang === 'bn' ? 'চিকিৎসা পরবর্তী সম্ভাব্য পরিণতি' : 'Post-Procedure Potential Outcome'}
                </div>
              </div>

            </div>

            {/* Case Details */}
            <div className="lg:col-span-5 space-y-5">
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  {lang === 'bn' ? 'আলোচ্য ক্ষেত্র:' : 'Case Focus:'} {activeCase.area}
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">
                  {activeCase.title}
                </h3>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                {activeCase.description}
              </p>

              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{activeCase.duration}</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                  <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{activeCase.area}</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onBookClick}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
                >
                  <span>{t.beforeAfter.btnDiscuss}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
