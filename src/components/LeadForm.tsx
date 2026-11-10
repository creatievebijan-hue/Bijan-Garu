import React, { useState, useEffect } from 'react';
import { Send, Phone, CheckCircle2, MessageSquare, AlertCircle, Shield, Sparkles } from 'lucide-react';
import { LeadFormData } from '../types';
import { Language, translations } from '../translations';

interface LeadFormProps {
  lang: Language;
  preselectedService?: string;
  onClearPreselection?: () => void;
}

export const LeadForm: React.FC<LeadFormProps> = ({
  lang,
  preselectedService,
  onClearPreselection
}) => {
  const t = translations[lang];

  const [formData, setFormData] = useState<LeadFormData>({
    fullName: '',
    phoneNumber: '',
    contactMethod: 'Phone Call',
    hairConcern: t.form.concernOptions[0] || 'Hair Transplant Consultation',
    message: '',
    photos: { front: null, top: null, back: null }
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [recentLead, setRecentLead] = useState<LeadFormData | null>(null);

  // Update hairConcern when preselectedService or language changes
  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({
        ...prev,
        hairConcern: preselectedService
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        hairConcern: t.form.concernOptions[0] || 'Hair Transplant Consultation'
      }));
    }
  }, [preselectedService, lang]);

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = t.form.errors.nameRequired;
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = t.form.errors.nameLength;
    }

    const cleanedPhone = formData.phoneNumber.replace(/[\s\-\+\(\)]/g, '');
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = t.form.errors.phoneRequired;
    } else if (cleanedPhone.length < 10) {
      newErrors.phoneNumber = t.form.errors.phoneInvalid;
    }

    if (!formData.hairConcern) {
      newErrors.hairConcern = t.form.errors.concernRequired;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    const submissionData: LeadFormData = {
      ...formData,
      submittedAt: new Date().toISOString()
    };

    setTimeout(() => {
      try {
        const storedLeads = JSON.parse(localStorage.getItem('monotosh_consultation_leads') || '[]');
        storedLeads.unshift(submissionData);
        localStorage.setItem('monotosh_consultation_leads', JSON.stringify(storedLeads));
      } catch (err) {
        console.error('Local lead storage error:', err);
      }

      setIsSubmitting(false);
      setIsSubmitted(true);
      setRecentLead(submissionData);
    }, 700);
  };

  const handleResetForm = () => {
    setFormData({
      fullName: '',
      phoneNumber: '',
      contactMethod: 'Phone Call',
      hairConcern: t.form.concernOptions[0] || 'Hair Transplant Consultation',
      message: '',
      photos: { front: null, top: null, back: null }
    });
    setErrors({});
    setIsSubmitted(false);
    if (onClearPreselection) {
      onClearPreselection();
    }
  };

  return (
    <section id="lead-form" className="py-20 bg-slate-950 text-slate-100 border-b border-slate-800 scroll-mt-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-400/10 text-amber-300 border border-amber-400/20 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.form.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.form.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            {t.form.subtitle}
          </p>
        </div>

        {/* Card Container */}
        <div className="bg-slate-900 rounded-3xl border border-slate-800 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          {/* Success State View */}
          {isSubmitted ? (
            <div className="py-8 text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-white">
                  {t.form.successTitle}
                </h3>
                <p className="text-slate-300 text-sm max-w-lg mx-auto leading-relaxed">
                  {t.form.successDesc(
                    recentLead?.fullName || '',
                    recentLead?.hairConcern || '',
                    t.form.methodNames[recentLead?.contactMethod || 'Phone Call'] || recentLead?.contactMethod || '',
                    recentLead?.phoneNumber || ''
                  )}
                </p>
              </div>

              {/* Instant Communication Shortcut */}
              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 max-w-md mx-auto space-y-3 text-left">
                <div className="text-xs font-semibold text-slate-300">
                  {t.form.instantHelpTitle}
                </div>
                <div className="grid sm:grid-cols-2 gap-2">
                  <a
                    href="tel:7980248170"
                    className="py-2.5 px-3 rounded-xl bg-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 hover:bg-amber-300 transition-colors shadow-sm"
                  >
                    <Phone className="w-4 h-4" />
                    7980248170
                  </a>
                  <a
                    href={`https://wa.me/917980248170?text=Hi%20Monotosh%20Dada%2C%20I%20just%20submitted%20a%20consultation%20request%20for%20${encodeURIComponent(
                      recentLead?.hairConcern || 'Hair Transplant'
                    )}.%20My%20name%20is%20${encodeURIComponent(recentLead?.fullName || '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3 rounded-xl bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-2 hover:bg-emerald-500 transition-colors shadow-sm"
                  >
                    <MessageSquare className="w-4 h-4" />
                    {t.whatsApp}
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleResetForm}
                  className="text-xs text-slate-400 hover:text-white underline cursor-pointer"
                >
                  {t.form.submitAnother}
                </button>
              </div>
            </div>
          ) : (
            /* Interactive Consultation Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Form header notice */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <Shield className="w-4 h-4 text-emerald-400" />
                  <span>{t.form.confidentialNotice}</span>
                </div>
                <div className="text-xs text-amber-400 font-semibold">
                  {t.form.helplineText}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                
                {/* Full Name */}
                <div className="space-y-2">
                  <label htmlFor="fullName" className="block text-xs font-semibold text-slate-300">
                    {t.form.fullNameLabel} <span className="text-amber-400">*</span>
                  </label>
                  <div className="relative">
                    <input
                      id="fullName"
                      type="text"
                      placeholder={t.form.fullNamePlaceholder}
                      value={formData.fullName}
                      onChange={(e) => {
                        setFormData({ ...formData, fullName: e.target.value });
                        if (errors.fullName) setErrors({ ...errors, fullName: '' });
                      }}
                      className={`w-full px-4 py-3 rounded-xl bg-slate-950 border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                        errors.fullName
                          ? 'border-rose-500 focus:border-rose-500'
                          : 'border-slate-800 focus:border-amber-400'
                      }`}
                    />
                  </div>
                  {errors.fullName && (
                    <p className="text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Phone Number */}
                <div className="space-y-2">
                  <label htmlFor="phoneNumber" className="block text-xs font-semibold text-slate-300">
                    {t.form.phoneLabel} <span className="text-amber-400">*</span>
                  </label>
                  <div className="relative">
                    <input
                      id="phoneNumber"
                      type="tel"
                      placeholder={t.form.phonePlaceholder}
                      value={formData.phoneNumber}
                      onChange={(e) => {
                        setFormData({ ...formData, phoneNumber: e.target.value });
                        if (errors.phoneNumber) setErrors({ ...errors, phoneNumber: '' });
                      }}
                      className={`w-full px-4 py-3 rounded-xl bg-slate-950 border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                        errors.phoneNumber
                          ? 'border-rose-500 focus:border-rose-500'
                          : 'border-slate-800 focus:border-amber-400'
                      }`}
                    />
                  </div>
                  {errors.phoneNumber && (
                    <p className="text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.phoneNumber}
                    </p>
                  )}
                </div>

              </div>

              {/* Preferred Contact Method */}
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-slate-300">
                  {t.form.preferredMethodLabel} <span className="text-amber-400">*</span>
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {t.form.methods.map((method) => (
                    <button
                      key={method}
                      type="button"
                      onClick={() => setFormData({ ...formData, contactMethod: method })}
                      className={`py-3 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all border cursor-pointer ${
                        formData.contactMethod === method
                          ? 'bg-amber-400 text-slate-950 border-amber-400 shadow-sm'
                          : 'bg-slate-950 text-slate-300 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      {t.form.methodNames[method] || method}
                    </button>
                  ))}
                </div>
              </div>

              {/* Hair Loss Concern Selection */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label htmlFor="hairConcern" className="block text-xs font-semibold text-slate-300">
                    {t.form.concernLabel} <span className="text-amber-400">*</span>
                  </label>
                  {preselectedService && (
                    <span className="text-[11px] text-amber-400 font-medium">
                      {lang === 'bn' ? 'বাছাইকৃত সেবা' : 'Selected from section'}
                    </span>
                  )}
                </div>
                <select
                  id="hairConcern"
                  value={formData.hairConcern}
                  onChange={(e) => setFormData({ ...formData, hairConcern: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                >
                  {t.form.concernOptions.map((item) => (
                    <option key={item} value={item} className="bg-slate-900 text-white">
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message / Additional Details */}
              <div className="space-y-2">
                <label htmlFor="message" className="block text-xs font-semibold text-slate-300">
                  {t.form.messageLabel}
                </label>
                <textarea
                  id="message"
                  rows={3}
                  placeholder={t.form.messagePlaceholder}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                />
              </div>

              {/* Photo Upload Section */}
              <div className="space-y-3 pt-2">
                <label className="block text-xs font-semibold text-slate-300">
                  {lang === 'bn' ? 'মাথার ছবি আপলোড (তিনটি অ্যাঙ্গেল)' : 'Upload Head Photos (3 Angles)'}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {(['front', 'top', 'back'] as const).map((angle) => (
                    <div key={angle} className="flex flex-col items-center gap-2">
                      <div className="w-24 h-24 bg-slate-950 border border-dashed border-slate-700 rounded-xl flex items-center justify-center overflow-hidden relative">
                        {formData.photos[angle] ? (
                          <span className="text-[10px] text-emerald-400 p-1 text-center truncate">
                            {formData.photos[angle]?.name}
                          </span>
                        ) : (
                          <div className="text-[10px] text-slate-500 text-center p-2">
                            {angle === 'front' && (lang === 'bn' ? 'সামন থেকে' : 'Front')}
                            {angle === 'top' && (lang === 'bn' ? 'উপর থেকে' : 'Top')}
                            {angle === 'back' && (lang === 'bn' ? 'পিছন থেকে' : 'Back')}
                          </div>
                        )}
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => {
                            const file = e.target.files?.[0] || null;
                            setFormData((prev) => ({
                              ...prev,
                              photos: { ...prev.photos, [angle]: file }
                            }));
                          }}
                          className="absolute inset-0 opacity-0 cursor-pointer"
                        />
                      </div>
                      <span className="text-[10px] text-slate-400">
                        {angle === 'front' && (lang === 'bn' ? 'সামনে' : 'Front')}
                        {angle === 'top' && (lang === 'bn' ? 'উপর' : 'Top')}
                        {angle === 'back' && (lang === 'bn' ? 'পিছন' : 'Back')}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Legal & Role Reminder */}
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/80 text-[11px] text-slate-400 leading-relaxed">
                {t.form.disclaimerText}
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl text-base font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 active:scale-[0.99] disabled:opacity-70 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-amber-500/20"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-5 h-5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                    <span>{t.form.btnSubmitting}</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>{t.form.btnSubmit}</span>
                  </>
                )}
              </button>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
