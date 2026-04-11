# Hidden China Atlas

## 什么是 Hidden China Atlas？
Hidden China Atlas（中国隐藏之美地图站）是一个面向海外用户的互动式 Web 产品。它的核心目标是打破海外游客对中国旅游“只有北京、上海等热门大城市”的刻板印象，帮助用户探索那些鲜为人知、却充满自然与人文魅力的“隐藏目的地”（如：古村落、边境小城、摄影圣地等）。

产品定位：“Make hard things feel simple.”
表面上，这是一个极简的探索地图；背后，则包含了完整的内容策展、产品思考、信息架构以及高级的响应式交互设计。

## 核心功能
- **互动地图探索 (Map Explorer)**：通过精美的风格化地图直观地发现目的地。
- **精选目的地 (Hidden Picks)**：精心策展的 10 个以上高质量隐藏目的地，包含详细信息、标签及交通指南。
- **智能行程规划 (Smart Trip Planner)**：根据用户的天数和氛围偏好，自动推荐个性化的行程和目的地组合。
- **双语切换 (Bilingual Support)**：全站无缝支持中英文切换，确保海外用户与本地用户的体验。
- **多维度筛选 (Advanced Filters)**：支持按氛围 (Vibe) 和季节 (Season) 快速筛选目的地。

## 技术栈
- **框架**：Next.js 14 (App Router) + React 18
- **语言**：TypeScript
- **样式**：Tailwind CSS (定制化高级主题)
- **动画**：Framer Motion (丝滑的滚动加载、悬浮和过渡动画)
- **图标**：Lucide React
- **部署**：Vercel / 任意支持 Node.js 的云平台

## 设计决策 (Design Decisions)
1. **视觉风格**：摒弃了传统旅游网站的“大红大金”或廉价感，采用了类似高级杂志 (Editorial) 和现代创业公司落地页的极简风格。主色调使用 off-white, ink, slate 以及 jade green，体现克制、现代的高级感。
2. **地图实现**：为了确保网页的加载速度和交互的平滑感，没有引入沉重的 GIS 库（如 Mapbox/Leaflet），而是采用了一张极简风格化的中国地图底图，结合相对坐标系统动态渲染标记点，既保证了视觉美感，也完全满足了 MVP 阶段“探索感”的核心诉求。
3. **智能规划器 (Smart Planner)**：在 MVP 阶段，采用本地规则引擎（基于标签匹配）模拟 AI 规划行为。代码结构上已预留接口，未来可无缝接入 OpenAI 或其他 LLM 的真实 API。
4. **内容策展**：所有目的地均经过筛选，摒弃了过度商业化的地方，选择了诸如雨崩、霞浦、郎木寺等具备独特氛围 (Vibe) 的优质地点。

## 如何运行项目

### 1. 安装依赖
确保你已安装了 Node.js。推荐使用 `npm` 或 `pnpm`。
```bash
npm install
# 或者
pnpm install
```

### 2. 启动开发服务器
```bash
npm run dev
# 或者
pnpm dev
```
打开浏览器访问 [http://localhost:3000](http://localhost:3000) 即可预览。

### 3. 构建生产版本
```bash
npm run build
npm start
```

## 如何部署
项目已完全配置好，推荐一键部署至 Vercel：
1. 将代码推送到 GitHub/GitLab 仓库。
2. 登录 [Vercel](https://vercel.com/)，选择“Add New Project”。
3. 导入该代码仓库，Vercel 会自动识别 Next.js 框架并进行构建。
4. 点击 Deploy，等待几分钟即可上线。

## 未来如何接入真实 AI / 数据源
- **数据源**：目前目的地数据存储在 `src/data/destinations.ts` 中。未来可将此文件替换为从 CMS（如 Sanity, Strapi）或数据库（如 Supabase, PostgreSQL）的 API 获取数据。
- **智能规划器**：
  在 `src/components/SmartTripPlanner.tsx` 中，当前的规划逻辑为：
  ```typescript
  // 模拟 AI 思考时间
  setTimeout(() => {
    const matched = destinations.filter(d => d.vibes.includes(vibe));
    // ...
  }, 1500);
  ```
  未来可修改此处的 `handlePlan` 函数，向后端的 `/api/plan` 发送请求。后端可通过调用 OpenAI API，传入用户的偏好和现有目的地列表，返回 JSON 格式的推荐结果。
