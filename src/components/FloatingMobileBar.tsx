import React from 'react';
import { Phone, MessageSquare, Calendar } from 'lucide-react';
import { Language, translations } from '../translations';

interface FloatingMobileBarProps {
  lang: Language;
  onBookClick: () => void;
}

export const FloatingMobileBar: React.FC<FloatingMobileBarProps> = ({ lang, onBookClick }) => {
  const t = translations[lang];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 glass-nav border-t border-slate-800 p-2 sm:hidden shadow-2xl">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* Call Now */}
        <a
          href="tel:7980248170"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-400 text-slate-950 font-bold text-[11px] shadow-sm active:scale-95 transition-all"
        >
          <Phone className="w-4 h-4 mb-0.5 animate-bounce" />
          <span>{t.callNow}</span>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/917980248170?text=Hello%20Monotosh%20Dada%2C%20I%20would%20like%20to%20inquire%20about%20Hair%20Transplant%20Consultation"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-600 text-white font-bold text-[11px] shadow-sm active:scale-95 transition-all hover:opacity-90"
        >
          <img src="/assets/aistudio/WhatsApp_Logo_green.svg_4f275858.webp" alt="WhatsApp" className="w-5 h-5 mb-0.5" />
          <span>{t.whatsApp}</span>
        </a>

        {/* Book */}
        <button
          onClick={onBookClick}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 font-bold text-[11px] shadow-sm active:scale-95 transition-all cursor-pointer"
        >
          <Calendar className="w-4 h-4 mb-0.5 text-emerald-400" />
          <span>{lang === 'bn' ? 'পরামর্শ' : 'Consult'}</span>
        </button>
      </div>
    </div>
  );
};
