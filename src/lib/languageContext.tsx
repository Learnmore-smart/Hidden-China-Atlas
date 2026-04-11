"use client";

import React, { createContext, useState, useContext, ReactNode } from 'react';

// 语言类型定义
type Language = 'en' | 'zh';

// 语言上下文类型定义
interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => any;
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
      title: "The Cartography",
      subtitle: "of Calm",
      close: "Close",
      whySpecial: "Why It's Special",
      atmosphere: "Atmosphere"
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
        tagline: "The Taiwan Strait Pearl",
        description: "A coastal gem with crystal-clear waters, white sandy beaches, and traditional stone houses. Perfect for a relaxing getaway away from the crowds.",
        whySpecial: "Known for its pristine beaches, unique stone houses, and the closest point to Taiwan mainland",
        bestSeason: "Spring (April-June) and Autumn (September-November)",
        idealTripLength: "2-3 days",
        vibeTags: ["coastal", "relaxation", "photography", "seafood"]
      },
      gannan: {
        name: "Gannan Tibetan Autonomous Prefecture",
        province: "Gansu Province",
        tagline: "Tibetan Plateau Gateway",
        description: "Scenic grasslands, Tibetan monasteries, and nomadic culture in northwestern China. A hidden paradise for nature and culture lovers.",
        whySpecial: "Stunning grasslands, Tibetan monasteries, and unique ethnic culture without the crowds of Tibet",
        bestSeason: "Summer (June-August)",
        idealTripLength: "4-5 days",
        vibeTags: ["mountains", "culture", "photography", "spiritual"]
      },
      hongcun: {
        name: "Hongcun Village",
        province: "Anhui Province",
        tagline: "Ancient Water Village",
        description: "An ancient village with traditional Hui-style architecture, narrow stone lanes, and a unique water system. Known as the \"Village in Chinese Painting\".",
        whySpecial: "A UNESCO World Heritage site with well-preserved Hui-style architecture and a unique water system",
        bestSeason: "Spring (March-April) and Autumn (October-November)",
        idealTripLength: "1-2 days",
        vibeTags: ["heritage", "culture", "photography", "history"]
      },
      zhoushan: {
        name: "Zhoushan Islands",
        province: "Zhejiang Province",
        tagline: "East China Sea Archipelago",
        description: "A beautiful archipelago with clear waters, sandy beaches, and fresh seafood. Perfect for a coastal escape.",
        whySpecial: "A group of islands with pristine beaches, fresh seafood, and unique fishing villages",
        bestSeason: "Summer (June-September)",
        idealTripLength: "3-4 days",
        vibeTags: ["coastal", "relaxation", "seafood", "islands"]
      },
      lijiang: {
        name: "Lijiang Ancient Town",
        province: "Yunnan Province",
        tagline: "Naxi Ethnic Treasure",
        description: "A well-preserved ancient town with Naxi ethnic culture, traditional architecture, and scenic surroundings. A popular but still charming destination.",
        whySpecial: "A UNESCO World Heritage site with well-preserved Naxi ethnic culture and architecture",
        bestSeason: "Spring (March-May) and Autumn (September-November)",
        idealTripLength: "2-3 days",
        vibeTags: ["heritage", "culture", "photography", "history"]
      },
      hulunbuir: {
        name: "Hulunbuir Grassland",
        province: "Inner Mongolia Autonomous Region",
        tagline: "Mongolian Nomadic Paradise",
        description: "Vast grasslands with Mongolian nomadic culture, yurts, and stunning natural scenery. A perfect place to experience traditional Mongolian life.",
        whySpecial: "Vast grasslands with traditional Mongolian nomadic culture and stunning natural scenery",
        bestSeason: "Summer (June-August)",
        idealTripLength: "4-5 days",
        vibeTags: ["mountains", "culture", "photography", "nature"]
      },
      xidi: {
        name: "Xidi Village",
        province: "Anhui Province",
        tagline: "Ancient Hui-style Village",
        description: "A well-preserved ancient village with traditional Hui-style architecture, intricate wood carvings, and a peaceful atmosphere.",
        whySpecial: "A UNESCO World Heritage site with well-preserved Hui-style architecture and peaceful atmosphere",
        bestSeason: "Spring (March-April) and Autumn (October-November)",
        idealTripLength: "1-2 days",
        vibeTags: ["heritage", "culture", "photography", "history"]
      },
      sansha: {
        name: "Sansha Town",
        province: "Fujian Province",
        tagline: "Coastal Fishing Town",
        description: "A traditional fishing town with unique coastal architecture, fresh seafood, and a relaxed atmosphere. Perfect for a quiet coastal getaway.",
        whySpecial: "A traditional fishing town with unique coastal architecture and fresh seafood",
        bestSeason: "Spring (April-June) and Autumn (September-November)",
        idealTripLength: "2-3 days",
        vibeTags: ["coastal", "food", "photography", "relaxation"]
      },
      langmusi: {
        name: "Langmusi",
        province: "Gansu/Sichuan Provinces",
        tagline: "Tibetan Border Town",
        description: "A small town on the border of Gansu and Sichuan with Tibetan monasteries, stunning natural scenery, and a peaceful atmosphere.",
        whySpecial: "A small town on the border of Gansu and Sichuan with Tibetan monasteries and stunning natural scenery",
        bestSeason: "Summer (June-August)",
        idealTripLength: "2-3 days",
        vibeTags: ["mountains", "culture", "photography", "spiritual"]
      },
      fenghuang: {
        name: "Fenghuang Ancient Town",
        province: "Hunan Province",
        tagline: "Phoenix Ancient Town",
        description: "A well-preserved ancient town with unique Miao and Tujia ethnic culture, traditional architecture, and scenic river views.",
        whySpecial: "A well-preserved ancient town with unique Miao and Tujia ethnic culture and architecture",
        bestSeason: "Spring (March-May) and Autumn (September-November)",
        idealTripLength: "2-3 days",
        vibeTags: ["heritage", "culture", "photography", "history"]
      },
      yueyang: {
        name: "Yueyang Tower",
        province: "Hunan Province",
        tagline: "Ancient Water Tower",
        description: "One of the Four Great Towers of China with stunning views of Dongting Lake and rich historical significance.",
        whySpecial: "One of the Four Great Towers of China with stunning views of Dongting Lake",
        bestSeason: "Spring (March-May) and Autumn (September-November)",
        idealTripLength: "1-2 days",
        vibeTags: ["heritage", "history", "photography", "culture"]
      },
      wuyuan: {
        name: "Wuyuan",
        province: "Jiangxi Province",
        tagline: "Rural China Paradise",
        description: "Beautiful countryside with ancient villages, rape flower fields, and traditional Huizhou architecture. A perfect place to experience rural China.",
        whySpecial: "Known for its beautiful countryside, ancient villages, and rape flower fields",
        bestSeason: "Spring (March-April) for rape flowers, Autumn (October-November) for autumn colors",
        idealTripLength: "2-3 days",
        vibeTags: ["rural", "photography", "nature", "heritage"]
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
      title: "静谧",
      subtitle: "地图",
      close: "关闭",
      whySpecial: "独特之处",
      atmosphere: "氛围"
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
        tagline: "台湾海峡明珠",
        description: "拥有清澈海水、白色沙滩和传统石厝的海岸明珠。是远离人群、放松身心的完美之地。",
        whySpecial: "以原始海滩、独特的石厝以及距离台湾本岛最近的地点而闻名",
        bestSeason: "春季（4-6月）和秋季（9-11月）",
        idealTripLength: "2-3 天",
        vibeTags: ["海岸", "放松", "摄影", "海鲜"]
      },
      gannan: {
        name: "甘南藏族自治州",
        province: "甘肃省",
        tagline: "青藏高原门户",
        description: "中国西北部壮丽的草原、藏传佛教寺庙和游牧文化。自然和文化爱好者的隐秘天堂。",
        whySpecial: "壮丽的草原、藏传佛教寺庙和独特的民族文化，没有西藏的人潮",
        bestSeason: "夏季（6-8月）",
        idealTripLength: "4-5 天",
        vibeTags: ["山脉", "文化", "摄影", "精神体验"]
      },
      hongcun: {
        name: "宏村",
        province: "安徽省",
        tagline: "古老水乡",
        description: "一座拥有传统徽派建筑、狭窄石巷和独特水系的古老村落。被誉为“画里的乡村”。",
        whySpecial: "联合国教科文组织世界遗产，拥有保存完好的徽派建筑和独特的水系",
        bestSeason: "春季（3-4月）和秋季（10-11月）",
        idealTripLength: "1-2 天",
        vibeTags: ["遗产", "文化", "摄影", "历史"]
      },
      zhoushan: {
        name: "舟山群岛",
        province: "浙江省",
        tagline: "东海群岛",
        description: "美丽的群岛，拥有清澈的海水、沙滩和新鲜的海鲜。完美的海岸度假胜地。",
        whySpecial: "拥有原始海滩、新鲜海鲜和独特渔村的群岛",
        bestSeason: "夏季（6-9月）",
        idealTripLength: "3-4 天",
        vibeTags: ["海岸", "放松", "海鲜", "岛屿"]
      },
      lijiang: {
        name: "丽江古城",
        province: "云南省",
        tagline: "纳西族瑰宝",
        description: "保存完好的古城，拥有纳西族文化、传统建筑和迷人风景。热门但依然迷人的目的地。",
        whySpecial: "联合国教科文组织世界遗产，拥有保存完好的纳西族文化和建筑",
        bestSeason: "春季（3-5月）和秋季（9-11月）",
        idealTripLength: "2-3 天",
        vibeTags: ["遗产", "文化", "摄影", "历史"]
      },
      hulunbuir: {
        name: "呼伦贝尔草原",
        province: "内蒙古自治区",
        tagline: "蒙古族游牧天堂",
        description: "广阔的草原，拥有蒙古族游牧文化、蒙古包和令人惊叹的自然风光。体验传统蒙古族生活的完美之地。",
        whySpecial: "广阔的草原，拥有传统的蒙古族游牧文化和令人惊叹的自然风光",
        bestSeason: "夏季（6-8月）",
        idealTripLength: "4-5 天",
        vibeTags: ["山脉", "文化", "摄影", "自然"]
      },
      xidi: {
        name: "西递村",
        province: "安徽省",
        tagline: "古老徽派村落",
        description: "保存完好的古老村落，拥有传统徽派建筑、精致木雕和宁静的氛围。",
        whySpecial: "联合国教科文组织世界遗产，拥有保存完好的徽派建筑和宁静的氛围",
        bestSeason: "春季（3-4月）和秋季（10-11月）",
        idealTripLength: "1-2 天",
        vibeTags: ["遗产", "文化", "摄影", "历史"]
      },
      sansha: {
        name: "三沙镇",
        province: "福建省",
        tagline: "海滨渔镇",
        description: "一个传统的渔镇，拥有独特的海岸建筑、新鲜的海鲜和轻松的氛围。安静海滨度假的完美选择。",
        whySpecial: "一个传统的渔镇，拥有独特的海岸建筑和新鲜的海鲜",
        bestSeason: "春季（4-6月）和秋季（9-11月）",
        idealTripLength: "2-3 天",
        vibeTags: ["海岸", "美食", "摄影", "放松"]
      },
      langmusi: {
        name: "郎木寺",
        province: "甘肃/四川省",
        tagline: "藏区边境小镇",
        description: "位于甘肃和四川交界处的小镇，拥有藏传佛教寺庙、迷人的自然风光和宁静的氛围。",
        whySpecial: "甘肃和四川交界处的小镇，拥有藏传佛教寺庙和令人惊叹的自然风光",
        bestSeason: "夏季（6-8月）",
        idealTripLength: "2-3 天",
        vibeTags: ["山脉", "文化", "摄影", "精神体验"]
      },
      fenghuang: {
        name: "凤凰古城",
        province: "湖南省",
        tagline: "凤凰古镇",
        description: "一座保存完好的古镇，拥有独特的苗族和土家族文化、传统建筑和美丽的河景。",
        whySpecial: "一座保存完好的古镇，拥有独特的苗族和土家族文化及建筑",
        bestSeason: "春季（3-5月）和秋季（9-11月）",
        idealTripLength: "2-3 天",
        vibeTags: ["遗产", "文化", "摄影", "历史"]
      },
      yueyang: {
        name: "岳阳楼",
        province: "湖南省",
        tagline: "古代水乡名楼",
        description: "中国四大名楼之一，拥有洞庭湖的壮丽景色和丰富的历史意义。",
        whySpecial: "中国四大名楼之一，拥有洞庭湖的壮丽景色",
        bestSeason: "春季（3-5月）和秋季（9-11月）",
        idealTripLength: "1-2 天",
        vibeTags: ["遗产", "历史", "摄影", "文化"]
      },
      wuyuan: {
        name: "婺源",
        province: "江西省",
        tagline: "中国最美乡村",
        description: "美丽的乡村，拥有古老的村落、油菜花田和传统的徽派建筑。体验中国乡村的完美之地。",
        whySpecial: "以其美丽的乡村、古老的村落和油菜花田而闻名",
        bestSeason: "春季（3-4月）赏油菜花，秋季（10-11月）赏秋色",
        idealTripLength: "2-3 天",
        vibeTags: ["乡村", "摄影", "自然", "遗产"]
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
  const t = (key: string): any => {
    const keys = key.split('.');
    let result: unknown = translations[language];
    
    for (const k of keys) {
      if (result && typeof result === 'object' && k in result) {
        result = (result as Record<string, unknown>)[k];
      } else {
        return key as any;
      }
    }
    
    return (typeof result === 'string' || Array.isArray(result)) ? result as any : key as any;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
