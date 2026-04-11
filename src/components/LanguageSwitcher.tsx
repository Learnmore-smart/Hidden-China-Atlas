"use client";

import React from 'react';
import { useTranslation } from '@/lib/languageContext';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useTranslation();

  return (
    <div className="flex items-center gap-4 text-xs tracking-widest uppercase font-medium">
      <button
        onClick={() => setLanguage('en')}
        className={`transition-all duration-300 ${language === 'en' ? 'text-current opacity-100' : 'text-current opacity-40 hover:opacity-70'}`}
      >
        EN
      </button>
      <span className="opacity-20">|</span>
      <button
        onClick={() => setLanguage('zh')}
        className={`transition-all duration-300 ${language === 'zh' ? 'text-current opacity-100' : 'text-current opacity-40 hover:opacity-70'}`}
      >
        CN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
