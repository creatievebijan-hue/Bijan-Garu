import React from 'react';
import { X, ShieldAlert, FileText } from 'lucide-react';
import { Language, translations } from '../translations';

interface LegalModalProps {
  isOpen: boolean;
  type: 'privacy' | 'disclaimer';
  lang: Language;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, type, lang, onClose }) => {
  if (!isOpen) return null;
  const t = translations[lang];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 max-h-[85vh] overflow-y-auto text-slate-200 shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {type === 'disclaimer' ? (
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-emerald-400 pb-3 border-b border-slate-800">
              <ShieldAlert className="w-6 h-6" />
              <h3 className="text-xl font-bold text-white">{t.legalModal.disclaimerTitle}</h3>
            </div>

            {lang === 'bn' ? (
              <div className="space-y-3 text-sm text-slate-300 leading-relaxed">
                <p className="font-semibold text-emerald-300">
                  &quot;মনোতোষ দাদা একটি পরামর্শ ও লিড-জেনারেশন ব্র্যান্ড এবং কোনো মেডিকেল ক্লিনিক বা স্বাস্থ্যসেবা প্রদানকারী নন। চিকিৎসার উপযোগিতা, প্রক্রিয়া এবং চিকিৎসা পরামর্শ অবশ্যই যোগ্য ডাক্তারের মাধ্যমে নির্ধারিত হওয়া উচিত। ফলাফল ব্যক্তিভেদে ভিন্ন হতে পারে।&quot;
                </p>

                <h4 className="text-white font-bold pt-2">১. পরামর্শ সেবার প্রকৃতি</h4>
                <p>
                  মনোতোষ দাদা কেবলমাত্র একটি স্বাধীন পরামর্শ, তথ্য সহায়তা এবং যোগাযোগ সমন্বয়কারী হিসেবে কাজ করে। মনোতোষ দাদা কোনো সার্জিক্যাল প্রক্রিয়া সম্পন্ন করে না, কোনো ওষুধ দেয় না এবং কোনো আনুষ্ঠানিক চিকিৎসা বা প্রেসক্রিপশন প্রদান করে না।
                </p>

                <h4 className="text-white font-bold pt-2">২. স্বাধীন চিকিৎসা প্রতিষ্ঠান</h4>
                <p>
                  যেকোনো ডাক্তার, সার্জন বা ক্লিনিকের সাথে যোগাযোগ করিয়ে দেওয়ার উদ্দেশ্য কেবল তথ্য সহায়তা। ক্লিনিক ও চিকিৎসক বেছে নেওয়ার সিদ্ধান্ত সম্পূর্ণভাবে সেবাগ্রহীতার। রোগীদের অবশ্যই যোগ্য চিকিৎসকের অধীনে পৃথক শারীরিক ও স্ক্যাল্প পরীক্ষা সম্পন্ন করতে হবে।
                </p>

                <h4 className="text-white font-bold pt-2">৩. ফলাফলের পরিবর্তনশীলতা</h4>
                <p>
                  হেয়ার ট্রান্সপ্লান্টের ফলাফলের কোনো গ্যারান্টি দেওয়া হয় না। ফলাফল ব্যক্তির জিনগত বৈশিষ্ট্য, ডোনার এরিয়ার ঘনত্ব, চিকিৎসার সঠিক নিয়মাবলি পালন এবং অপারেটিং ক্লিনিকের ওপর নির্ভর করে।
                </p>
              </div>
            ) : (
              <div className="space-y-3 text-sm text-slate-300 leading-relaxed">
                <p className="font-semibold text-emerald-300">
                  &quot;MONOTOSH DADA is a consultation and lead-generation brand and is not a medical clinic or medical professional. Treatment suitability, procedures and medical advice should be determined by a qualified medical professional. Results may vary.&quot;
                </p>

                <h4 className="text-white font-bold pt-2">1. Nature of Consultation Services</h4>
                <p>
                  MONOTOSH DADA operates solely as an independent consultation, orientation, and client-assistance service. MONOTOSH DADA does NOT perform surgical procedures, does NOT administer medication, and does NOT provide formal medical diagnoses or prescriptions.
                </p>

                <h4 className="text-white font-bold pt-2">2. Independent Medical Providers</h4>
                <p>
                  Any referrals, introductions, or connections made to medical doctors, surgeons, or clinics are for informational facilitation purposes. The choice of provider rests entirely with the client. Patients must undergo individual medical screening, scalp analysis, and surgical planning directly with licensed healthcare providers.
                </p>

                <h4 className="text-white font-bold pt-2">3. Variable Outcomes</h4>
                <p>
                  No representation is made that hair transplant results are guaranteed. Outcomes depend upon individual scalp genetics, donor follicular density, medical history, post-procedure adherence, and the surgical skill of the operating clinic.
                </p>
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-emerald-400 pb-3 border-b border-slate-800">
              <FileText className="w-6 h-6" />
              <h3 className="text-xl font-bold text-white">{t.legalModal.privacyTitle}</h3>
            </div>

            {lang === 'bn' ? (
              <div className="space-y-3 text-sm text-slate-300 leading-relaxed">
                <p>
                  মনোতোষ দাদা সেবাগ্রহীতাদের ব্যক্তিগত তথ্যের পূর্ণ গোপনীয়তা ও সুরক্ষাকে সর্বোচ্চ প্রাধান্য দেয়।
                </p>

                <h4 className="text-white font-bold pt-2">আমরা কী তথ্য সংগ্রহ করি</h4>
                <p>
                  যখন আপনি আমাদের মাধ্যমে পরামর্শের অনুরোধ পাঠান বা ফোন অথবা হোয়াটসঅ্যাপে যোগাযোগ করেন, তখন আপনার স্বেচ্ছায় প্রদত্ত নাম, ফোন নম্বর, যোগাযোগের পছন্দ এবং চুল পড়ার বিবরণ সংরক্ষিত হয়।
                </p>

                <h4 className="text-white font-bold pt-2">তথ্যের ব্যবহার</h4>
                <ul className="list-disc list-inside space-y-1 text-slate-300">
                  <li>আপনার প্রশ্নের সঠিক ও তাৎক্ষণিক উত্তর প্রদান করতে</li>
                  <li>ব্যক্তিগত পরামর্শ ও প্রাথমিক তথ্য সরবরাহ করতে</li>
                  <li>আপনার সম্মতিসাপেক্ষে উপযুক্ত ক্লিনিক ও ডাক্তারের সাথে সংযোগ ঘটাতে</li>
                </ul>

                <h4 className="text-white font-bold pt-2">স্প্যাম-মুক্ত অঙ্গীকার</h4>
                <p>
                  আমরা কখনোই আপনার ব্যক্তিগত তথ্য কোনো তৃতীয় পক্ষ বা বিপণনকারী সংস্থার কাছে বিক্রি বা প্রকাশ করি না।
                </p>
              </div>
            ) : (
              <div className="space-y-3 text-sm text-slate-300 leading-relaxed">
                <p>
                  At MONOTOSH DADA, we prioritize the confidentiality and security of our visitors and clients.
                </p>

                <h4 className="text-white font-bold pt-2">Information We Collect</h4>
                <p>
                  When you submit a consultation request or contact us via phone or WhatsApp, we collect details you provide voluntarily: your name, phone number, preferred communication method, and described hair loss concerns.
                </p>

                <h4 className="text-white font-bold pt-2">How We Use Your Information</h4>
                <ul className="list-disc list-inside space-y-1 text-slate-300">
                  <li>Respond to your direct consultation inquiries</li>
                  <li>Provide personalized hair restoration orientation</li>
                  <li>Facilitate connection with suitable medical providers upon your consent</li>
                </ul>

                <h4 className="text-white font-bold pt-2">Zero Spam Guarantee</h4>
                <p>
                  We do not sell, rent, or trade your personal contact details to third-party telemarketers or advertisers. All conversations remain strictly private.
                </p>
              </div>
            )}
          </div>
        )}

        <div className="mt-6 pt-4 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold cursor-pointer"
          >
            {t.legalModal.close}
          </button>
        </div>

      </div>
    </div>
  );
};
