import React from 'react';
import { Sparkles, UserCheck, ShieldAlert, HeartHandshake, Eye, ArrowRight, Phone } from 'lucide-react';
import { Language, translations } from '../translations';

interface ServicesProps {
  lang: Language;
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ lang, onSelectService }) => {
  const t = translations[lang];

  const getServiceIcon = (index: number) => {
    switch (index) {
      case 0:
        return <UserCheck className="w-6 h-6" />;
      case 1:
        return <Sparkles className="w-6 h-6" />;
      case 2:
        return <Eye className="w-6 h-6" />;
      case 3:
        return <HeartHandshake className="w-6 h-6" />;
      case 4:
      default:
        return <ShieldAlert className="w-6 h-6" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-slate-950 text-slate-100 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-400/10 text-emerald-300 border border-emerald-400/20 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>{t.services.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.services.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            {t.services.subtitle}
          </p>
        </div>

        {/* 5 Service Cards Grid + Direct Contact Card */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.services.items.map((service, index) => {
            const isFeatured = index === 0;
            return (
              <div
                key={service.id}
                className={`relative rounded-3xl p-7 transition-all duration-300 flex flex-col justify-between group ${
                  isFeatured
                    ? 'bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border-2 border-emerald-500/40 shadow-xl shadow-emerald-500/10'
                    : 'bg-slate-900/80 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 shadow-lg'
                }`}
              >
                {/* Featured Badge if primary service */}
                {isFeatured && (
                  <span className="absolute -top-3.5 left-7 px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-400 text-slate-950 shadow-md">
                    {t.services.featuredBadge}
                  </span>
                )}

                <div>
                  {/* Service Icon */}
                  <div className="w-12 h-12 rounded-2xl bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-105 transition-transform">
                    {getServiceIcon(index)}
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-5">
                    {service.shortDescription}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-800/90 text-slate-300 border border-slate-700/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action */}
                <div className="pt-4 border-t border-slate-800/80 mt-auto">
                  <button
                    onClick={() => onSelectService(service.title)}
                    className="w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <span>{t.getConsultation}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}

          {/* Quick Contact Card for the 6th slot */}
          <div className="rounded-3xl p-7 bg-gradient-to-br from-emerald-950/40 via-slate-900 to-slate-950 border border-emerald-500/30 flex flex-col justify-between shadow-lg">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-400/20 border border-emerald-400/30 flex items-center justify-center text-emerald-400 mb-6">
                <Phone className="w-6 h-6 animate-pulse" />
              </div>

              <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider">
                {t.services.directCardTag}
              </span>
              <h3 className="text-xl font-bold text-white mt-1 mb-3">
                {t.services.directCardTitle}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-5">
                {t.services.directCardDesc}
              </p>
            </div>

            <div className="space-y-2.5 pt-4 border-t border-slate-800/80">
              <a
                href="tel:7980248170"
                className="w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-md"
              >
                <Phone className="w-4 h-4" />
                <span>7980248170</span>
              </a>
              <p className="text-[11px] text-center text-slate-400">
                {t.services.directCardTiming}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
