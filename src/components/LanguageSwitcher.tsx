import React from 'react';
import { useTranslation } from '@/lib/languageContext';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useTranslation();

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setLanguage('en')}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${language === 'en' ? 'bg-white text-primary shadow-md' : 'bg-transparent text-white/80 hover:bg-white/10'}`}
      >
        English
      </button>
      <button
        onClick={() => setLanguage('zh')}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${language === 'zh' ? 'bg-white text-primary shadow-md' : 'bg-transparent text-white/80 hover:bg-white/10'}`}
      >
        中文
      </button>
    </div>
  );
};

export default LanguageSwitcher;
