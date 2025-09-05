# Vibe Coding

> 一个为开发者量身打造的现代化编码体验平台，集成了学习、工具、社区和音乐等多种功能，帮助你高效提升编程技能。

---

## 项目简介

Vibe Coding 致力于提升开发者的编码体验。通过整合编程指南、实用工具、最佳实践、教程、社区互动和音乐氛围，为用户打造一站式学习与成长空间。

---

## 技术栈（当前）
- 前端框架：Next.js 14（App Router）+ React + TypeScript
- 国际化：next-intl（中英文、自动语言检测）
- 样式：Tailwind CSS（darkMode='class'）
- 后端服务：Supabase（用户认证、数据库）
- 其他：ESLint（next/core-web-vitals + @typescript-eslint）、PostCSS、Autoprefixer

> 备注：本仓库已使用 Next.js App Router，不再使用 Vite 或 react-router。

---

## 主要功能

### 1. 首页与板块
- 项目亮点（Hero、Features）
- 编码示例/工具（CodeEditor）
- 项目/博客/社区内容展示（ProjectsShowcase、Blog、Community）
- 音乐播放器营造氛围（MusicPlayer）

### 2. 多语言与路由
- 路由结构采用 App Router，并在 app/[locale]/... 下提供多语言页面（zh / en）
- middleware.ts 使用 next-intl 进行语言检测，默认中文，并为非静态资源路径启用国际化

### 3. 用户认证
- 基于 Supabase，支持注册、登录、登出、会话管理
- 首次登录会在 vibecoding_users 与 vibecoding_profiles 表创建记录（需邮箱已验证）

### 4. 主题切换
- ThemeContext 管理 light/dark，并通过 documentElement.classList 与 Tailwind 集成

---

## 目录结构简介

```text
├── app/
│   ├── [locale]/                # 本地化路由段（zh/en）
│   │   ├── layout.tsx           # 包裹 NextIntlClientProvider、ThemeProvider、AuthProvider
│   │   └── page.tsx             # 首页组合（Hero/Features/CodeEditor/...）
│   ├── layout.tsx               # 根布局：重定向到 /zh
│   └── page.tsx                 # 根页面：重定向到 /zh
├── middleware.ts                # next-intl 中间件（语言检测与匹配）
├── messages/                    # 文案（zh.json / en.json）
├── src/
│   ├── components/              # 站点组件（含 Navbar、LanguageSwitcher、AuthModal 等）
│   ├── contexts/                # ThemeContext、AuthContext 等
│   ├── hooks/                   # useLocalization/useSafeTheme 等
│   ├── lib/                     # supabase 客户端初始化
│   └── i18n.ts                  # next-intl 请求配置
├── tailwind.config.js           # Tailwind 配置（扫描 app/、src/、components/）
├── next.config.js               # 启用 next-intl 插件、图片与 env 配置
├── eslint.config.js             # ESLint 配置
├── tsconfig.json                # 路径别名 @/* → src/*
└── package.json                 # 脚本与依赖
```

---

## 安装与运行

1. 克隆项目
   ```bash
   git clone <你的仓库地址>
   cd vibecoding
   ```
2. 安装依赖（Node.js ≥ 18）
   ```bash
   npm install
   ```
3. 本地开发
   ```bash
   npm run dev
   ```
4. 生产构建
   ```bash
   npm run build
   ```
5. 生产启动
   ```bash
   npm run start
   ```

> 注意：本项目为 Next.js，不存在 `npm run preview`（Vite 的预览命令）。

---

## 环境配置

在项目根目录创建 `.env.local`，至少包含：

```bash
NEXT_PUBLIC_SUPABASE_URL=你的 Supabase URL
NEXT_PUBLIC_SUPABASE_ANON_KEY=你的 Supabase 匿名密钥
```

- src/lib/supabase.ts 在变量缺失时会抛错，请确保正确配置再启动。
- 如果需要服务端密钥（如 SERVICE_ROLE），务必只在服务端使用并避免暴露到客户端。

---

## 常见问题（FAQ）

1) 依赖安装失败？
- 请确保 Node.js 版本 ≥ 18。
- 检查 npm 源与网络连通性。

2) 页面空白或报错？
- 检查 `.env.local` 是否正确配置。
- 查看终端与浏览器控制台日志。

3) Supabase 功能不可用？
- 确认 Supabase 项目可用，URL/Key 无误，且邮箱验证逻辑满足要求。

---

## 贡献指南

欢迎任何形式的贡献：
- 提交 Issue 反馈问题或建议
- Fork 并提交 Pull Request
- 改进文档或补充测试

---

## 未来规划
- 持续丰富工具与教程
- 增强社区互动能力
- 增加第三方服务集成
- 优化移动端体验

---

## 致谢
感谢所有为本项目贡献代码、创意和建议的开发者与用户！
