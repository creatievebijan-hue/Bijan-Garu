import React from 'react';
import { Phone, MessageSquare, Calendar, Sparkles, Clock, ShieldCheck } from 'lucide-react';
import { Language, translations } from '../translations';

interface ContactSectionProps {
  lang: Language;
  onBookClick: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang, onBookClick }) => {
  const t = translations[lang];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-slate-900 to-slate-950 text-slate-100 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Large Aesthetic CTA Card */}
        <div className="relative rounded-3xl bg-slate-950 border border-emerald-500/30 p-8 sm:p-12 lg:p-16 text-center overflow-hidden shadow-2xl shadow-black/60">
          
          {/* Subtle Ambient Background Gradients */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-emerald-500/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 right-10 w-64 h-64 bg-cyan-500/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            
            {/* Tag */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-400/10 text-emerald-300 border border-emerald-400/30">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>{t.contact.badge}</span>
            </div>

            {/* Large Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {t.contact.title}
            </h2>

            {/* Subtitle Text */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
              {t.contact.subtitle}
            </p>

            {/* Brand & Phone Display Card */}
            <div className="py-6 px-6 sm:px-8 my-4 rounded-2xl bg-slate-900/90 border border-slate-800 inline-block w-full max-w-md shadow-inner">
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-1">
                {t.contact.cardTag}
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white mb-1">
                {t.brandName}
              </div>
              {lang === 'bn' && (
                <div className="text-base font-bold text-emerald-400 mb-1">
                  {t.brandNameBangla}
                </div>
              )}
              <div className="text-xs text-slate-400 mb-4">
                {t.tagline}
              </div>

              <div className="pt-3 border-t border-slate-800/80">
                <span className="text-xs text-slate-400 uppercase tracking-wider block mb-1">
                  {t.contact.helplineLabel}
                </span>
                <a
                  href="tel:7980248170"
                  className="text-3xl sm:text-4xl font-black text-emerald-400 hover:text-emerald-300 transition-colors tracking-tight flex items-center justify-center gap-2"
                >
                  <Phone className="w-7 h-7 text-emerald-400 animate-bounce" />
                  <span>7980248170</span>
                </a>
              </div>
            </div>

            {/* Three Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              {/* Call Now */}
              <a
                href="tel:7980248170"
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold text-slate-950 bg-gradient-to-r from-emerald-400 to-emerald-500 hover:from-emerald-300 hover:to-emerald-400 shadow-lg shadow-emerald-500/20 active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5 text-slate-950" />
                <span>{t.callNow}</span>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/917980248170?text=Hello%20Monotosh%20Dada%2C%20I%20would%20like%20to%20inquire%20about%20Hair%20Transplant%20Consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-600/20 active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-5 h-5" />
                <span>{t.whatsApp}</span>
              </a>

              {/* Book Consultation */}
              <button
                onClick={onBookClick}
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-emerald-400/40 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-5 h-5 text-emerald-400" />
                <span>{t.bookConsultation}</span>
              </button>
            </div>

            {/* Operational details */}
            <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-emerald-400" />
                {t.contact.operationalHours}
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                {t.contact.zeroObligation}
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
