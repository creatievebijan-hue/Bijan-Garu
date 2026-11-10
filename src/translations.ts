export type Language = 'bn' | 'en';

export interface Translations {
  // Common & Brand
  brandName: string;
  brandNameBangla: string;
  tagline: string;
  phone: string;
  advisoryBadge: string;
  advisoryNotice: string;
  timing: string;
  callNow: string;
  whatsApp: string;
  bookConsultation: string;
  requestConsultation: string;
  getConsultation: string;

  // Nav
  nav: {
    home: string;
    about: string;
    services: string;
    process: string;
    faq: string;
    contact: string;
  };

  // Hero
  hero: {
    badge: string;
    titleStart: string;
    titleHighlight: string;
    titleEnd: string;
    subtitle: string;
    roleNoticeTitle: string;
    roleNoticeText: string;
    directHelpline: string;
    copied: string;
    copy: string;
    badge1: string;
    badge2: string;
    badge3: string;
    cardTag: string;
    cardTitle: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
    widgetTitle: string;
    widgetSubtitle: string;
    widgetCall: string;
    disclaimerNote: string;
  };

  // About
  about: {
    badge: string;
    title: string;
    subtitle: string;
    p1: string;
    p2: string;
    transparencyTitle: string;
    transparencyText: string;
    whatWeDoTitle: string;
    whatWeDoItems: string[];
    whatClinicsDoTitle: string;
    whatClinicsDoItems: string[];
    btnConsultation: string;
    btnCall: string;
    card1Title: string;
    card1Desc: string;
    card2Title: string;
    card2Desc: string;
    card3Title: string;
    card3Desc: string;
  };

  // Services
  services: {
    badge: string;
    title: string;
    subtitle: string;
    featuredBadge: string;
    directCardTag: string;
    directCardTitle: string;
    directCardDesc: string;
    directCardTiming: string;
    items: {
      id: string;
      title: string;
      shortDescription: string;
      tags: string[];
    }[];
  };

  // Hair Stage Guide
  stageGuide: {
    badge: string;
    title: string;
    subtitle: string;
    focusLabel: string;
    approachLabel: string;
    exploreTitle: (stage: string) => string;
    exploreDesc: string;
    btnLabel: (stage: string) => string;
    stages: {
      stage: string;
      name: string;
      description: string;
      consultationFocus: string;
      typicalApproach: string;
    }[];
  };

  // How it works
  process: {
    badge: string;
    title: string;
    subtitle: string;
    ctaQuestion: string;
    ctaSubtext: string;
    ctaButton: string;
    steps: {
      number: string;
      title: string;
      description: string;
      detail: string;
    }[];
  };

  // Why Choose Us
  whyUs: {
    badge: string;
    title: string;
    subtitle: string;
    ethicsTag: string;
    ethicsTitle: string;
    ethicsDesc: string;
    ethicsNote: string;
    benefits: {
      title: string;
      description: string;
      tag: string;
    }[];
  };

  // Before & After
  beforeAfter: {
    badge: string;
    title: string;
    subtitle: string;
    disclaimerTitle: string;
    disclaimerQuote: string;
    disclaimerSub: string;
    beforeLabel: string;
    afterLabel: string;
    potentialTarget: string;
    btnDiscuss: string;
    cases: {
      id: string;
      title: string;
      area: string;
      duration: string;
      description: string;
      beforeImg: string;
      afterImg: string;
    }[];
  };

  // FAQ
  faq: {
    badge: string;
    title: string;
    subtitle: string;
    boxTag: string;
    boxTitle: string;
    boxDesc: string;
    faqs: {
      question: string;
      answer: string;
    }[];
  };

  // Lead Form
  form: {
    badge: string;
    title: string;
    subtitle: string;
    confidentialNotice: string;
    helplineText: string;
    fullNameLabel: string;
    fullNamePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    preferredMethodLabel: string;
    methods: ('Phone Call' | 'WhatsApp' | 'SMS')[];
    methodNames: Record<string, string>;
    concernLabel: string;
    concernOptions: string[];
    messageLabel: string;
    messagePlaceholder: string;
    disclaimerText: string;
    btnSubmit: string;
    btnSubmitting: string;
    successTitle: string;
    successDesc: (name: string, concern: string, method: string, phone: string) => string;
    instantHelpTitle: string;
    submitAnother: string;
    errors: {
      nameRequired: string;
      nameLength: string;
      phoneRequired: string;
      phoneInvalid: string;
      concernRequired: string;
    };
  };

  // Contact Section
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    cardTag: string;
    helplineLabel: string;
    operationalHours: string;
    zeroObligation: string;
  };

  // Footer
  footer: {
    brandDesc: string;
    directContact: string;
    navTitle: string;
    legalTitle: string;
    privacy: string;
    disclaimer: string;
    requestCta: string;
    hoursTitle: string;
    hoursValue: string;
    chatWhatsapp: string;
    mandatoryDisclaimerBadge: string;
    mandatoryDisclaimerText: string;
    copyright: string;
    backToTop: string;
  };

  // Legal Modal
  legalModal: {
    close: string;
    disclaimerTitle: string;
    privacyTitle: string;
  };
}

