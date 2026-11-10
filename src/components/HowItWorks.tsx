import React from 'react';
import { PhoneCall, FileText, Lightbulb, Hospital, ArrowRight } from 'lucide-react';
import { Language, translations } from '../translations';

interface HowItWorksProps {
  lang: Language;
  onBookClick: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ lang, onBookClick }) => {
  const t = translations[lang];

  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return PhoneCall;
      case 1:
        return FileText;
      case 2:
        return Lightbulb;
      case 3:
      default:
        return Hospital;
    }
  };

  return (
    <section id="process" className="py-20 bg-slate-950 text-slate-100 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-400/10 text-amber-300 border border-amber-400/20 mb-4">
            <span>{t.process.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.process.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            {t.process.subtitle}
          </p>
        </div>

        {/* 4 Step Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.process.steps.map((step, idx) => {
            const Icon = getStepIcon(idx);
            return (
              <div
                key={step.number}
                className="relative bg-slate-900/90 rounded-3xl p-6 sm:p-7 border border-slate-800 hover:border-amber-400/40 transition-all duration-300 flex flex-col justify-between group shadow-lg"
              >
                {/* Step Number Watermark */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl font-black text-slate-800 group-hover:text-amber-400/30 transition-colors font-mono">
                    {step.number}
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Micro Detail */}
                <div className="mt-6 pt-4 border-t border-slate-800/80">
                  <span className="text-[11px] font-medium text-amber-400/90">
                    ✓ {step.detail}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Bar */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900 to-amber-950/40 border border-amber-500/20 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-bold text-white">
              {t.process.ctaQuestion}
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              {t.process.ctaSubtext}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="tel:7980248170"
              className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs sm:text-sm transition-all border border-slate-700"
            >
              {t.callNow}: 7980248170
            </a>
            <button
              onClick={onBookClick}
              className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer shadow-md"
            >
              <span>{t.process.ctaButton}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
