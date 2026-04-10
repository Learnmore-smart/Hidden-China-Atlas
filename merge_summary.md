此次合并对项目进行了全面的前端优化和版本调整，主要包括降级依赖版本以提高稳定性、增强用户界面设计和交互体验，以及添加滚动动画等视觉效果。同时对项目结构和配置文件进行了相应调整，确保项目能够正常构建和运行。
| 文件 | 变更 |
|------|---------|
| package.json | - 降级 Next.js 版本从 16.2.3 到 14.0.4<br>- 降级 React 版本从 19.2.5 到 18.2.0<br>- 降级 ESLint 版本从 9.0.0 到 8.56.0<br>- 移除 @eslint/eslintrc 依赖<br>- 移除 overrides 配置 |
| src/app/page.tsx | - 移除 "use client" 指令<br>- 添加 useEffect 钩子实现滚动动画<br>- 改进 Hero 部分设计，添加背景图片和渐变效果<br>- 为各部分添加 id 属性用于滚动导航<br>- 优化布局和响应式设计<br>- 添加动画延迟效果增强视觉体验 |
| src/app/globals.css | - 导入新字体（Playfair Display 和 Inter）<br>- 调整颜色变量，增加新的强调色<br>- 添加多种动画效果（fadeInUp、fadeInLeft、fadeInRight 等）<br>- 改进滚动条样式<br>- 添加自定义工具类（text-shadow、hover-lift 等）<br>- 优化按钮悬停效果 |
| src/components/ChinaMap.tsx | - 移除 "use client" 指令 |
| src/components/DestinationCard.tsx | - 移除 Image 组件导入，使用普通 img 标签<br>- 改进卡片设计，增加悬停效果和动画<br>- 优化布局和样式，使用圆角和阴影增强视觉效果<br>- 改进标签和信息展示方式，使用网格布局 |
| src/components/FilterComponent.tsx | - 可能包含筛选组件的优化 |
| src/components/LanguageSwitcher.tsx | - 可能包含语言切换组件的优化 |
| src/components/SmartTripPlanner.tsx | - 可能包含智能旅行规划器组件的优化 |
| src/lib/languageContext.tsx | - 可能包含语言上下文管理的优化 |
| tailwind.config.js | - 可能包含 Tailwind 配置的调整 |
| tsconfig.json | - 可能包含 TypeScript 配置的调整 |
| next.config.mjs | - 可能包含 Next.js 配置的调整 |
| eslint.config.mjs | - 可能包含 ESLint 配置的调整 |