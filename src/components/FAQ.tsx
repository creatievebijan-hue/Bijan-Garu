import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Phone, MessageSquare, AlertCircle } from 'lucide-react';
import { Language, translations } from '../translations';

interface FAQProps {
  lang: Language;
  onBookClick: () => void;
}

export const FAQ: React.FC<FAQProps> = ({ lang, onBookClick }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const t = translations[lang];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-slate-900/60 text-slate-100 border-b border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-400/10 text-emerald-300 border border-emerald-400/20 mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>{t.faq.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.faq.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            {t.faq.subtitle}
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {t.faq.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className={`rounded-2xl transition-all duration-200 border ${
                  isOpen
                    ? 'bg-slate-950 border-emerald-500/40 shadow-lg'
                    : 'bg-slate-900/80 hover:bg-slate-900 border-slate-800'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-white flex items-center gap-3">
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-800 text-emerald-400 border border-slate-700">
                      Q{index + 1}
                    </span>
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center shrink-0 text-slate-300 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-emerald-400 text-slate-950' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-slate-800/60 mt-1">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-slate-950 border border-slate-800 text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <AlertCircle className="w-4 h-4" />
            <span>{t.faq.boxTag}</span>
          </div>
          <h3 className="text-xl font-bold text-white">
            {t.faq.boxTitle}
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 max-w-lg mx-auto">
            {t.faq.boxDesc}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href="tel:7980248170"
              className="px-5 py-2.5 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>{t.callNow}: 7980248170</span>
            </a>
            <a
              href="https://wa.me/917980248170?text=Hello%20Monotosh%20Dada%2C%20I%20have%20questions%20regarding%20Hair%20Transplant%20Consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{t.whatsApp}</span>
            </a>
            <button
              onClick={onBookClick}
              className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs sm:text-sm transition-colors border border-slate-700 cursor-pointer"
            >
              {t.requestConsultation}
            </button>
          </div>
        </div>


      </div>
    </section>
  );
};
