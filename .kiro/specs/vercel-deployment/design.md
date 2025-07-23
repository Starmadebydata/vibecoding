# Design Document

## Overview

本设计文档描述了将 Vibe Coding 项目从 Netlify 迁移到 Vercel 的技术方案。迁移将保持应用的所有功能，同时利用 Vercel 平台的优势，包括更好的 React/Vite 项目支持、边缘函数能力和自动优化功能。

## Architecture

### Current Architecture
- **构建工具**: Vite + React + TypeScript
- **部署平台**: Netlify
- **数据库**: Supabase
- **样式**: Tailwind CSS
- **路由**: React Router (SPA)

### Target Architecture
- **构建工具**: Vite + React + TypeScript (保持不变)
- **部署平台**: Vercel
- **数据库**: Supabase (保持不变)
- **样式**: Tailwind CSS (保持不变)
- **路由**: React Router (SPA) + Vercel 路由配置

## Components and Interfaces

### 1. Vercel 配置文件 (vercel.json)
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### 2. 环境变量迁移
- **VITE_SUPABASE_URL**: 从 Netlify 环境变量迁移到 Vercel
- **VITE_SUPABASE_ANON_KEY**: 从 Netlify 环境变量迁移到 Vercel

### 3. 构建配置
- 保持现有的 `package.json` 构建脚本
- 确保 Vite 配置与 Vercel 兼容
- 移除 Netlify 特定配置文件

## Data Models

### 部署配置模型
```typescript
interface VercelConfig {
  buildCommand: string;
  outputDirectory: string;
  devCommand: string;
  installCommand: string;
  rewrites: Array<{
    source: string;
    destination: string;
  }>;
}

interface EnvironmentVariables {
  VITE_SUPABASE_URL: string;
  VITE_SUPABASE_ANON_KEY: string;
}
```

### 迁移检查清单
```typescript
interface MigrationChecklist {
  configFiles: {
    vercelJson: boolean;
    netlifyRemoved: boolean;
  };
  environmentVariables: {
    supabaseUrl: boolean;
    supabaseKey: boolean;
  };
  functionality: {
    routing: boolean;
    authentication: boolean;
    database: boolean;
    staticAssets: boolean;
  };
}
```

## Error Handling

### 1. 构建错误处理
- **问题**: Vite 构建失败
- **解决方案**: 检查依赖版本兼容性，确保构建命令正确

### 2. 路由错误处理
- **问题**: SPA 路由在 Vercel 上返回 404
- **解决方案**: 配置 `vercel.json` 中的 rewrites 规则

### 3. 环境变量错误
- **问题**: Supabase 连接失败
- **解决方案**: 验证环境变量在 Vercel 控制台中正确设置

### 4. 静态资源错误
- **问题**: 静态资源路径错误
- **解决方案**: 确保 Vite 的 base 配置正确

## Testing Strategy

### 1. 本地测试
- 在本地环境验证 Vercel CLI 构建
- 测试所有路由和功能
- 验证环境变量加载

### 2. 预览部署测试
- 使用 Vercel 预览部署测试完整功能
- 验证 Supabase 连接
- 测试用户认证流程
- 验证数据库操作

### 3. 生产部署测试
- 逐步迁移流量
- 监控性能指标
- 验证所有功能正常工作

### 4. 回滚计划
- 保持 Netlify 部署作为备份
- 准备快速回滚方案
- 监控部署后的错误日志

## Migration Steps Overview

1. **准备阶段**: 创建 Vercel 配置文件
2. **配置阶段**: 设置环境变量和部署设置
3. **测试阶段**: 预览部署和功能验证
4. **迁移阶段**: 正式部署和 DNS 切换
5. **清理阶段**: 移除 Netlify 配置文件

## Performance Considerations

### Vercel 优势
- **边缘网络**: 全球 CDN 分发
- **自动优化**: 图片和资源优化
- **快速构建**: 增量构建支持
- **零配置**: React/Vite 项目开箱即用

### 性能监控
- 使用 Vercel Analytics 监控性能
- 对比迁移前后的加载时间
- 监控 Core Web Vitals 指标