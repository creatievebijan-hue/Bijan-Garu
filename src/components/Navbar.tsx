import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Menu, X, Sparkles, Clock, Globe, Youtube, MessageCircle } from 'lucide-react';
import { Language, translations } from '../translations';

interface NavbarProps {
  lang: Language;
  onSetLang: (lang: Language) => void;
  onBookClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, onSetLang, onBookClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.services, href: '#services' },
    { name: t.nav.process, href: '#process' },
    { name: t.nav.faq, href: '#faq' },
    { name: t.nav.contact, href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Advisory Bar */}
      <div className="bg-slate-900 border-b border-slate-800 text-slate-300 text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-amber-500/10 text-amber-300 border border-amber-500/20">
              {t.advisoryBadge}
            </span>
            <span className="hidden sm:inline text-slate-400">
              {t.advisoryNotice}
            </span>
          </div>

          <div className="flex items-center gap-4 ml-auto text-xs">
            {/* Social Links */}
            <div className="flex items-center gap-2 pr-2 border-r border-slate-700">
              <a
                href="https://www.youtube.com/@MonotoshDada/featured"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-400 hover:text-red-300 transition-colors"
                title="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/917980248170"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                title="WhatsApp"
              >
                <img src="/assets/aistudio/WhatsApp_Logo_green.svg_4f275858.webp" alt="WhatsApp" className="w-4 h-4" />
              </a>
            </div>

            {/* Language Switcher Pill */}
            <div className="flex items-center bg-slate-950 rounded-lg p-0.5 border border-slate-700">
              <button
                type="button"
                onClick={() => onSetLang('bn')}
                className={`px-2 py-0.5 rounded text-[11px] font-bold transition-all cursor-pointer ${
                  lang === 'bn'
                    ? 'bg-amber-400 text-slate-950 shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="বাংলায় দেখুন"
              >
                বাংলা
              </button>
              <button
                type="button"
                onClick={() => onSetLang('en')}
                className={`px-2 py-0.5 rounded text-[11px] font-bold transition-all cursor-pointer ${
                  lang === 'en'
                    ? 'bg-amber-400 text-slate-950 shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="View in English"
              >
                EN
              </button>
            </div>

            <span className="hidden md:flex items-center gap-1 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              {t.timing}
            </span>
            <a
              href="tel:7980248170"
              className="flex items-center gap-1.5 font-semibold text-amber-400 hover:text-amber-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>7980248170</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full transition-all duration-200 border-b ${
          isScrolled
            ? 'bg-slate-950/90 glass-nav border-slate-800/80 shadow-lg shadow-black/20'
            : 'bg-slate-950/95 border-slate-800/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand Logo & Tagline */}
          <a href="#home" className="flex items-center gap-3 group text-left">
            <div className="w-12 h-12 rounded-xl bg-slate-950 p-0.5 shadow-md shadow-amber-500/20 flex items-center justify-center overflow-hidden">
              <img
                src="/assets/aistudio/LOGO_b6cc7bfa.JPG"
                alt="MONOTOSH DADA Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold tracking-tight text-white group-hover:text-amber-400 transition-colors">
                  MONOTOSH DADA
                </span>
                {lang === 'bn' && (
                  <span className="text-xs px-1.5 py-0.5 rounded bg-slate-800 text-amber-300 font-semibold border border-slate-700">
                    মনোতোষ দাদা
                  </span>
                )}
              </div>
              <span className="text-[11px] font-medium tracking-wide text-slate-400 -mt-0.5">
                {t.tagline}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors relative py-1 hover:after:w-full after:w-0 after:h-0.5 after:bg-amber-400 after:absolute after:bottom-0 after:left-0 after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://wa.me/917980248170?text=Hello%20Monotosh%20Dada%2C%20I%20would%20like%20to%20inquire%20about%20Hair%20Transplant%20Consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
              title="Chat on WhatsApp"
              aria-label="WhatsApp Monotosh Dada"
            >
              <img src="/assets/aistudio/WhatsApp_Logo_green.svg_4f275858.webp" alt="WhatsApp" className="w-6 h-6" />
            </a>

            <button
              onClick={onBookClick}
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 transition-all hover:border-slate-600 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              {t.bookConsultation}
            </button>

            <a
              href="tel:7980248170"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-lg shadow-amber-500/20 active:scale-95 transition-all"
            >
              <Phone className="w-4 h-4 animate-bounce" />
              <span>{t.callNow}</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href="tel:7980248170"
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 shadow-sm"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{t.callNow}</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-950 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <span className="text-xs text-slate-400 font-medium">ভাষা নির্বাচন / Language:</span>
              <div className="flex items-center bg-slate-900 rounded-lg p-0.5 border border-slate-700">
                <button
                  type="button"
                  onClick={() => onSetLang('bn')}
                  className={`px-3 py-1 rounded text-xs font-bold transition-all ${
                    lang === 'bn'
                      ? 'bg-amber-400 text-slate-950'
                      : 'text-slate-400'
                  }`}
                >
                  বাংলা
                </button>
                <button
                  type="button"
                  onClick={() => onSetLang('en')}
                  className={`px-3 py-1 rounded text-xs font-bold transition-all ${
                    lang === 'en'
                      ? 'bg-amber-400 text-slate-950'
                      : 'text-slate-400'
                  }`}
                >
                  English
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-800">
              <a
                href="tel:7980248170"
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-amber-400 text-slate-950 font-bold text-xs shadow-sm"
              >
                <Phone className="w-3.5 h-3.5" />
                {t.callNow}
              </a>
              <a
                href="https://wa.me/917980248170?text=Hello%20Monotosh%20Dada%2C%20I%20would%20like%20to%20inquire%20about%20Hair%20Transplant%20Consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-emerald-500 text-white font-bold text-xs shadow-sm hover:opacity-90 transition-opacity"
              >
                <img src="/assets/aistudio/WhatsApp_Logo_green.svg_4f275858.webp" alt="WhatsApp" className="w-4 h-4" />
                {t.whatsApp}
              </a>
            </div>

            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:bg-slate-800/80 hover:text-amber-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookClick();
                }}
                className="w-full py-3 rounded-xl bg-slate-900 border border-amber-500/30 text-amber-400 text-sm font-semibold hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                {t.requestConsultation}
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
