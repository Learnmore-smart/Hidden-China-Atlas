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
      title: "Discover China's Best-Kept Secrets",
      subtitle: "Unearth hidden gems, lesser-known destinations, and authentic local experiences beyond the tourist trail",
      exploreMap: "Explore the Map",
      planTrip: "Plan My Journey"
    },
    map: {
      title: "Interactive Discovery Map"
    },
    hiddenPicks: {
      title: "Curated Hidden Destinations"
    },
    tripPlanner: {
      title: "Custom Journey Planner",
      departureCity: "Departure City",
      numberOfDays: "Travel Duration",
      interests: "Travel Interests",
      avoidCrowds: "Avoid Crowds",
      generatePlan: "Create My Itinerary"
    },
    why: {
      title: "Why Choose Hidden China Atlas",
      discover: "Authentic Hidden Gems",
      discoverDesc: "Venture beyond tourist hotspots to find China's most secluded and breathtaking locations",
      map: "Interactive Explorer Map",
      mapDesc: "Navigate China with our intuitive map interface, pinpointing hidden treasures across the country",
      planner: "AI-Powered Trip Planner",
      plannerDesc: "Receive personalized travel recommendations tailored to your preferences and travel style"
    },
    footer: {
      about: "About Us",
      destinations: "Destinations",
      contact: "Contact",
      copyright: "All rights reserved."
    },
    destinations: {
      pingtan: {
        name: "Pingtan Island",
        province: "Fujian Province",
        description: "A coastal paradise boasting pristine beaches, crystal-clear waters, and unique stone houses that tell tales of ancient maritime culture"
      },
      gannan: {
        name: "Gannan Tibetan Autonomous Prefecture",
        province: "Gansu Province",
        description: "A breathtaking region of rolling grasslands, sacred Tibetan monasteries, and vibrant nomadic culture in northwestern China"
      },
      hongcun: {
        name: "Hongcun Village",
        province: "Anhui Province",
        description: "An ancient water town with exquisitely preserved Hui-style architecture, tranquil canals, and a history dating back over 900 years"
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
