'use client';

import React, { useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { Bot, Code, Sparkles, Terminal, Braces, Laptop, Workflow, Plug as Plugin } from 'lucide-react';

const ToolsShowcase: React.FC = () => {
  const { theme } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState<keyof typeof tools>('editors');
  
  const tools = {
    editors: [
      {
        name: 'Cursor',
        description: '基于 AI 的新一代编程工具，集成了强大的代码生成和编辑功能。',
        features: ['AI 代码补全', '自然语言编程', '实时代码分析', '智能重构建议'],
        icon: <Terminal className="w-6 h-6" />,
        url: 'https://cursor.sh'
      },
      {
        name: 'Windsurf',
        description: '专注于前端开发的 AI 编程助手，提供智能化的界面设计和组件生成。',
        features: ['UI 组件生成', '样式智能推荐', '响应式设计辅助', '代码优化'],
        icon: <Braces className="w-6 h-6" />,
        url: 'https://windsurf.dev'
      },
      {
        name: 'bolt.new',
        description: '在线 AI 编程环境，支持实时协作和快速原型开发。',
        features: ['在线编程环境', 'AI 辅助编码', '实时预览', '团队协作'],
        icon: <Bot className="w-6 h-6" />,
        url: 'https://bolt.new'
      }
    ],
    plugins: [
      {
        name: 'Cline',
        description: 'VSCode 的 AI 代码助手插件，提供智能代码建议和重构功能。',
        features: ['代码补全', '重构建议', '错误检测', '文档生成'],
        icon: <Plugin className="w-6 h-6" />,
        url: 'https://marketplace.visualstudio.com'
      },
      {
        name: 'Roo Code',
        description: '智能代码审查和优化插件，自动提供改进建议。',
        features: ['代码审查', '性能优化', '最佳实践建议', '安全检查'],
        icon: <Code className="w-6 h-6" />,
        url: 'https://roocode.com'
      },
      {
        name: 'Augment Code',
        description: '增强型代码智能助手，支持多种编辑器和 IDE。',
        features: ['跨平台支持', 'AI 驱动分析', '代码生成', '重构助手'],
        icon: <Sparkles className="w-6 h-6" />,
        url: 'https://augmentcode.dev'
      }
    ],
    platforms: [
      {
        name: 'v0.dev',
        description: 'Vercel 推出的 AI 驱动的 UI 开发平台，通过文本生成完整的前端组件。',
        features: ['UI 原型设计', '组件生成', 'React 支持', '响应式布局'],
        icon: <Laptop className="w-6 h-6" />,
        url: 'https://v0.dev'
      },
      {
        name: 'MCP',
        description: '多语言代码处理平台，支持跨语言的代码转换和优化。',
        features: ['代码迁移', '语言转换', '性能优化', 'API 适配'],
        icon: <Workflow className="w-6 h-6" />,
        url: 'https://mcp.dev'
      }
    ]
  };
  
  return (
    <section id="tools" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              AI 编程工具
            </span>
          </h2>
          <p className={`mt-2 max-w-2xl mx-auto text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            探索最新的 AI 驱动编程工具，提升开发效率
          </p>
        </div>
        
        <div className="flex justify-center mb-8 space-x-4">
          <button
            onClick={() => setSelectedCategory('editors')}
            className={`px-4 py-2 rounded-lg transition-all duration-200 ${
              selectedCategory === 'editors'
                ? 'bg-purple-600 text-white'
                : theme === 'dark' ? 'bg-gray-800 text-gray-300' : 'bg-gray-200 text-gray-700'
            }`}
          >
            编辑器
          </button>
          <button
            onClick={() => setSelectedCategory('plugins')}
            className={`px-4 py-2 rounded-lg transition-all duration-200 ${
              selectedCategory === 'plugins'
                ? 'bg-purple-600 text-white'
                : theme === 'dark' ? 'bg-gray-800 text-gray-300' : 'bg-gray-200 text-gray-700'
            }`}
          >
            插件
          </button>
          <button
            onClick={() => setSelectedCategory('platforms')}
            className={`px-4 py-2 rounded-lg transition-all duration-200 ${
              selectedCategory === 'platforms'
                ? 'bg-purple-600 text-white'
                : theme === 'dark' ? 'bg-gray-800 text-gray-300' : 'bg-gray-200 text-gray-700'
            }`}
          >
            平台
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools[selectedCategory].map((tool, index) => (
            <div
              key={index}
              className={`rounded-xl overflow-hidden transition-all duration-300 hover:transform hover:scale-105 ${
                theme === 'dark'
                  ? 'bg-gray-800 border border-gray-700'
                  : 'bg-white border border-gray-200 shadow-lg'
              }`}
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    theme === 'dark' ? 'bg-purple-900/30' : 'bg-purple-100'
                  }`}>
                    {tool.icon}
                  </div>
                  <h3 className="text-xl font-bold ml-4">{tool.name}</h3>
                </div>
                
                <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  {tool.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {tool.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Sparkles className="w-4 h-4 text-purple-500 mr-2" />
                      <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full py-3 text-center rounded-lg font-medium bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white transition-all duration-200"
                >
                  了解更多
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsShowcase;