# Hidden China Atlas

## 项目介绍

Hidden China Atlas 是一个面向海外用户的互动网站，旨在展示中国不为人知的隐藏之美，帮助用户发现除北京、上海和热门景点外的独特目的地。

### 核心功能

- **互动地图**：使用简化的中国 SVG 地图，展示隐藏目的地标记
- **精选目的地**：展示 12 个隐藏宝藏地点，包含详细信息
- **筛选功能**：支持按季节、氛围、旅行时长和人群水平进行筛选
- **智能旅行规划**：根据用户输入推荐个性化目的地和行程
- **双语支持**：默认英文，提供中英切换功能

### 技术栈

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- React

## 如何运行

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

### 启动生产服务器

```bash
npm start
```

## 如何部署

项目设计为易于部署到 Vercel 或类似平台。

### Vercel 部署步骤

1. 登录 Vercel 账户
2. 点击 "New Project"
3. 选择你的 Git 仓库
4. 点击 "Deploy"
5. 等待部署完成

## 项目结构

```
├── src/
│   ├── app/              # Next.js App Router 页面
│   ├── components/       # React 组件
│   ├── data/             # 本地数据文件
│   ├── lib/              # 工具函数和上下文
│   └── styles/           # 样式文件
├── public/               # 静态资源
├── .gitignore            # Git 忽略文件
├── next.config.js        # Next.js 配置
├── package.json          # 项目依赖
├── tailwind.config.js    # Tailwind CSS 配置
└── README.md             # 项目说明
```

## 数据结构

目的地数据存储在 `src/data/destinations.ts` 文件中，包含以下字段：

- id: 唯一标识符
- name: 英文名称
- chineseName: 中文名称
- province: 所在省份
- tagline: 简短描述
- whySpecial: 特色说明
- bestSeason: 最佳季节
- idealTripLength: 理想旅行时长
- vibeTags: 氛围标签
- crowdLevel: 人群水平
- howToGetThere: 交通方式
- description: 详细描述
- imageUrl: 图片 URL

## 未来扩展

### 接入真实 AI API

当前智能旅行规划使用基于规则的算法，未来可以接入真实的 LLM/API 以提供更智能的推荐。

### 动态数据源

可以考虑使用 CMS 或 API 来管理目的地数据，实现动态更新。

### 更多功能

- 用户账户系统
- 评论和评分
- 收藏功能
- 分享功能
- 多语言支持（除中英文外）

## 设计决策

1. **地图实现**：使用简化的 SVG 地图而非复杂的 GIS 系统，优先考虑视觉体验和交互流畅度
2. **数据管理**：使用本地 JSON/TS 对象存储数据，便于快速开发和部署
3. **双语支持**：使用 React Context 管理语言状态，实现简单高效的双语切换
4. **响应式设计**：使用 Tailwind CSS 实现全响应式布局，确保在不同设备上的良好体验
5. **性能优化**：使用 Next.js App Router 和静态生成，提高页面加载速度

## 贡献

欢迎提交 Issue 和 Pull Request 来改进这个项目。

## 许可证

MIT
