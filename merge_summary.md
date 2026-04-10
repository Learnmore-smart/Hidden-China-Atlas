此次合并主要是将 trae/solo-agent-mwFqup 分支的基础项目结构合并到 origin/main 分支，origin/main 分支在此基础上添加了 Next.js 配置文件和客户端组件标记。这些变更确保了项目符合 Next.js 13+ App Router 的要求，能够正确运行。
| 文件 | 变更 |
|------|---------|
| next.config.mjs | - 新增 Next.js 配置文件，配置了远程图片模式，允许使用 trae-api-cn.mchost.guru 域名的图片 |
| eslint.config.mjs | - 新增 ESLint 配置文件，集成了 Next.js 的核心 Web Vitals 和 TypeScript 规则 |
| next-env.d.ts | - 新增 Next.js 类型定义文件，包含 Next.js 和 Next Image 的类型引用 |
| src/app/page.tsx | - 添加 "use client" 指令，将页面标记为客户端组件 |
| src/components/ChinaMap.tsx | - 添加 "use client" 指令，将地图组件标记为客户端组件 |
| src/components/FilterComponent.tsx | - 添加 "use client" 指令，将筛选组件标记为客户端组件 |
| src/components/LanguageSwitcher.tsx | - 添加 "use client" 指令，将语言切换组件标记为客户端组件 |
| src/components/SmartTripPlanner.tsx | - 添加 "use client" 指令，将智能行程规划器标记为客户端组件 |
| src/lib/languageContext.tsx | - 添加 "use client" 指令，将语言上下文标记为客户端组件 |