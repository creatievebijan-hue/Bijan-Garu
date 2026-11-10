import React from 'react';
import { Shield, HelpCircle, Compass, Handshake, CheckCircle2, AlertOctagon, Phone, ArrowRight } from 'lucide-react';
import { Language, translations } from '../translations';

interface AboutProps {
  lang: Language;
  onBookClick: () => void;
}

export const About: React.FC<AboutProps> = ({ lang, onBookClick }) => {
  const t = translations[lang];

  return (
    <section id="about" className="py-20 bg-slate-900/60 text-slate-100 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-400/10 text-amber-300 border border-amber-400/20 mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>{t.about.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {lang === 'bn' ? (
              <>
                <span className="text-amber-400">{t.brandNameBangla}</span> সম্পর্কে
              </>
            ) : (
              <>
                About <span className="text-amber-400">{t.brandName}</span>
              </>
            )}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            {t.about.subtitle}
          </p>
        </div>

        {/* Two-Column Explanatory Layout */}
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          
          {/* Main Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-slate-200 leading-relaxed font-normal">
                {t.about.p1}
              </p>
              <p className="text-base text-slate-300 leading-relaxed">
                {t.about.p2}
              </p>
            </div>

            {/* Clear Role Transparency Box */}
            <div className="p-5 rounded-2xl bg-amber-950/20 border border-amber-500/30 text-slate-200 space-y-2">
              <div className="flex items-center gap-2 text-amber-300 font-bold text-sm sm:text-base">
                <AlertOctagon className="w-5 h-5 shrink-0 text-amber-400" />
                <span>{t.about.transparencyTitle}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {t.about.transparencyText}
              </p>
            </div>

            {/* What We Do vs What Doctors Do */}
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                <h4 className="text-sm font-bold text-amber-400 mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  {t.about.whatWeDoTitle}
                </h4>
                <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
                  {t.about.whatWeDoItems.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                <h4 className="text-sm font-bold text-emerald-400 mb-2 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-emerald-400" />
                  {t.about.whatClinicsDoTitle}
                </h4>
                <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
                  {t.about.whatClinicsDoItems.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA inside About */}
            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <button
                onClick={onBookClick}
                className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm flex items-center gap-2 transition-colors cursor-pointer"
              >
                <span>{t.about.btnConsultation}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="tel:7980248170"
                className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm flex items-center gap-2 transition-colors border border-slate-700"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>{t.about.btnCall}</span>
              </a>
            </div>

          </div>

          {/* Right Column: Values & Assurance Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 shadow-md">
              <div className="w-10 h-10 rounded-xl bg-amber-400/10 flex items-center justify-center text-amber-400 mb-4">
                <HelpCircle className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">{t.about.card1Title}</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {t.about.card1Desc}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 shadow-md">
              <div className="w-10 h-10 rounded-xl bg-emerald-400/10 flex items-center justify-center text-emerald-400 mb-4">
                <Handshake className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">{t.about.card2Title}</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {t.about.card2Desc}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 shadow-md">
              <div className="w-10 h-10 rounded-xl bg-cyan-400/10 flex items-center justify-center text-cyan-400 mb-4">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">{t.about.card3Title}</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {t.about.card3Desc}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
