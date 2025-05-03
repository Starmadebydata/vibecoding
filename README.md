# Vibe Coding

> 一个为开发者量身打造的现代化编码体验平台，集成了学习、工具、社区和音乐等多种功能，帮助你高效提升编程技能。

---

## 项目简介

Vibe Coding 致力于提升开发者的编码体验。通过整合编程指南、实用工具、最佳实践、教程、社区互动和音乐氛围，为用户打造一站式学习与成长空间。

---

## 技术栈
- **前端框架**：React + TypeScript
- **构建工具**：Vite
- **路由管理**：react-router-dom
- **样式**：Tailwind CSS
- **后端服务**：Supabase（用户认证、数据库）
- **其他依赖**：lucide-react（图标）、postcss、eslint 等

---

## 主要功能

### 1. 首页展示
- 项目亮点介绍（Hero、Features）
- 编码工具展示（ToolsShowcase）
- 博客与社区内容（Blog、Community）
- 音乐播放器提升编程氛围

### 2. 多功能页面
- **/guides**：编程学习指南
- **/tools**：实用开发工具集合
- **/best-practices**：最佳开发实践分享
- **/tutorials**：系统化教程与案例

### 3. 用户认证
- 基于 Supabase，支持注册、登录、会话管理

### 4. 社区互动
- 讨论区、内容分享、经验交流

### 5. 主题与音乐
- 支持主题切换（深色/浅色）
- 集成音乐播放器

---

## 目录结构说明

```text
├── src
│   ├── App.tsx                # 应用主入口，配置全局路由和上下文
│   ├── main.tsx               # React 渲染入口
│   ├── components/            # 各类功能组件
│   ├── contexts/              # 全局状态管理（主题、用户、音乐）
│   ├── pages/                 # 主要功能页面
│   └── lib/                   # 工具库
├── supabase/                  # Supabase 配置及迁移脚本
├── dist/                      # 构建输出目录
├── index.html                 # HTML 模板
├── package.json               # 依赖与脚本
├── tailwind.config.js         # TailwindCSS 配置
├── vite.config.ts             # Vite 配置
└── ...
```

---

## 安装与运行

1. **克隆项目**
   ```bash
   git clone <你的仓库地址>
   cd vibecoding
   ```
2. **安装依赖**
   ```bash
   npm install
   ```
3. **本地开发**
   ```bash
   npm run dev
   ```
4. **生产环境构建**
   ```bash
   npm run build
   ```
5. **预览构建结果**
   ```bash
   npm run preview
   ```

---

## 配置说明

- **Supabase**：请在 `.env` 文件中配置你的 Supabase 项目 URL 和 API Key。
- **环境变量**：根据实际需求补充其他环境变量。

---

## 常见问题

1. **依赖安装失败？**
   - 请确保 Node.js 版本 >= 18。
   - 检查 npm 源是否可用。

2. **页面空白或报错？**
   - 检查 `.env` 配置是否正确。
   - 查看终端和浏览器控制台日志。

3. **Supabase 相关功能不可用？**
   - 请确认 Supabase 项目已正确配置并联网。

---

## 贡献指南

欢迎任何形式的贡献！你可以：
- 提交 Issue 反馈 Bug 或建议
- Fork 项目并提交 Pull Request
- 优化文档或补充测试

---

## 联系方式

如有疑问或建议，请通过 Issue 或邮箱与我们联系。

---

## 未来规划
- 持续丰富工具与教程内容
- 增强社区互动功能
- 增加更多第三方服务集成
- 优化移动端体验

---

## 致谢
感谢所有为本项目贡献代码、创意和建议的开发者与用户！

---

> 本项目适合所有希望提升编码体验的开发者，欢迎你的加入！