export const translations: Record<Language, Translations> = {
  bn: {
    brandName: 'MONOTOSH DADA',
    brandNameBangla: 'মনোতোষ দাদা',
    tagline: 'হেয়ার ট্রান্সপ্লান্ট কনসালটেশন ও হেয়ার রিস্টোরেশন সহায়তা',
    phone: '7980248170',
    advisoryBadge: 'পরামর্শ ও সমন্বয়কারী ব্র্যান্ড',
    advisoryNotice: 'ব্যক্তিগত হেয়ার ট্রান্সপ্লান্ট পরামর্শ সহায়তা • কোনো মেডিকেল ক্লিনিক নয়',
    timing: 'প্রতিদিন সকাল ৯:০০ – রাত ৯:০০',
    callNow: 'এখনই কল করুন',
    whatsApp: 'হোয়াটসঅ্যাপ',
    bookConsultation: 'কনসালটেশন বুক করুন',
    requestConsultation: 'পরামর্শের অনুরোধ পাঠান',
    getConsultation: 'পরামর্শ নিন',

    nav: {
      home: 'হোম',
      about: 'পরিচিতি',
      services: 'সেবাসমূহ',
      process: 'কার্যপদ্ধতি',
      faq: 'প্রশ্নোত্তর',
      contact: 'যোগাযোগ',
    },

    hero: {
      badge: 'হেয়ার ট্রান্সপ্লান্ট কনসালটেশন ও সহায়তা ব্র্যান্ড',
      titleStart: 'আপনার ',
      titleHighlight: 'সুন্দর চুলের যাত্রা',
      titleEnd: ' শুরু হোক এখান থেকেই',
      subtitle: 'পেশাদার হেয়ার ট্রান্সপ্লান্ট পরামর্শ এবং হেয়ার রিস্টোরেশন সহায়তার জন্য যোগাযোগ করুন।',
      roleNoticeTitle: 'পরামর্শ ও যোগাযোগ সহায়তা:',
      roleNoticeText: 'মনোতোষ দাদা আপনাকে বিভিন্ন চিকিৎসা পদ্ধতি বুঝতে, প্রয়োজনীয় প্রস্তুতি নিতে এবং উপযুক্ত হেয়ার রিস্টোরেশন চিকিৎসকদের সাথে যোগাযোগ করতে সাহায্য করে। কোনো ক্লিনিক বা চিকিৎসা প্রতিষ্ঠান নয়।',
      directHelpline: 'সরাসরি হেল্পলাইন:',
      copied: 'কপি হয়েছে',
      copy: 'কপি করুন',
      badge1: 'কোনো অযাচিত চাপ নেই',
      badge2: 'ব্যক্তিগত দিকনির্দেশনা',
      badge3: 'দ্রুত হোয়াটসঅ্যাপ সহায়তা',
      cardTag: 'পরামর্শ সারসংক্ষেপ',
      cardTitle: 'হেয়ার রিস্টোরেশন গাইডেন্স',
      step1Title: 'হেয়ারলাইন ও টেম্পল মূল্যায়ন',
      step1Desc: 'কপালের স্বাভাবিক রেখা, ফাঁকা হয়ে যাওয়া টেম্পল জোন ও ঘনত্বের প্রত্যাশা বোঝা।',
      step2Title: 'মাথার তালু ও ক্রাউন পরামর্শ',
      step2Desc: 'তালুর পাতলা ভাব এবং সার্জিক্যাল বনাম নন-সার্জিক্যাল চিকিৎসা পদ্ধতির ধারণা।',
      step3Title: 'ক্লিনিক সংযোগ সহায়তা',
      step3Desc: 'ক্লিনিক নির্বাচন, ডাক্তারদের প্রশ্ন করার তালিকা ও খরচের স্বচ্ছতা নিশ্চিত করা।',
      widgetTitle: 'আজই কি কোনো প্রশ্ন আছে?',
      widgetSubtitle: 'মনোতোষ দাদা আপনাকে সাহায্য করতে প্রস্তুত',
      widgetCall: 'কল করুন',
      disclaimerNote: '*প্রাথমিক পরামর্শ সহায়তা মাত্র। ক্লিনিক্যাল চিকিৎসার সিদ্ধান্ত রেজিস্টার্ড ডাক্তারের ওপর নির্ভরশীল।',
    },

    about: {
      badge: 'স্বচ্ছ পরামর্শ ও সংযোগ ব্র্যান্ড',
      title: 'মনোতোষ দাদা সম্পর্কে',
      subtitle: 'হেয়ার ট্রান্সপ্লান্ট কনসালটেশন ও হেয়ার রিস্টোরেশন সহায়তা',
      p1: 'মনোতোষ দাদা আগ্রহী ব্যক্তিদের বিভিন্ন হেয়ার ট্রান্সপ্লান্ট ও হেয়ার রিস্টোরেশন বিকল্পগুলো অনুসন্ধান করতে পরামর্শ সহায়তা প্রদান করে এবং উপযুক্ত চিকিৎসা প্রদানকারীদের সাথে যোগাযোগ করিয়ে দিতে সাহায্য করে।',
      p2: 'চুল পড়ার সমস্যায় বিভ্রান্তিকর তথ্য ও অতিরিক্ত বিজ্ঞাপনের ভিড়ে সঠিক সিদ্ধান্ত নেওয়া কঠিন হতে পারে। মনোতোষ দাদা আপনার পাশে একজন বিশ্বস্ত পথপ্রদর্শক হিসেবে থাকে—চিকিৎসা পদ্ধতি সম্পর্কে ধারণা দেয়, আপনার মূল উদ্বেগ বোঝে এবং যোগ্য চিকিৎসকদের সাথে সংযোগ করিয়ে দেয়।',
      transparencyTitle: 'স্পষ্ট ব্যবসায়িক ভূমিকা ও স্বচ্ছতা বিবৃতি',
      transparencyText: 'মনোতোষ দাদা সম্পূর্ণভাবে একটি কনসালটেশন ও লিড-জেনারেশন ব্র্যান্ড। মনোতোষ দাদা কোনো ডাক্তার, সার্জন, হাসপাতাল বা মেডিকেল ক্লিনিক নন। কোনো প্রকার অস্ত্রোপচার বা চিকিৎসার গ্যারান্টি দেওয়া হয় না। সকল চিকিৎসা ও সার্জিক্যাল সিদ্ধান্ত রেজিস্টার্ড চিকিৎসকদের মাধ্যমে সম্পন্ন হয়।',
      whatWeDoTitle: 'মনোতোষ দাদা যা করে',
      whatWeDoItems: [
        'আপনার চুল পড়ার সমস্যা মনোযোগ দিয়ে শোনা',
        'প্রাথমিক পদ্ধতিগুলো সহজ ভাষায় ব্যাখ্যা করা',
        'প্রাথমিক অনুসন্ধানে পূর্ণ সহায়তা করা',
        'উপযুক্ত ক্লিনিক ও ডাক্তারের সাথে সংযোগ করিয়ে দেওয়া',
      ],
      whatClinicsDoTitle: 'মেডিকেল ক্লিনিক যা করে',
      whatClinicsDoItems: [
        'স্ক্যাল্প ট্রাইকোস্কোপি ও মেডিক্যাল ডায়াগনসিস',
        'সার্জিক্যাল উপযোগিতা নিশ্চিত করা',
        'গ্রাফ্ট প্রতিস্থাপনের নকশা ও পরিকল্পনা',
        'ক্লিনিক্যাল ও সার্জিক্যাল প্রক্রিয়া সম্পন্ন করা',
      ],
      btnConsultation: 'পরামর্শের অনুরোধ পাঠান',
      btnCall: 'কল করুন 7980248170',
      card1Title: 'নিরপেক্ষ আলোচনা',
      card1Desc: 'কোনো তাড়াহুড়ো বা বাণিজ্যিক চাপ ছাড়া আপনার চুলের লক্ষ্য ও সমস্যার বিষয়ে বিস্তারিত আলোচনা করতে পারেন।',
      card2Title: 'সঠিক ক্লিনিকের সন্ধান',
      card2Desc: 'আপনার সুবিধা, পছন্দ ও বাজেটের ওপর নির্ভর করে বিশ্বস্ত চিকিৎসকদের সাথে যোগাযোগ করার সুযোগ।',
      card3Title: 'সম্পূর্ণ গোপনীয়তা',
      card3Desc: 'আপনার ব্যক্তিগত তথ্য ও যোগাযোগের নম্বর সম্পূর্ণ গোপনীয়তার সাথে রক্ষা করা হয়।',
    },

    services: {
      badge: 'বিশেষায়িত পরামর্শ ক্ষেত্র',
      title: 'আমাদের কনসালটেশন ও সহায়তা সেবাসমূহ',
      subtitle: 'চুল প্রতিস্থাপনের বিভিন্ন বিকল্প অন্বেষণ করতে এবং যোগ্য চিকিৎসকদের সাথে যুক্ত হতে ব্যক্তিগত সহায়তা।',
      featuredBadge: 'সর্বাধিক অনুরোধকৃত',
      directCardTag: 'জরুরি সহায়তা প্রয়োজন?',
      directCardTitle: 'সরাসরি ফোনে পরামর্শ নিন',
      directCardDesc: 'আপনার চুল পড়ার সমস্যা নিয়ে কথা বলতে এবং তাৎক্ষণিক প্রাথমিক দিকনির্দেশনা পেতে সরাসরি ফোন করুন।',
      directCardTiming: 'সোম থেকে রবিবার: সকাল ৯:০০ - রাত ৯:০০',
      items: [
        {
          id: 'hair-transplant-consultation',
          title: 'হেয়ার ট্রান্সপ্লান্ট কনসালটেশন',
          shortDescription: 'আধুনিক FUE ও FUT পদ্ধতির তথ্য, আনুমানিক গ্রাফ্ট সংখ্যা এবং প্রক্রিয়া চলাকালীন করণীয় সম্পর্কে বিস্তারিত ধারণা।',
          tags: ['FUE ধারণা', 'গ্রাফ্ট সংখ্যা অনুমান', 'ডোনার এরিয়া পর্যালোচনা'],
        },
        {
          id: 'hair-restoration-assistance',
          title: 'হেয়ার রিস্টোরেশন সহায়তা',
          shortDescription: 'চুলের ঘনত্ব ফিরিয়ে আনতে সার্জিক্যাল এবং নন-সার্জিক্যাল (PRP/GFC ইত্যাদি) পদ্ধতির সার্বিক দিকনির্দেশনা।',
          tags: ['সার্জিক্যাল বনাম থেরাপি', 'চিকিৎসা পরামর্শ', 'ক্লিনিক যাচাইকরণ'],
        },
        {
          id: 'hairline-restoration-consultation',
          title: 'হেয়ারলাইন রিস্টোরেশন কনসালটেশন',
          shortDescription: 'কপালের সম্মুখভাগের হেয়ারলাইন ডিজাইন, পেছানো টেম্পল জোন ও প্রাকৃতিক লুক পাওয়ার পরিকল্পনা।',
          tags: ['স্বাভাবিক হেয়ারলাইন', 'টেম্পল পয়েন্ট', 'নকশা পর্যালোচনা'],
        },
        {
          id: 'beard-transplant-consultation',
          title: 'বিয়ার্ড (দাড়ি) ট্রান্সপ্লান্ট কনসালটেশন',
          shortDescription: 'পাতলা বা অসম্পূর্ণ দাড়ি-গোঁফের ফাঁকা অংশ পূরণের জন্য পরামর্শ ও উপযুক্ত ক্লিনিক সংযোগ।',
          tags: ['পাতলা দাড়ি', 'গোঁফের আকার', 'ফেসিয়াল ট্রান্সপ্লান্ট'],
        },
        {
          id: 'hair-loss-consultation-assistance',
          title: 'চুল পড়া সংক্রান্ত পরামর্শ সহায়তা',
          shortDescription: 'প্রাথমিক বা দীর্ঘস্থায়ী চুল পড়ার ধরন বুঝতে পারা, নরউড স্কেল মূল্যায়ন ও সময়মতো ব্যবস্থা গ্রহণ।',
          tags: ['নরউড স্কেল গাইড', 'মাথার তালুর যত্ন', 'সঠিক ডাক্তারের সন্ধান'],
        },
      ],
    },

    stageGuide: {
      badge: 'ইন্টারেক্টিভ চুল পড়ার ধাপ গাইড',
      title: 'আপনার চুল পড়ার ধরন ও ধাপ চিহ্নিত করুন',
      subtitle: 'নিচের ধাপগুলো থেকে আপনার অবস্থার সাথে মানানসই বিকল্পটি বেছে নিন এবং পরামর্শের মূল বিষয়গুলো জানুন।',
      focusLabel: 'পরামর্শের মূল আলোচনার বিষয়:',
      approachLabel: 'ক্লিনিক্যাল পদক্ষেপের দিকনির্দেশনা:',
      exploreTitle: (stage: string) => `${stage} এর জন্য বিকল্পগুলো জানুন`,
      exploreDesc: 'মনোতোষ দাদার সাথে যোগাযোগ করে এই ধাপ অনুযায়ী সঠিক পরামর্শ গ্রহণ করুন।',
      btnLabel: (stage: string) => `${stage} নিয়ে পরামর্শ নিন`,
      stages: [
        {
          stage: 'স্টেজ ২',
          name: 'প্রাথমিক টেম্পল পেছানো',
          description: 'কপালের দুই পাশে সামান্য চুল পেছানো (M-আকৃতি), তবে তালুর ঘনত্ব অক্ষুণ্ণ থাকে।',
          consultationFocus: 'স্বাভাবিক হেয়ারলাইন বজায় রাখা ও চুল পড়া রোধে প্রাথমিক চিকিৎসা বিকল্প নিয়ে আলোচনা।',
          typicalApproach: 'নন-সার্জিক্যাল থেরাপির পর্যালোচনা বা সীমিত মাইক্রো-গ্রাফ্ট আলোচনা।',
        },
        {
          stage: 'স্টেজ ৩',
          name: 'স্পষ্ট হেয়ারলাইন রিশেসন',
          description: 'টেম্পলে গভীর খাঁজ তৈরি হওয়া; কপাল লক্ষণীয়ভাবে পেছাতে শুরু করে।',
          consultationFocus: 'FUE পদ্ধতি, কপালের ফ্রেম পুনঃনির্মাণ ও ডোনার চুলের সঠিক ব্যবহার।',
          typicalApproach: 'বিশেষজ্ঞ সার্জনের মাধ্যমে হেয়ারলাইন পুনঃস্থাপনের পরিকল্পনা।',
        },
        {
          stage: 'স্টেজ ৪',
          name: 'হেয়ারলাইন ও তালু পাতলা হওয়া',
          description: 'হেয়ারলাইনের পাশাপাশি মাথার তালু (ক্রাউন/ভার্টেক্স) অংশে চুল পাতলা হয়ে যাওয়া।',
          consultationFocus: 'সামনের অংশ ও তালুর জন্য যৌথ গ্রাফ্ট বণ্টন এবং দীর্ঘমেয়াদি পরিকল্পনা।',
        typicalApproach: 'অগ্রবর্তী হেয়ারলাইনকে অগ্রাধিকার দিয়ে পূর্ণাঙ্গ পরামর্শ।',
        },
        {
          stage: 'স্টেজ ৫-৬',
          name: 'অগ্রবর্তী চুল পড়া (Advanced)',
          description: 'সামনের হেয়ারলাইন ও তালুর মধ্যবর্তী চুল প্রায় সম্পূর্ণভাবে অনুপস্থিত।',
          consultationFocus: 'ডোনার এরিয়ার পর্যাপ্ততা, দাড়ি থেকে চুল নেওয়ার সম্ভাবনা ও বাস্তবসম্মত প্রত্যাশা।',
          typicalApproach: 'অভিজ্ঞ সার্জিক্যাল টিমের সাথে মেগা-সেশনের বিকল্প মূল্যায়ন।',
        },
        {
          stage: 'ফেসিয়াল',
          name: 'দাড়ি বা গোঁফের পাতলা অংশ',
          description: 'দাড়ির বৃদ্ধি অসম হওয়া, গালে ফাঁকা অংশ থাকা বা দাড়ির লাইনের অভাব।',
          consultationFocus: 'দাড়িতে ফলিকল বসানোর কোণ, গ্রাফ্ট সংগ্রহ ও সুস্থতার সময়সীমা।',
          typicalApproach: 'বিশেষায়িত ফেসিয়াল হেয়ার ট্রান্সপ্লান্ট পরামর্শ।',
        },
      ],
    },

    process: {
      badge: 'ধাপে ধাপে সহজ প্রক্রিয়া',
      title: 'আমাদের কার্যপদ্ধতি',
      subtitle: 'প্রাথমিক অনুসন্ধান থেকে উপযুক্ত চিকিৎসকের সাথে সংযোগের ৪টি সুনির্দিষ্ট ধাপ।',
      ctaQuestion: 'প্রথম ধাপ শুরু করতে প্রস্তুত?',
      ctaSubtext: 'সরাসরি 7980248170 নম্বরে কল করুন বা আপনার তথ্য জমা দিন।',
      ctaButton: 'শুরু করুন',
      steps: [
        {
          number: '০১',
          title: 'আমাদের সাথে যোগাযোগ',
          description: '7980248170 নম্বরে কল করুন, হোয়াটসঅ্যাপে বার্তা পাঠান অথবা অনলাইন ফর্ম পূরণ করুন।',
          detail: 'তাৎক্ষণিক সাড়া ও আরামদায়ক আলাপ',
        },
        {
          number: '০২',
          title: 'আপনার চাহিদা জানান',
          description: 'চুল পড়ার সময়সীমা, হেয়ারলাইনের প্রত্যাশা ও ট্রান্সপ্লান্ট সম্পর্কিত আপনার প্রশ্নগুলো জানান।',
          detail: 'সম্পূর্ণ গোপনীয় ও বন্ধুত্বপূর্ণ পরিবেশ',
        },
        {
          number: '০৩',
          title: 'পরামর্শ ও তথ্য সহায়তা',
          description: 'পদ্ধতির ধরন, আনুমানিক গ্রাফ্ট, ডাক্তারদের কী প্রশ্ন করবেন এবং খরচের দিকনির্দেশনা পান।',
          detail: 'বাণিজ্যিক চাপমুক্ত নিরপেক্ষ আলোচনা',
        },
        {
          number: '০৪',
          title: 'উপযুক্ত ক্লিনিকের সাথে সংযোগ',
          description: 'আপনার পছন্দ ও প্রয়োজন অনুযায়ী অভিজ্ঞ ও রেজিস্টার্ড চিকিৎসকদের সাথে যোগাযোগ করিয়ে দেওয়া হয়।',
          detail: 'সরাসরি চিকিৎসার জন্য সঠিক পথ',
        },
      ],
    },

    whyUs: {
      badge: 'স্বচ্ছ ও দায়িত্বশীল সেবা',
      title: 'কেন যোগাযোগ করবেন মনোতোষ দাদার সাথে',
      subtitle: 'আমরা বিশ্বাস করি সততা ও সঠিক নির্দেশনায়। কোনো ভুয়া দাবি বা অবাস্তব প্রতিশ্রুতি ছাড়া আপনাকে সঠিক পথের সন্ধান দেওয়া আমাদের লক্ষ্য।',
      ethicsTag: 'আমাদের পরামর্শ নীতি',
      ethicsTitle: 'বাস্তবসম্মত ও দায়িত্বশীল দিকনির্দেশনা',
      ethicsDesc: 'আমরা কোনো অবাস্তব স্বপ্ন দেখাই না। আপনি যাতে সঠিক প্রস্তুতি ও স্পষ্ট ধারণা নিয়ে চিকিৎসকদের কাছে যেতে পারেন, সেটাই আমাদের একমাত্র ব্রত।',
      ethicsNote: '* সঠিক তথ্য দিয়ে আপনাকে সিদ্ধান্ত নিতে সাহায্য করাই আমাদের অঙ্গীকার।',
      benefits: [
        {
          title: 'সহজ পরামর্শ সহায়তা',
          description: 'জটিল ডাক্তারি পরিভাষার বদলে সহজ ও বোধগম্য ভাষায় চুল প্রতিস্থাপনের সমস্ত খুঁটিনাটি বুঝিয়ে দেওয়া হয়।',
          tag: 'সহজ সমাধান',
        },
        {
          title: 'ব্যক্তিগত যত্ন ও নির্দেশনা',
          description: 'প্রত্যেক মানুষের চুল পড়ার ধরন আলাদা। আমরা আপনার বয়স, প্যাটার্ন ও প্রত্যাশা অনুযায়ী পরামর্শ দিই।',
          tag: 'ব্যক্তিগত গুরুত্ব',
        },
        {
          title: 'সহজ যোগাযোগ প্রক্রিয়া',
          description: 'কোনো তৃতীয় পক্ষ বা স্বয়ংক্রিয় মেসেজ নয়; মনোতোষ দাদার সাথে সরাসরি কথা বলার পূর্ণ সুযোগ।',
          tag: 'সরাসরি আলাপ',
        },
        {
          title: 'সঠিক ক্লিনিকের সাথে সংযোগ',
          description: 'অভিজ্ঞ ও আধুনিক প্রযুক্তি সম্বলিত রেজিস্টার্ড চিকিৎসা কেন্দ্রগুলোর সাথে আপনাকে পরিচয় করিয়ে দেওয়া হয়।',
          tag: 'বিশ্বস্ত নেটওয়ার্ক',
        },
        {
          title: 'সুবিধাজনক মাধ্যম',
          description: 'আপনার সময় অনুযায়ী ফোন কল, হোয়াটসঅ্যাপ বা মেসেজের মাধ্যমে যেকোনো সময় কথা বলতে পারেন।',
          tag: 'আপনার সুবিধামতো',
        },
      ],
    },

    beforeAfter: {
      badge: 'চিকিৎসা রূপান্তরের ধারণাগত প্রদর্শনী',
      title: 'হেয়ার রিস্টোরেশন রূপরেখা',
      subtitle: 'রেজিস্টার্ড চিকিৎসা প্রতিষ্ঠানের মাধ্যমে আধুনিক চুল প্রতিস্থাপনে কী ধরনের ফলাফল সম্ভব, তার ধারণাগত উপস্থাপনা।',
      disclaimerTitle: 'ধারণাগত প্রদর্শনী সংক্রান্ত অত্যন্ত জরুরি সতর্কতা:',
      disclaimerQuote: '"ফলাফল ব্যক্তিভেদে পরিবর্তিত হয়। ছবিগুলো কেবলমাত্র উপযুক্ত অনুমতিক্রমে ব্যবহারযোগ্য।"',
      disclaimerSub: 'মনোতোষ দাদা একটি পরামর্শ ও সমন্বয়কারী ব্র্যান্ড এবং নিজে কোনো অস্ত্রোপচার করেন না। ফলাফল রোগীর শারীরিক বৈশিষ্ট্য, ডোনার এরিয়ার অবস্থা ও অপারেটিং সার্জনের দক্ষতার ওপর নির্ভরশীল।',
      beforeLabel: 'পূর্বে (বেসলাইন)',
      afterLabel: 'চিকিৎসা পরবর্তী রূপান্তর',
      potentialTarget: 'সম্ভাব্য ফলাফল',
      btnDiscuss: 'আপনার সম্ভাবনা সম্পর্কে আলোচনা করুন',
      cases: [
        {
          id: 'case-1',
          title: 'সম্মুখ হেয়ারলাইন পুনঃনির্মাণ',
          area: 'কপালের সম্মুখভাগ ও টেম্পল',
          duration: 'ক্লিনিক্যাল ফলো-আপ সময়: ৯-১২ মাস',
          description: 'প্রাকৃতিক বয়সোচিত রূপরেখা বজায় রেখে কপালের ফাঁকা অংশ ভরাট করার পরিকল্পনা।',
          beforeImg: 'কপালের দুপাশে M-আকৃতির ফাঁকা হেয়ারলাইন',
          afterImg: 'ঘন ও সম্পূর্ণ স্বাভাবিক ফ্রন্টাল হেয়ারলাইন',
        },
        {
          id: 'case-2',
          title: 'মাথার তালুর (ক্রাউন) ঘনত্ব বৃদ্ধি',
          area: 'ভার্টেক্স বা তালুর ঘূর্ণি এলাকা',
          duration: 'ক্লিনিক্যাল ফলো-আপ সময়: ১০-১৪ মাস',
          description: 'চুলের স্বাভাবিক ঘূর্ণন কোণ বজায় রেখে তালুর ফাঁকা অংশ ঢেকে দেওয়ার নকশা।',
          beforeImg: 'তালুর মধ্যভাগে স্পষ্ট চামড়া দৃশ্যমান হওয়া',
          afterImg: 'প্রাকৃতিক কোণে ঘন চুলের আবরণ',
        },
        {
          id: 'case-3',
          title: 'দাড়ির ফাঁকা অংশ ভরাট ও রূপরেখা',
          area: 'গাল ও চোয়ালের রেখা',
          duration: 'ক্লিনিক্যাল ফলো-আপ সময়: ৬-৯ মাস',
          description: 'গালে ফাঁকা অংশে একক চুলের ফলিকল নিখুঁতভাবে বসানোর পরিকল্পনা।',
          beforeImg: 'গালে ছোপ ছোপ ফাঁকা ও হালকা দাড়ি',
          afterImg: 'পরিপূর্ণ ও আকর্ষণীয় দাড়ির আউটলাইন',
        },
      ],
    },

    faq: {
      badge: 'সাধারণ জিজ্ঞাসাসমূহ',
      title: 'প্রায়শই জিজ্ঞাসিত প্রশ্নাবলী',
      subtitle: 'আমাদের পরামর্শ সেবা এবং হেয়ার ট্রান্সপ্লান্ট সম্পর্কে খোলামেলা ও স্পষ্ট উত্তর।',
      boxTag: 'আরও কোনো প্রশ্ন আছে কি?',
      boxTitle: 'মনোতোষ দাদা আপনাকে সাহায্য করতে প্রস্তুত',
      boxDesc: 'একটি বন্ধুত্বপূর্ণ ফোন কলের মাধ্যমে আপনার সকল প্রশ্নের সহজ উত্তর জেনে নিন।',
      faqs: [
        {
          question: 'হেয়ার ট্রান্সপ্লান্ট আসলে কী?',
          answer: 'হেয়ার ট্রান্সপ্লান্ট হলো একটি নিরাপদ চিকিৎসা প্রক্রিয়া যা বিশেষজ্ঞ ডাক্তাররা সম্পন্ন করেন। এতে মাথার পেছনের বা পাশের স্থায়ী ডোনার এরিয়া থেকে চুল সংগ্রহ করে ফাঁকা জায়গায় (যেমন হেয়ারলাইন বা তালুতে) প্রতিস্থাপন করা হয়। প্রধান পদ্ধতিগুলো হলো FUE এবং FUT।',
        },
        {
          question: 'মনোতোষ দাদা কীভাবে আমাকে সাহায্য করতে পারেন?',
          answer: 'মনোতোষ দাদা আপনাকে ব্যক্তিগত পরামর্শ সহায়তা প্রদান করে। চুল প্রতিস্থাপনের প্রক্রিয়া, গ্রাফ্ট সংখ্যা, FUE বা FUT পদ্ধতির পার্থক্য এবং ক্লিনিক নির্বাচনের সময় কী কী বিষয়ে লক্ষ্য রাখা উচিত—এই সমস্ত কিছু সহজে বুঝিয়ে দেন এবং উপযুক্ত ডাক্তারের সাথে পরিচয় করিয়ে দেন।',
        },
        {
          question: 'মনোতোষ দাদা কি কোনো ক্লিনিক?',
          answer: 'না। মনোতোষ দাদা সম্পূর্ণভাবে একটি পরামর্শ ও সমন্বয়কারী (Consultation & Lead-Generation) ব্র্যান্ড। মনোতোষ দাদা কোনো হাসপাতাল, ক্লিনিক, ডাক্তার বা সার্জন নন। আমরা কোনো চিকিৎসা বা সার্জারি করি না। সমস্ত চিকিৎসা কার্যক্রম রেজিস্টার্ড বিশেষজ্ঞ চিকিৎসকদের দ্বারা পরিচালিত হয়।',
        },
        {
          question: 'কীভাবে কনসালটেশন বুক করব?',
          answer: 'খুবই সহজ! এই ওয়েবসাইটের যেকোনো "কনসালটেশন বুক করুন" বাটনে ক্লিক করে ফর্ম পূরণ করুন, অথবা সরাসরি 7980248170 নম্বরে কল বা হোয়াটসঅ্যাপ করুন।',
        },
        {
          question: 'মনোতোষ দাদার সাথে কীভাবে যোগাযোগ করব?',
          answer: 'সরাসরি ফোন করতে পারেন 7980248170 নম্বরে অথবা একই নম্বরে হোয়াটসঅ্যাপে বার্তা পাঠাতে পারেন। আমরা প্রতিদিন সকাল ৯:০০ টা থেকে রাত ৯:০০ টা পর্যন্ত উপলব্ধ।',
        },
        {
          question: 'চুল প্রতিস্থাপনের ফলাফলের কি কোনো গ্যারান্টি আছে?',
          answer: 'না। চিকিৎসা বিজ্ঞানে কোনো শতভাগ গ্যারান্টি হয় না। ফলাফল প্রতিটি মানুষের শারীরিক গঠন, স্ক্যাল্পের স্বাস্থ্য এবং ডোনার চুলের ঘনত্বের ওপর নির্ভর করে। কোনো নির্ভরযোগ্য ডাক্তার বা মনোতোষ দাদা অলৌকিক গ্যারান্টি দাবি করেন না।',
        },
      ],
    },

    form: {
      badge: 'গোপনীয় অনুসন্ধান',
      title: 'পরামর্শের অনুরোধ পাঠান',
      subtitle: 'আপনার চুল সংক্রান্ত লক্ষ্য জানান। মনোতোষ দাদা আপনার পছন্দের মাধ্যমে দ্রুত যোগাযোগ করবেন।',
      confidentialNotice: '১০০% গোপনীয় • বিনামূল্যে প্রাথমিক অনুসন্ধান',
      helplineText: 'সরাসরি হেল্পলাইন: 7980248170',
      fullNameLabel: 'আপনার পূর্ণ নাম',
      fullNamePlaceholder: 'যেমন: রাহুল সেন',
      phoneLabel: 'ফোন নম্বর',
      phonePlaceholder: 'যেমন: 7980248170 বা 98XXXXXXXX',
      preferredMethodLabel: 'যোগাযোগের পছন্দের মাধ্যম',
      methods: ['Phone Call', 'WhatsApp', 'SMS'],
      methodNames: {
        'Phone Call': 'ফোন কল',
        WhatsApp: 'হোয়াটসঅ্যাপ',
        SMS: 'এসএমএস',
      },
      concernLabel: 'চুল সংক্রান্ত মূল সমস্যা / প্রয়োজনীয় সেবা',
      concernOptions: [
        'হেয়ার ট্রান্সপ্লান্ট কনসালটেশন',
        'হেয়ার রিস্টোরেশন সহায়তা',
        'হেয়ারলাইন রিস্টোরেশন কনসালটেশন',
        'দাড়ি ট্রান্সপ্লান্ট কনসালটেশন',
        'চুল পড়া সংক্রান্ত পরামর্শ সহায়তা',
        'মাথার তালু (ক্রাউন) পাতলা হওয়া',
        'স্টেজ ২ - প্রাথমিক টেম্পল পেছানো',
        'স্টেজ ৩ - স্পষ্ট হেয়ারলাইন রিশেসন',
        'স্টেজ ৪ - হেয়ারলাইন ও তালু পাতলা হওয়া',
        'স্টেজ ৫-৬ - অগ্রবর্তী চুল পড়া',
        'সাধারণ অনুসন্ধান / নিশ্চিত নই',
      ],
      messageLabel: 'অতিরিক্ত তথ্য / বার্তা (ঐচ্ছিক)',
      messagePlaceholder: 'কতদিন ধরে চুল পড়ছে, আগে কোনো ক্লিনিকের সাথে কথা বলেছেন কিনা, বা কখন কথা বলতে সুবিধা হবে তা লিখতে পারেন...',
      disclaimerText: 'অনুরোধ পাঠানোর মাধ্যমে আপনি মনোতোষ দাদার কাছ থেকে পরামর্শ পাওয়ার সম্মতি দিচ্ছেন। মনোতোষ দাদা কোনো ক্লিনিক বা ডাক্তার নন, বরং সঠিক চিকিৎসা প্রতিষ্ঠানের সাথে যোগাযোগে সহায়তাকারী একটি ব্র্যান্ড।',
      btnSubmit: 'পরামর্শের অনুরোধ পাঠান',
      btnSubmitting: 'প্রক্রিয়াকরণ হচ্ছে...',
      successTitle: 'আপনার অনুরোধ গৃহীত হয়েছে!',
      successDesc: (name: string, concern: string, method: string, phone: string) =>
        `ধন্যবাদ ${name}! আপনার "${concern}" সংক্রান্ত অনুরোধটি নথিভুক্ত করা হয়েছে। মনোতোষ দাদা শীঘ্রই ${phone} নম্বরে ${method}-এর মাধ্যমে যোগাযোগ করবেন।`,
      instantHelpTitle: 'এখনই সরাসরি কথা বলতে চান?',
      submitAnother: 'নতুন আরেকটি অনুসন্ধানের জন্য এখানে চাপুন',
      errors: {
        nameRequired: 'অনুগ্রহ করে আপনার পূর্ণ নাম লিখুন',
        nameLength: 'নাম কমপক্ষে ২ অক্ষরের হতে হবে',
        phoneRequired: 'অনুগ্রহ করে আপনার ফোন নম্বর লিখুন',
        phoneInvalid: 'অনুগ্রহ করে সঠিক ১০ সংখ্যার ফোন নম্বর লিখুন',
        concernRequired: 'অনুগ্রহ করে সেবার ধরন নির্বাচন করুন',
      },
    },

    contact: {
      badge: 'সরাসরি পরামর্শ ও সহায়তা',
      title: 'আপনার চুলের যত্নে সঠিক পথ বেছে নিতে প্রস্তুত?',
      subtitle: 'পরামর্শ ও সহায়তার জন্য আজই মনোতোষ দাদার সাথে যোগাযোগ করুন।',
      cardTag: 'পরামর্শ ব্র্যান্ড',
      helplineLabel: 'মূল হেল্পলাইন নম্বর',
      operationalHours: 'সোম – রবি (সকাল ৯:০০ – রাত ৯:০০)',
      zeroObligation: 'কোনো বাধ্যবাধকতা নেই',
    },

    footer: {
      brandDesc: 'আগ্রহী ব্যক্তিদের হেয়ার ট্রান্সপ্লান্ট সংক্রান্ত সঠিক তথ্য ও ধারণা প্রদান এবং রেজিস্টার্ড চিকিৎসকদের সাথে সংযোগে সহায়তাকারী বিশ্বস্ত ব্র্যান্ড।',
      directContact: 'সরাসরি যোগাযোগের নম্বর:',
      navTitle: 'দ্রুত লিংক',
      legalTitle: 'নীতিমালা ও শর্তাবলী',
      privacy: 'প্রাইভেসি পলিসি',
      disclaimer: 'ডিসক্লেইমার',
      requestCta: 'এখনই পরামর্শ চান →',
      hoursTitle: 'পরামর্শের সময়:',
      hoursValue: 'সপ্তাহের ৭ দিন • সকাল ৯:০০ – রাত ৯:০০',
      chatWhatsapp: 'হোয়াটসঅ্যাপে চ্যাট করুন',
      mandatoryDisclaimerBadge: 'বাধ্যতামূলক মেডিকেল ডিসক্লেইমার',
      mandatoryDisclaimerText: '"মনোতোষ দাদা একটি পরামর্শ ও লিড-জেনারেশন ব্র্যান্ড এবং কোনো মেডিকেল ক্লিনিক বা স্বাস্থ্যসেবা প্রদানকারী নন। চিকিৎসার উপযোগিতা, প্রক্রিয়া এবং চিকিৎসা পরামর্শ অবশ্যই যোগ্য ডাক্তারের মাধ্যমে নির্ধারিত হওয়া উচিত। ফলাফল ব্যক্তিভেদে ভিন্ন হতে পারে।"',
      copyright: '© ২০২৬ MONOTOSH DADA. সর্বস্বত্ব সংরক্ষিত।',
      backToTop: 'উপরে যান',
    },

    legalModal: {
      close: 'বন্ধ করুন',
      disclaimerTitle: 'সম্পূর্ণ মেডিকেল ও ব্যবসায়িক ডিসক্লেইমার',
      privacyTitle: 'প্রাইভেসি পলিসি (গোপনীয়তা নীতি)',
    },
  },

  en: {
    brandName: 'MONOTOSH DADA',
    brandNameBangla: 'MONOTOSH DADA',
    tagline: 'Hair Transplant Consultation & Hair Restoration Assistance',
    phone: '7980248170',
    advisoryBadge: 'ADVISORY & LIAISON BRAND',
    advisoryNotice: 'Personalized Hair Transplant Consultation • Not a medical clinic',
    timing: 'Daily 9:00 AM – 9:00 PM',
    callNow: 'CALL NOW',
    whatsApp: 'WhatsApp',
    bookConsultation: 'Book Consultation',
    requestConsultation: 'Request Consultation',
    getConsultation: 'Get Consultation',

    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      process: 'Process',
      faq: 'FAQ',
      contact: 'Contact',
    },

    hero: {
      badge: 'Hair Transplant Consultation & Assistance Brand',
      titleStart: 'Your Journey to ',
      titleHighlight: 'Better Hair',
      titleEnd: ' Starts Here',
      subtitle: 'Get connected for professional Hair Transplant consultation and Hair Restoration assistance.',
      roleNoticeTitle: 'Advisory & Liaison Service:',
      roleNoticeText: 'MONOTOSH DADA assists you in understanding treatment paths, planning inquiries, and connecting with qualified hair restoration medical providers. Not a clinic or medical provider.',
      directHelpline: 'Direct Helpline:',
      copied: 'Copied',
      copy: 'Copy',
      badge1: 'Zero Hard Sell',
      badge2: 'Personalized Guidance',
      badge3: 'Quick WhatsApp Support',
      cardTag: 'Consultation Overview',
      cardTitle: 'Hair Restoration Guidance',
      step1Title: 'Hairline & Temple Assessment',
      step1Desc: 'Evaluating frontal framing, receding temple zones, and density expectations.',
      step2Title: 'Crown & Mid-Scalp Advisory',
      step2Desc: 'Understanding vertex thinning and non-surgical vs surgical restoration routes.',
      step3Title: 'Provider Connection Support',
      step3Desc: 'Assisting with clinic queries, doctor evaluation checklists, and cost clarity.',
      widgetTitle: 'Have Questions Today?',
      widgetSubtitle: 'Monotosh Dada is available to assist',
      widgetCall: 'Call',
      disclaimerNote: '*Preliminary guidance only. Medical assessment requires consultation with licensed physicians.',
    },

    about: {
      badge: 'TRANSPARENT ADVISORY & LIAISON',
      title: 'About MONOTOSH DADA',
      subtitle: 'Hair Transplant Consultation & Hair Restoration Assistance',
      p1: 'MONOTOSH DADA helps individuals explore Hair Transplant and Hair Restoration options by providing consultation assistance and helping interested visitors connect with suitable treatment providers.',
      p2: 'Navigating hair loss can feel overwhelming with conflicting advice, marketing gimmicks, and complex surgical terminology. MONOTOSH DADA acts as a dedicated sounding board and guidance partner—clarifying basic procedural concepts, identifying your primary concerns, and facilitating introductions to accredited hair restoration specialists.',
      transparencyTitle: 'Clear Business Role & Transparency Statement',
      transparencyText: 'MONOTOSH DADA is strictly a consultation and lead-generation brand. MONOTOSH DADA is not a medical doctor, surgeon, hospital, or medical clinic, does not provide medical diagnosis or surgical procedures, and does not promise guaranteed treatment results. All medical decisions, evaluations, surgical plans, and post-procedure care are strictly handled by certified external medical professionals.',
      whatWeDoTitle: 'What MONOTOSH DADA Does',
      whatWeDoItems: [
        'Listens to your hair concerns',
        'Explains basic restoration concepts',
        'Assists with booking initial inquiries',
        'Connects you with suitable providers',
      ],
      whatClinicsDoTitle: 'What Medical Clinics Do',
      whatClinicsDoItems: [
        'Scalp trichoscopy & diagnosis',
        'Formal medical candidacy check',
        'Design surgical graft placement',
        'Perform clinical procedures',
      ],
      btnConsultation: 'Request Consultation',
      btnCall: 'Call 7980248170',
      card1Title: 'Unbiased Discussion',
      card1Desc: 'We take time to understand your hair goals without the pressure of an immediate surgical booking. You get an objective orientation before speaking with clinics.',
      card2Title: 'Provider Matchmaking',
      card2Desc: 'Connect with reputable clinics and experienced practitioners suited to your preferences, geographical comfort, and restoration goals.',
      card3Title: 'Strict Privacy',
      card3Desc: 'Your hair journey is personal. Your inquiry details and contact number are treated with absolute discretion.',
    },

    services: {
      badge: 'SPECIALIZED ADVISORY AREAS',
      title: 'Our Consultation & Assistance Services',
      subtitle: 'Personalized guidance to help you navigate hair restoration options and connect with licensed treatment providers.',
      featuredBadge: 'Most Requested',
      directCardTag: 'Need Immediate Help?',
      directCardTitle: 'Direct Phone Consultation',
      directCardDesc: 'Speak directly with MONOTOSH DADA right now to discuss your hair loss situation and get instant guidance.',
      directCardTiming: 'Monday to Sunday: 9:00 AM - 9:00 PM',
      items: [
        {
          id: 'hair-transplant-consultation',
          title: 'Hair Transplant Consultation',
          shortDescription: 'Guidance on modern FUE and FUT procedures, graft requirement estimates, and what to expect during a medical procedure.',
          tags: ['FUE Overview', 'Graft Estimation', 'Donor Assessment Guidance'],
        },
        {
          id: 'hair-restoration-assistance',
          title: 'Hair Restoration Assistance',
          shortDescription: 'Comprehensive orientation regarding both surgical and non-surgical hair restoration avenues for lasting density.',
          tags: ['Surgical vs Non-Surgical', 'Therapy Guidance', 'Clinic Selection Tips'],
        },
        {
          id: 'hairline-restoration-consultation',
          title: 'Hairline Restoration Consultation',
          shortDescription: 'Focus on frontal frame design, receding temple zones, and understanding natural hairline aesthetics.',
          tags: ['Frontal Framing', 'Temple Recession', 'Natural Design Discussion'],
        },
        {
          id: 'beard-transplant-consultation',
          title: 'Beard Transplant Consultation',
          shortDescription: 'Consultation assistance for patchy beards, mustache restoration, and facial hair density enhancement.',
          tags: ['Patchy Beard', 'Mustache Framing', 'Donor Density Guide'],
        },
        {
          id: 'hair-loss-consultation-assistance',
          title: 'Hair Loss Consultation Assistance',
          shortDescription: 'Early to advanced hair thinning advisory, understanding the Norwood scale, and taking timely action.',
          tags: ['Norwood Stage Guide', 'Crown Thinning', 'Preventative Advice'],
        },
      ],
    },

    stageGuide: {
      badge: 'INTERACTIVE HAIR LOSS GUIDE',
      title: 'Identify Your Hair Loss Pattern',
      subtitle: 'Select the stage that best matches your situation to see recommended consultation focus areas.',
      focusLabel: 'Consultation Discussion Focus:',
      approachLabel: 'Provider Orientation:',
      exploreTitle: (stage: string) => `Explore Options for ${stage}`,
      exploreDesc: 'Connect with MONOTOSH DADA to discuss solutions tailored to this pattern.',
      btnLabel: (stage: string) => `Consult on ${stage}`,
      stages: [
        {
          stage: 'Stage 2',
          name: 'Early Temple Recession',
          description: 'Mild recession around temples forming an M-shaped hairline, preserving crown density.',
          consultationFocus: 'Hairline framing discussion & preventative medical therapy options.',
          typicalApproach: 'Non-surgical therapy review or conservative micro-graft planning.',
        },
        {
          stage: 'Stage 3',
          name: 'Defined Receding Hairline',
          description: 'Deep symmetrical recession at temples; hairline recedes significantly beyond normal mature line.',
          consultationFocus: 'FUE consultation, hairline reconstruction parameters, donor preservation.',
          typicalApproach: 'Targeted hairline redesign with external accredited surgeons.',
        },
        {
          stage: 'Stage 4',
          name: 'Hairline Recession + Crown Thinning',
          description: 'Severe temple recession along with sparse or thinning hair at the vertex (crown).',
          consultationFocus: 'Dual-zone planning, realistic graft distribution, timeline prioritization.',
          typicalApproach: 'Comprehensive surgical consultation with focus on frontal priority.',
        },
        {
          stage: 'Stage 5-6',
          name: 'Advanced Hair Loss',
          description: 'The bridge between hairline and crown disappears; larger bald area requiring high donor capacity.',
          consultationFocus: 'Donor feasibility assessment, body/beard donor hair discussion, realistic expectations.',
          typicalApproach: 'Mega-session consultation with experienced surgical teams.',
        },
        {
          stage: 'Facial',
          name: 'Beard / Mustache Patchiness',
          description: 'Uneven or patchy beard growth, gaps in mustache, or lack of facial hair definition.',
          consultationFocus: 'Facial hair extraction techniques, graft angle alignment, recovery timeline.',
          typicalApproach: 'Specialized facial hair transplant consultation.',
        },
      ],
    },

    process: {
      badge: 'STEP-BY-STEP PROCESS',
      title: 'How It Works',
      subtitle: 'A straightforward 4-step path from initial inquiry to connecting with accredited hair restoration providers.',
      ctaQuestion: 'Ready to start Step 01?',
      ctaSubtext: 'Call directly at 7980248170 or fill in your inquiry.',
      ctaButton: 'Get Started',
      steps: [
        {
          number: '01',
          title: 'Contact Us',
          description: 'Reach out via phone call to 7980248170, WhatsApp message, or our easy online consultation request form.',
          detail: 'Instant response & convenient communication channels',
        },
        {
          number: '02',
          title: 'Share Your Requirement',
          description: 'Tell us about your hair loss concerns, timeline, hairline expectations, or questions about transplant methods.',
          detail: 'Clear, confidential, and comfortable inquiry',
        },
        {
          number: '03',
          title: 'Get Consultation Assistance',
          description: 'Receive helpful guidance on procedures, graft requirements, questions to ask doctors, and treatment logistics.',
          detail: 'Objective orientation with zero sales pressure',
        },
        {
          number: '04',
          title: 'Connect With Suitable Provider',
          description: 'We connect you with qualified hair restoration medical providers and clinics matching your requirements.',
          detail: 'Smooth transition to clinical evaluation',
        },
      ],
    },

    whyUs: {
      badge: 'TRANSPARENT CLIENT ADVOCACY',
      title: 'Why Contact MONOTOSH DADA',
      subtitle: 'We focus on honest advice, clarity, and connecting you with the right medical professionals—without unsupported claims or false promises.',
      ethicsTag: 'Our Advisory Ethics',
      ethicsTitle: 'Ethical & Realistic Guidance',
      ethicsDesc: 'We believe in realistic expectations. No fake promises of overnight miracles. We ensure you enter clinic consultations equipped with the right questions.',
      ethicsNote: '* Dedicated to helping you make informed hair restoration decisions.',
      benefits: [
        {
          title: 'Easy Consultation Assistance',
          description: 'Zero complicated intake forms or medical jargon. We break down complex hair restoration topics into simple, actionable steps.',
          tag: 'Stress-Free',
        },
        {
          title: 'Personalized Guidance',
          description: 'Every hair loss case is unique. We tailor our assistance to your specific pattern, age, expectations, and budget considerations.',
          tag: 'Individual Focus',
        },
        {
          title: 'Simple Contact Process',
          description: 'Direct access to Monotosh Dada without intermediaries or automated call queues. Quick answers to your initial questions.',
          tag: 'Direct Access',
        },
        {
          title: 'Treatment Provider Connection',
          description: 'Get connected with vetted, accredited medical providers experienced in advanced FUE, FUT, and hair restoration techniques.',
          tag: 'Verified Network',
        },
        {
          title: 'Convenient Communication',
          description: 'Reach out on your terms via phone call, WhatsApp messaging, or SMS at times that suit your daily schedule.',
          tag: 'Flexible Options',
        },
      ],
    },

    beforeAfter: {
      badge: 'CLINICAL TRANSFORMATION CONCEPTS',
      title: 'Hair Restoration Showcase',
      subtitle: 'Illustrative conceptual representations of what modern hair restoration procedures achieve through accredited medical providers.',
      disclaimerTitle: 'Important Concept Showcase Disclaimer:',
      disclaimerQuote: '"Results vary from person to person. Images should only be used with appropriate permission."',
      disclaimerSub: 'MONOTOSH DADA is an advisory and lead-generation brand and does not personally perform surgical or medical procedures. All treatment results depend on patient donor hair quality, scalp biology, and the individual medical evaluation of licensed operating clinics.',
      beforeLabel: 'BEFORE (Baseline)',
      afterLabel: 'AFTER RESTORATION',
      potentialTarget: 'Potential Target',
      btnDiscuss: 'Discuss Your Restoration Potential',
      cases: [
        {
          id: 'case-1',
          title: 'Frontal Hairline Reconstruction',
          area: 'Frontal & Temples',
          duration: 'Typical Clinic Follow-up: 9–12 Months',
          description: 'Restoration of natural frontal definition with conservative temporal peaks and age-appropriate mature framing.',
          beforeImg: 'Receding M-Shape hairline with sparse temporal points',
          afterImg: 'Dense, natural frontal contour with seamless feathering',
        },
        {
          id: 'case-2',
          title: 'Crown & Vertex Density Enhancement',
          area: 'Vertex Whirl Zone',
          duration: 'Typical Clinic Follow-up: 10–14 Months',
          description: 'Directional swirl angle grafting designed to restore natural vortex pattern and scalp coverage.',
          beforeImg: 'Visible scalp thinning across vertex whirl',
          afterImg: 'Consistent multi-directional swirl density',
        },
        {
          id: 'case-3',
          title: 'Facial Beard Framing & Patch Filling',
          area: 'Cheek & Jawline',
          duration: 'Typical Clinic Follow-up: 6–9 Months',
          description: 'Refined single-hair follicular unit placement along cheek line to eliminate patchy zones.',
          beforeImg: 'Sparse cheek line with uneven density patches',
          afterImg: 'Full, contoured beard line with natural angle growth',
        },
      ],
    },

    faq: {
      badge: 'COMMONLY ASKED QUESTIONS',
      title: 'Frequently Asked Questions',
      subtitle: 'Clear, transparent answers regarding our consultation assistance and hair restoration inquiries.',
      boxTag: 'Still Have Questions?',
      boxTitle: 'Monotosh Dada Is Here to Help You',
      boxDesc: 'Get straightforward answers to all your hair restoration questions over a quick, comfortable call.',
      faqs: [
        {
          question: 'What is a Hair Transplant?',
          answer: 'A hair transplant is a surgical procedure performed by licensed medical specialists where healthy hair follicles (usually extracted from the donor area at the back or sides of the head) are harvested and transplanted into thinning or balding areas (such as the hairline, mid-scalp, crown, or facial hair zones). Common clinical techniques include FUE (Follicular Unit Extraction) and FUT (Follicular Unit Transplantation).',
        },
        {
          question: 'How can MONOTOSH DADA help me?',
          answer: 'MONOTOSH DADA provides friendly, personalized consultation assistance. We help you explore your hair restoration options, clarify common procedure terms (such as graft counts, FUE versus FUT, and recovery expectations), assist you in formulating the right questions for medical practitioners, and connect you directly with qualified hair restoration treatment providers.',
        },
        {
          question: 'Is MONOTOSH DADA a clinic?',
          answer: 'No. MONOTOSH DADA is strictly a consultation and lead-generation brand. MONOTOSH DADA is NOT a medical clinic, hospital, doctor, surgeon, or healthcare provider. We do not provide clinical diagnosis, surgical procedures, or medical treatments. All medical evaluations and procedures are performed exclusively by licensed medical doctors and accredited clinics.',
        },
        {
          question: 'How can I book a consultation?',
          answer: 'Booking a consultation is quick and simple! You can click any "Book Consultation" or "Request Consultation" button on this website to fill out our inquiry form. Alternatively, you can call directly at 7980248170 or send a WhatsApp message to discuss your requirements right away.',
        },
        {
          question: 'How can I contact MONOTOSH DADA?',
          answer: 'You can contact MONOTOSH DADA directly by phone at 7980248170, via WhatsApp at 7980248170, or by submitting your inquiry through our online consultation form. We are available daily between 9:00 AM and 9:00 PM.',
        },
        {
          question: 'Are hair transplant results guaranteed?',
          answer: 'No. In medical science and hair restoration, results vary significantly from person to person depending on biological factors, scalp health, donor density, and adherence to medical advice. Neither MONOTOSH DADA nor ethical medical clinics guarantee absolute results.',
        },
      ],
    },

    form: {
      badge: 'CONFIDENTIAL INQUIRY',
      title: 'Request Your Hair Consultation',
      subtitle: 'Share your hair restoration goals. Monotosh Dada will connect with you via your preferred method.',
      confidentialNotice: '100% Confidential • Free Initial Inquiry',
      helplineText: 'Direct Helpline: 7980248170',
      fullNameLabel: 'Full Name',
      fullNamePlaceholder: 'e.g. Rahul Sharma',
      phoneLabel: 'Phone Number',
      phonePlaceholder: 'e.g. 7980248170 or 9876543210',
      preferredMethodLabel: 'Preferred Contact Method',
      methods: ['Phone Call', 'WhatsApp', 'SMS'],
      methodNames: {
        'Phone Call': 'Phone Call',
        WhatsApp: 'WhatsApp',
        SMS: 'SMS',
      },
      concernLabel: 'Hair Loss Concern / Service Required',
      concernOptions: [
        'Hair Transplant Consultation',
        'Hair Restoration Assistance',
        'Hairline Restoration Consultation',
        'Beard Transplant Consultation',
        'Hair Loss Consultation Assistance',
        'Crown / Vertex Thinning',
        'Stage 2 - Early Temple Recession',
        'Stage 3 - Defined Receding Hairline',
        'Stage 4 - Hairline + Crown Thinning',
        'Stage 5-6 - Advanced Hair Loss',
        'General Inquiry / Not Sure',
      ],
      messageLabel: 'Message / Details (Optional)',
      messagePlaceholder: 'Share details such as how long you have experienced hair thinning, whether you have previous transplant inquiries, or your convenient time to speak...',
      disclaimerText: 'By clicking Request Consultation, you agree to receive consultation assistance from MONOTOSH DADA via your chosen contact method. MONOTOSH DADA is an advisory consultation brand connecting visitors with qualified treatment providers and is not a medical clinic or doctor.',
      btnSubmit: 'Request Consultation',
      btnSubmitting: 'Processing Request...',
      successTitle: 'Consultation Request Received!',
      successDesc: (name: string, concern: string, method: string, phone: string) =>
        `Thank you, ${name}. Your consultation inquiry regarding ${concern} has been noted. MONOTOSH DADA will connect with you shortly via ${method} at ${phone}.`,
      instantHelpTitle: 'Want an immediate answer right now?',
      submitAnother: 'Submit another consultation inquiry',
      errors: {
        nameRequired: 'Please enter your full name',
        nameLength: 'Name must be at least 2 characters',
        phoneRequired: 'Please enter your phone number',
        phoneInvalid: 'Please enter a valid 10-digit phone number',
        concernRequired: 'Please select your primary hair concern',
      },
    },

    contact: {
      badge: 'DIRECT CONSULTATION & ASSISTANCE',
      title: 'Ready to Explore Your Hair Restoration Options?',
      subtitle: 'Contact MONOTOSH DADA today for consultation assistance.',
      cardTag: 'Consultation Brand',
      helplineLabel: 'Primary Helpline',
      operationalHours: 'Monday – Sunday (9:00 AM – 9:00 PM IST)',
      zeroObligation: 'Zero Obligation Consultation',
    },

    footer: {
      brandDesc: 'Helping individuals understand hair restoration options and connecting interested visitors with accredited medical providers.',
      directContact: 'Direct Contact Phone:',
      navTitle: 'Quick Navigation',
      legalTitle: 'Legal & Disclosures',
      privacy: 'Privacy Policy',
      disclaimer: 'Disclaimer',
      requestCta: 'Request Consultation Now →',
      hoursTitle: 'Assistance Hours:',
      hoursValue: 'Available 7 Days a Week • 9:00 AM – 9:00 PM IST',
      chatWhatsapp: 'Chat on WhatsApp',
      mandatoryDisclaimerBadge: 'MANDATORY MEDICAL DISCLAIMER',
      mandatoryDisclaimerText: '"MONOTOSH DADA is a consultation and lead-generation brand and is not a medical clinic or medical professional. Treatment suitability, procedures and medical advice should be determined by a qualified medical professional. Results may vary."',
      copyright: '© 2026 MONOTOSH DADA. All Rights Reserved.',
      backToTop: 'Back to top',
    },

    legalModal: {
      close: 'Close',
      disclaimerTitle: 'Full Medical & Business Disclaimer',
      privacyTitle: 'Privacy Policy',
    },
  },
};
