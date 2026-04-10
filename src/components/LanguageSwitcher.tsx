"use client";

import React from 'react';
import { useTranslation } from '@/lib/languageContext';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useTranslation();

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-all ${language === 'en' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
      >
        English
      </button>
      <button
        onClick={() => setLanguage('zh')}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-all ${language === 'zh' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
      >
        中文
      </button>
    </div>
  );
};

export default LanguageSwitcher;
