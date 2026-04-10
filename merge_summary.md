此次合并主要是将多个组件标记为客户端组件，并新增了Next.js类型定义文件，以适应Next.js 13+ App Router的要求。这些变更确保了组件在客户端正确渲染和运行。
| 文件 | 变更 |
|------|---------|
| next-env.d.ts | - 新增Next.js类型定义文件，包含Next.js和Next Image的类型引用 |
| src/app/page.tsx | - 添加"use client"指令，将页面标记为客户端组件 |
| src/components/ChinaMap.tsx | - 添加"use client"指令，将地图组件标记为客户端组件 |
| src/components/FilterComponent.tsx | - 添加"use client"指令，将筛选组件标记为客户端组件 |
| src/components/LanguageSwitcher.tsx | - 添加"use client"指令，将语言切换组件标记为客户端组件 |
| src/components/SmartTripPlanner.tsx | - 添加"use client"指令，将智能行程规划器标记为客户端组件 |
| src/lib/languageContext.tsx | - 添加"use client"指令，将语言上下文标记为客户端组件 |