/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { HairStageGuide } from './components/HairStageGuide';
import { HowItWorks } from './components/HowItWorks';
import { WhyChooseUs } from './components/WhyChooseUs';
import { BeforeAfter } from './components/BeforeAfter';
import { FAQ } from './components/FAQ';
import { LeadForm } from './components/LeadForm';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingMobileBar } from './components/FloatingMobileBar';
import { LegalModal } from './components/LegalModals';
import { Language } from './translations';

export default function App() {
  // Default to Bangla ('bn') as requested by user
  const [lang, setLang] = useState<Language>('bn');
  const [selectedService, setSelectedService] = useState<string>('');
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    type: 'privacy' | 'disclaimer';
  }>({
    isOpen: false,
    type: 'privacy'
  });

  const scrollToLeadForm = () => {
    const el = document.getElementById('lead-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceName: string) => {
    setSelectedService(serviceName);
    scrollToLeadForm();
  };

  const openModal = (type: 'privacy' | 'disclaimer') => {
    setModalState({ isOpen: true, type });
  };

  const closeModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-emerald-400 selection:text-slate-950 pb-16 sm:pb-0">
      
      {/* Sticky Navigation Header with Language Toggle */}
      <Navbar
        lang={lang}
        onSetLang={setLang}
        onBookClick={scrollToLeadForm}
      />

      {/* Main Page Flow */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          lang={lang}
          onBookClick={scrollToLeadForm}
        />

        {/* About Section */}
        <About
          lang={lang}
          onBookClick={scrollToLeadForm}
        />

        {/* Services Section */}
        <Services
          lang={lang}
          onSelectService={handleSelectService}
        />

        {/* Interactive Hair Loss Stage Guide */}
        <HairStageGuide
          lang={lang}
          onSelectStage={handleSelectService}
        />

        {/* How It Works (4-Step Process) */}
        <HowItWorks
          lang={lang}
          onBookClick={scrollToLeadForm}
        />

        {/* Why Choose Monotosh Dada */}
        <WhyChooseUs
          lang={lang}
        />

        {/* Before & After Conceptual Showcase */}
        <BeforeAfter
          lang={lang}
          onBookClick={scrollToLeadForm}
        />

        {/* FAQ Section */}
        <FAQ
          lang={lang}
          onBookClick={scrollToLeadForm}
        />

        {/* Interactive Lead Generation Consultation Form */}
        <LeadForm
          lang={lang}
          preselectedService={selectedService}
          onClearPreselection={() => setSelectedService('')}
        />

        {/* Large Contact CTA Section */}
        <ContactSection
          lang={lang}
          onBookClick={scrollToLeadForm}
        />
      </main>

      {/* Footer */}
      <Footer
        lang={lang}
        onSetLang={setLang}
        onOpenPrivacy={() => openModal('privacy')}
        onOpenDisclaimer={() => openModal('disclaimer')}
        onBookClick={scrollToLeadForm}
      />

      {/* Mobile Floating Action Bar */}
      <FloatingMobileBar
        lang={lang}
        onBookClick={scrollToLeadForm}
      />

      {/* Modals for Privacy Policy & Full Disclaimer */}
      <LegalModal
        isOpen={modalState.isOpen}
        type={modalState.type}
        lang={lang}
        onClose={closeModal}
      />

    </div>
  );
}
