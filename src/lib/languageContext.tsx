"use client";

import React, { createContext, useState, useContext, ReactNode } from 'react';

// 语言类型定义
type Language = 'en' | 'zh';

// 语言上下文类型定义
interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

// 创建语言上下文
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// 翻译函数
export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
};

// 翻译数据
const translations = {
  en: {
    hero: {
      title: "Journey Beyond the Ordinary",
      subtitle: "Curated escapes into China's untouched landscapes. Experience the authentic, the serene, and the unforgettable.",
      exploreMap: "Discover Destinations",
      planTrip: "Design Your Journey"
    },
    map: {
      title: "The Cartography of Calm"
    },
    hiddenPicks: {
      title: "Curated Escapes"
    },
    tripPlanner: {
      title: "Design Your Journey",
      departureCity: "Point of Origin",
      numberOfDays: "Duration (Days)",
      interests: "Pursuits",
      avoidCrowds: "Seek Solitude",
      generatePlan: "Craft Itinerary"
    },
    why: {
      title: "The Art of Travel",
      discover: "Uncharted Beauty",
      discoverDesc: "Immerse yourself in destinations untouched by conventional tourism.",
      map: "Spatial Poetry",
      mapDesc: "Navigate pristine landscapes with our elegantly designed atlas.",
      planner: "Bespoke Itineraries",
      plannerDesc: "Tailored journeys crafted to your unique sensibilities and pace."
    },
    footer: {
      about: "Philosophy",
      destinations: "Journeys",
      contact: "Inquiries",
      copyright: "All rights reserved."
    },
    destinations: {
      pingtan: {
        name: "Pingtan Island",
        province: "Fujian Province",
        description: "A coastal sanctuary defined by pristine beaches and architectural heritage."
      },
      gannan: {
        name: "Gannan",
        province: "Gansu Province",
        description: "Vast rolling grasslands preserving the profound depth of Tibetan culture."
      },
      hongcun: {
        name: "Hongcun",
        province: "Anhui Province",
        description: "A living watercolor painting showcasing timeless Hui-style architecture."
      }
    }
  },
  zh: {
    hero: {
      title: "发现大多数游客从未见过的中国",
      subtitle: "探索隐藏的宝藏、鲜为人知的目的地和常规路线之外的当地美景",
      exploreMap: "探索地图",
      planTrip: "规划我的旅行"
    },
    map: {
      title: "探索地图"
    },
    hiddenPicks: {
      title: "精选隐藏目的地"
    },
    tripPlanner: {
      title: "规划我的旅行",
      departureCity: "出发城市",
      numberOfDays: "天数",
      interests: "兴趣",
      avoidCrowds: "避开人群",
      generatePlan: "生成旅行计划"
    },
    why: {
      title: "为什么选择 Hidden China Atlas",
      discover: "发现隐藏的宝藏",
      discoverDesc: "找到常规旅游景点之外的目的地",
      map: "互动地图",
      mapDesc: "通过我们用户友好的地图界面探索中国",
      planner: "智能旅行规划器",
      plannerDesc: "根据您的偏好获得个性化推荐"
    },
    footer: {
      about: "关于我们",
      destinations: "目的地",
      contact: "联系我们",
      copyright: "保留所有权利。"
    },
    destinations: {
      pingtan: {
        name: "平潭岛",
        province: "福建省",
        description: "拥有 pristine 海滩和独特石屋的海岸明珠"
      },
      gannan: {
        name: "甘南藏族自治州",
        province: "甘肃省",
        description: "中国西北部的 scenic 草原和藏族文化"
      },
      hongcun: {
        name: "宏村",
        province: "安徽省",
        description: "拥有传统徽派建筑的古村落"
      }
    }
  }
};

// 语言提供者组件
interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  // 翻译函数
  const t = (key: string): string => {
    const keys = key.split('.');
    let result: unknown = translations[language];
    
    for (const k of keys) {
      if (result && typeof result === 'object' && k in result) {
        result = (result as Record<string, unknown>)[k];
      } else {
        return key;
      }
    }
    
    return typeof result === 'string' ? result : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
