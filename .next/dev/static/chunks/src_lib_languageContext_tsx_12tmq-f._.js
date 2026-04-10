(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/languageContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LanguageProvider",
    ()=>LanguageProvider,
    "useTranslation",
    ()=>useTranslation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
// 创建语言上下文
const LanguageContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const useTranslation = ()=>{
    _s();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(LanguageContext);
    if (!context) {
        throw new Error('useTranslation must be used within a LanguageProvider');
    }
    return context;
};
_s(useTranslation, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
// 翻译数据
const translations = {
    en: {
        hero: {
            title: "Discover the side of China most tourists never see",
            subtitle: "Explore hidden gems, lesser-known destinations, and local beauty beyond the usual route",
            exploreMap: "Explore the Map",
            planTrip: "Plan My Trip"
        },
        map: {
            title: "Explore the Map"
        },
        hiddenPicks: {
            title: "Hidden Picks"
        },
        tripPlanner: {
            title: "Plan My Trip",
            departureCity: "Departure City",
            numberOfDays: "Number of Days",
            interests: "Interests",
            avoidCrowds: "Avoid crowds",
            generatePlan: "Generate Trip Plan"
        },
        why: {
            title: "Why Hidden China Atlas",
            discover: "Discover Hidden Gems",
            discoverDesc: "Find destinations beyond the usual tourist spots",
            map: "Interactive Map",
            mapDesc: "Explore China with our user-friendly map interface",
            planner: "Smart Trip Planner",
            plannerDesc: "Get personalized recommendations based on your preferences"
        },
        footer: {
            about: "About",
            destinations: "Destinations",
            contact: "Contact",
            copyright: "All rights reserved."
        },
        destinations: {
            pingtan: {
                name: "Pingtan Island",
                province: "Fujian Province",
                description: "A coastal gem with pristine beaches and unique stone houses"
            },
            gannan: {
                name: "Gannan Tibetan Autonomous Prefecture",
                province: "Gansu Province",
                description: "Scenic grasslands and Tibetan culture in northwestern China"
            },
            hongcun: {
                name: "Hongcun Village",
                province: "Anhui Province",
                description: "An ancient village with traditional Hui-style architecture"
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
const LanguageProvider = ({ children })=>{
    _s1();
    const [language, setLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('en');
    // 翻译函数
    const t = (key)=>{
        const keys = key.split('.');
        let result = translations[language];
        for (const k of keys){
            if (result && typeof result === 'object' && k in result) {
                result = result[k];
            } else {
                return key;
            }
        }
        return typeof result === 'string' ? result : key;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LanguageContext.Provider, {
        value: {
            language,
            setLanguage,
            t
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/lib/languageContext.tsx",
        lineNumber: 164,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(LanguageProvider, "fVUtOCD1O58HgvMjnE8lxRQa0QA=");
_c = LanguageProvider;
var _c;
__turbopack_context__.k.register(_c, "LanguageProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_lib_languageContext_tsx_12tmq-f._.js.map