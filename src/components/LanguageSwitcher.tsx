"use client";

import { useTranslation } from "@/lib/languageContext";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useTranslation();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'zh' : 'en');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-6 right-6 z-50 flex items-center gap-2 px-4 py-2 glass-card rounded-full text-sm font-medium text-ink hover:text-jade transition-colors duration-300"
      aria-label="Toggle Language"
    >
      <Globe size={16} />
      <span className="w-6 text-center">
        {language === 'en' ? '中' : 'EN'}
      </span>
    </button>
  );
}