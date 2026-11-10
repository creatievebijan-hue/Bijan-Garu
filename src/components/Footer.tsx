import React from 'react';
import { Phone, MessageSquare, AlertCircle, ArrowUp, Youtube } from 'lucide-react';
import { Language, translations } from '../translations';

interface FooterProps {
  lang: Language;
  onSetLang: (lang: Language) => void;
  onOpenPrivacy: () => void;
  onOpenDisclaimer: () => void;
  onBookClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  lang,
  onSetLang,
  onOpenPrivacy,
  onOpenDisclaimer,
  onBookClick
}) => {
  const t = translations[lang];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      
      {/* Upper Footer: Brand & Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-slate-950 p-0.5 shadow-md shadow-amber-500/20 flex items-center justify-center overflow-hidden">
                <img
                  src="/assets/aistudio/LOGO_b6cc7bfa.JPG"
                  alt="MONOTOSH DADA Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {t.brandName}
                  </h3>
                  {lang === 'bn' && (
                    <span className="text-xs px-1.5 py-0.5 rounded bg-slate-800 text-amber-300 font-semibold border border-slate-700">
                      মনোতোষ দাদা
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-400">
                  {t.tagline}
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              {t.footer.brandDesc}
            </p>

            <div className="pt-2 space-y-2">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                {t.footer.directContact}
              </div>
              <a
                href="tel:7980248170"
                className="inline-flex items-center gap-2 text-2xl font-black text-amber-400 hover:text-amber-300 transition-colors"
              >
                <Phone className="w-5 h-5 text-amber-400" />
                <span>7980248170</span>
              </a>
            </div>

            {/* Language Switcher in Footer */}
            <div className="pt-3 flex items-center gap-2 text-xs text-slate-400">
              <span>ভাষা / Language:</span>
              <div className="inline-flex rounded-lg bg-slate-900 p-0.5 border border-slate-800">
                <button
                  type="button"
                  onClick={() => onSetLang('bn')}
                  className={`px-2.5 py-1 rounded text-xs font-bold transition-colors cursor-pointer ${
                    lang === 'bn' ? 'bg-amber-400 text-slate-950' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  বাংলা
                </button>
                <button
                  type="button"
                  onClick={() => onSetLang('en')}
                  className={`px-2.5 py-1 rounded text-xs font-bold transition-colors cursor-pointer ${
                    lang === 'en' ? 'bg-amber-400 text-slate-950' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  English
                </button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              {t.footer.navTitle}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#home" className="hover:text-amber-400 transition-colors">
                  {t.nav.home}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-400 transition-colors">
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-amber-400 transition-colors">
                  {t.nav.process}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber-400 transition-colors">
                  {t.nav.faq}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition-colors">
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Policy Links */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              {t.footer.legalTitle}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={onOpenPrivacy}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  {t.footer.privacy}
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenDisclaimer}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  {t.footer.disclaimer}
                </button>
              </li>
              <li>
                <button
                  onClick={onBookClick}
                  className="text-amber-400 hover:underline cursor-pointer font-medium"
                >
                  {t.footer.requestCta}
                </button>
              </li>
            </ul>

            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-400 space-y-2">
              <span className="font-semibold text-slate-300 block">{t.footer.hoursTitle}</span>
              <span>{t.footer.hoursValue}</span>
              <div className="pt-1 flex flex-col gap-2">
                <a
                  href="https://wa.me/917980248170?text=Hello%20Monotosh%20Dada"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:underline flex items-center gap-1 font-semibold"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  {t.footer.chatWhatsapp}
                </a>
                <a
                  href="https://www.youtube.com/@MonotoshDada/featured"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-400 hover:underline flex items-center gap-1 font-semibold"
                >
                  <Youtube className="w-3.5 h-3.5" />
                  YouTube Channel
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Prominent Medical Disclaimer Box */}
      <div className="border-t border-slate-800/80 bg-slate-950/60 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto rounded-2xl bg-slate-900/90 border border-amber-500/20 p-5 sm:p-6 text-center space-y-2">
          <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <AlertCircle className="w-4 h-4" />
            <span>{t.footer.mandatoryDisclaimerBadge}</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-4xl mx-auto font-normal">
            {t.footer.mandatoryDisclaimerText}
          </p>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-slate-900 bg-black/60 py-6 px-4 sm:px-6 lg:px-8 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>{t.footer.copyright}</p>
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenDisclaimer}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              {t.footer.disclaimer}
            </button>
            <span>•</span>
            <button
              onClick={onOpenPrivacy}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              {t.footer.privacy}
            </button>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-slate-400 hover:text-amber-400 transition-colors cursor-pointer"
            >
              <span>{t.footer.backToTop}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

    </footer>
  );
};
