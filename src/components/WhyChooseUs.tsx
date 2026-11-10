import React from 'react';
import { Sparkles, Compass, PhoneCall, Building2, MessageSquare, ShieldCheck, Heart } from 'lucide-react';
import { Language, translations } from '../translations';

interface WhyChooseUsProps {
  lang: Language;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ lang }) => {
  const t = translations[lang];

  const getBenefitIcon = (index: number) => {
    switch (index) {
      case 0:
        return Sparkles;
      case 1:
        return Compass;
      case 2:
        return PhoneCall;
      case 3:
        return Building2;
      case 4:
      default:
        return MessageSquare;
    }
  };

  return (
    <section className="py-20 bg-slate-900/60 text-slate-100 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-400/10 text-emerald-300 border border-emerald-400/20 mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>{t.whyUs.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.whyUs.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            {t.whyUs.subtitle}
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.whyUs.benefits.map((b, idx) => {
            const Icon = getBenefitIcon(idx);
            return (
              <div
                key={b.title}
                className="p-7 rounded-3xl bg-slate-950/80 border border-slate-800 hover:border-slate-700 transition-all duration-300 shadow-md group hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-slate-900 text-slate-400 border border-slate-800">
                    {b.tag}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                  {b.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {b.description}
                </p>
              </div>
            );
          })}

          {/* Ethics Pledge Card */}
          <div className="p-7 rounded-3xl bg-gradient-to-br from-slate-950 to-slate-900 border border-emerald-500/30 shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
                <Heart className="w-4 h-4" />
                <span>{t.whyUs.ethicsTag}</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {t.whyUs.ethicsTitle}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {t.whyUs.ethicsDesc}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] text-slate-400 font-medium">
              {t.whyUs.ethicsNote}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
