import React, { useState } from 'react';
import { Phone, Calendar, ArrowRight, CheckCircle2, Copy, Check, Sparkles, AlertCircle } from 'lucide-react';
import { Language, translations } from '../translations';

interface HeroProps {
  lang: Language;
  onBookClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onBookClick }) => {
  const [copied, setCopied] = useState(false);
  const t = translations[lang];

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('7980248170');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="home" className="relative overflow-hidden bg-slate-950 text-white pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-800">
      {/* Background Glow Accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-full max-w-5xl h-48 bg-slate-900/40 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-amber-500/30 text-amber-300 text-xs font-semibold shadow-inner">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>{t.hero.badge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.2]">
              {t.hero.titleStart}
              <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
                {t.hero.titleHighlight}
              </span>
              {t.hero.titleEnd}
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              {t.hero.subtitle}
            </p>

            {/* Transparent Role Note */}
            <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 text-slate-400 text-xs sm:text-sm flex items-start gap-2.5 max-w-xl mx-auto lg:mx-0 text-left">
              <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-200">{t.hero.roleNoticeTitle}</strong>{' '}
                {t.hero.roleNoticeText}
              </div>
            </div>

            {/* Action Buttons & Phone Showcase */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              {/* Primary CTA */}
              <button
                onClick={onBookClick}
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-xl shadow-amber-500/20 active:scale-95 transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <Calendar className="w-5 h-5 text-slate-950" />
                <span>{t.bookConsultation}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Secondary CTA */}
              <a
                href="tel:7980248170"
                className="w-full sm:w-auto px-7 py-4 rounded-xl text-base font-bold text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-amber-400/50 shadow-md active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5 text-amber-400" />
                <span>{t.callNow}</span>
              </a>
            </div>

            {/* Dedicated Phone Number Display Card */}
            <div className="pt-2 inline-flex flex-wrap items-center justify-center lg:justify-start gap-3 bg-slate-900/60 p-3 rounded-2xl border border-slate-800/80">
              <span className="text-xs text-slate-400 font-medium uppercase tracking-wider pl-1">
                {t.hero.directHelpline}
              </span>
              <a
                href="tel:7980248170"
                className="text-2xl sm:text-3xl font-extrabold tracking-tight text-amber-400 hover:text-amber-300 transition-colors"
              >
                7980248170
              </a>
              <button
                onClick={handleCopyPhone}
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors text-xs flex items-center gap-1.5 cursor-pointer"
                title="Copy phone number"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-medium">{t.hero.copied}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span className="text-slate-300">{t.hero.copy}</span>
                  </>
                )}
              </button>
            </div>

            {/* Trust Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{t.hero.badge1}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{t.hero.badge2}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{t.hero.badge3}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Premium Visual & Consultation Interactive Preview */}
          <div className="lg:col-span-5 relative">
            
            {/* Aesthetic Card Showcase */}
            <div className="relative mx-auto max-w-md bg-gradient-to-b from-slate-900 to-slate-950 p-6 sm:p-7 rounded-3xl border border-slate-800 shadow-2xl shadow-black/60">
              
              {/* Card Header */}
              <div className="flex items-center justify-between pb-5 border-b border-slate-800/80">
                <div>
                  <span className="text-[11px] font-bold tracking-wider uppercase text-amber-400">
                    {t.hero.cardTag}
                  </span>
                  <h3 className="text-lg font-bold text-white">{t.hero.cardTitle}</h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-amber-400" />
                </div>
              </div>

              {/* Consultation Areas Breakdown */}
              <div className="py-5 space-y-3.5">
                
                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-colors">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-semibold text-slate-200">{t.hero.step1Title}</span>
                    <span className="text-amber-400 font-bold">{lang === 'bn' ? 'ধাপ ১' : 'Step 1'}</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {t.hero.step1Desc}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-colors">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-semibold text-slate-200">{t.hero.step2Title}</span>
                    <span className="text-amber-400 font-bold">{lang === 'bn' ? 'ধাপ ২' : 'Step 2'}</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {t.hero.step2Desc}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-colors">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-semibold text-slate-200">{t.hero.step3Title}</span>
                    <span className="text-amber-400 font-bold">{lang === 'bn' ? 'ধাপ ৩' : 'Step 3'}</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {t.hero.step3Desc}
                  </p>
                </div>

              </div>

              {/* Live Status Widget */}
              <div className="mt-2 p-4 rounded-2xl bg-gradient-to-r from-amber-950/40 via-slate-900 to-emerald-950/40 border border-amber-500/20 flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold text-white">{t.hero.widgetTitle}</div>
                  <div className="text-[11px] text-slate-400">{t.hero.widgetSubtitle}</div>
                </div>
                <a
                  href="tel:7980248170"
                  className="px-3.5 py-1.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs flex items-center gap-1 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{t.hero.widgetCall}</span>
                </a>
              </div>

              {/* Disclaimer label below visual card */}
              <div className="mt-4 text-center">
                <p className="text-[11px] text-slate-300">
                  {t.hero.disclaimerNote}
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
