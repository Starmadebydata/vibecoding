'use client';

import React from 'react';
import { useSafeTheme } from '@/hooks/useSafeTheme';
import { Terminal, Code, Bot, Zap, ArrowLeft, Github, Laptop, Settings, Workflow, Download, ExternalLink, Book } from 'lucide-react';
import Link from 'next/link';

const ToolsPage: React.FC = () => {
  const { theme } = useSafeTheme();
  
  const tools = [
    {
      name: 'Cursor',
      description: '基于 AI 的代码编辑器，集成了强大的代码生成和编辑功能。',
      category: '编辑器',
      icon: <Terminal className="w-6 h-6 text-purple-500" />,
      features: ['AI 代码补全', '自然语言编程', '实时代码分析', '智能重构建议'],
      link: 'https://cursor.sh',
      image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      name: 'GitHub Copilot',
      description: '由 OpenAI 和 GitHub 合作开发的 AI 代码助手，集成于多种编辑器。',
      category: '代码助手',
      icon: <Github className="w-6 h-6 text-blue-500" />,
      features: ['代码自动补全', '注释转代码', '多语言支持', 'IDE 集成'],
      link: 'https://github.com/features/copilot',
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      name: 'ChatGPT',
      description: 'OpenAI 的对话式 AI 模型，可用于代码生成、调试和解释。',
      category: 'AI 助手',
      icon: <Bot className="w-6 h-6 text-green-500" />,
      features: ['自然语言编程', '代码解释', '调试帮助', '学习资源'],
      link: 'https://chat.openai.com',
      image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      name: 'Claude',
      description: 'Anthropic 开发的 AI 助手，擅长理解复杂指令和生成高质量代码。',
      category: 'AI 助手',
      icon: <Bot className="w-6 h-6 text-amber-500" />,
      features: ['长上下文理解', '代码生成', '文档创建', '问题解决'],
      link: 'https://claude.ai',
      image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      name: 'VSCode + AI 插件',
      description: '在 Visual Studio Code 中集成各种 AI 编程助手插件。',
      category: '编辑器',
      icon: <Code className="w-6 h-6 text-blue-500" />,
      features: ['多种 AI 插件', '灵活配置', '熟悉的界面', '扩展生态'],
      link: 'https://marketplace.visualstudio.com/',
      image: 'https://images.pexels.com/photos/4709285/pexels-photo-4709285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      name: 'Replit',
      description: '在线 IDE 和协作平台，集成了 AI 编程助手功能。',
      category: '在线平台',
      icon: <Laptop className="w-6 h-6 text-indigo-500" />,
      features: ['在线编码环境', 'AI 辅助编码', '实时预览', '团队协作'],
      link: 'https://replit.com',
      image: 'https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ];

  const categories = [
    { name: '编辑器', count: 2 },
    { name: '代码助手', count: 1 },
    { name: 'AI 助手', count: 2 },
    { name: '在线平台', count: 1 }
  ];

  return (
    <div className={`min-h-screen w-full ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center mb-8">
          <Link href="/" className={`flex items-center text-sm font-medium ${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-200`}>
            <ArrowLeft className="w-4 h-4 mr-1" />
            返回首页
          </Link>
        </div>

        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              AI 编程工具文档
            </span>
          </h1>
          <p className={`mt-4 text-xl max-w-3xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            探索各种 AI 编程工具，找到最适合你的开发助手
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16">
          <div className="lg:col-span-1">
            <div className={`sticky top-8 p-6 rounded-xl ${theme === 'dark' ? 'bg-gray-800 border border-gray-700' : 'bg-white shadow-lg'}`}>
              <h2 className="text-xl font-bold mb-4">分类</h2>
              <ul className="space-y-2">
                {categories.map((category, index) => (
                  <li key={index}>
                    <a 
                      href={`#${category.name}`}
                      className={`flex items-center justify-between p-2 rounded ${
                        theme === 'dark' 
                          ? 'hover:bg-gray-700' 
                          : 'hover:bg-gray-100'
                      } transition-colors duration-200`}
                    >
                      <span>{category.name}</span>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        theme === 'dark' 
                          ? 'bg-gray-700 text-gray-300' 
                          : 'bg-gray-200 text-gray-700'
                      }`}>{category.count}</span>
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <h2 className="text-xl font-bold mb-4">筛选</h2>
                <div className="space-y-4">
                  <div>
                    <label className={`block mb-2 text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                      功能
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded text-purple-600 focus:ring-purple-500" />
                        <span className="ml-2">代码补全</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded text-purple-600 focus:ring-purple-500" />
                        <span className="ml-2">自然语言编程</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded text-purple-600 focus:ring-purple-500" />
                        <span className="ml-2">代码解释</span>
                      </label>
                    </div>
                  </div>
                  
                  <div>
                    <label className={`block mb-2 text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                      价格
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded text-purple-600 focus:ring-purple-500" />
                        <span className="ml-2">免费</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded text-purple-600 focus:ring-purple-500" />
                        <span className="ml-2">付费</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded text-purple-600 focus:ring-purple-500" />
                        <span className="ml-2">订阅制</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="space-y-12">
              {tools.map((tool, index) => (
                <div 
                  key={index}
                  className={`rounded-xl overflow-hidden ${
                    theme === 'dark' 
                      ? 'bg-gray-800 border border-gray-700' 
                      : 'bg-white shadow-lg'
                  }`}
                >
                  <div className="md:flex">
                    <div className="md:w-1/3 h-60 md:h-auto">
                      <img 
                        src={tool.image} 
                        alt={tool.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 md:w-2/3">
                      <div className="flex items-center mb-2">
                        <span className={`px-3 py-1 rounded-full text-xs ${
                          theme === 'dark' 
                            ? 'bg-gray-700 text-gray-300' 
                            : 'bg-gray-200 text-gray-700'
                        }`}>{tool.category}</span>
                      </div>
                      <div className="flex items-center mb-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
                        } mr-3`}>
                          {tool.icon}
                        </div>
                        <h3 className="text-2xl font-bold">{tool.name}</h3>
                      </div>
                      <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                        {tool.description}
                      </p>
                      <div className="mb-6">
                        <h4 className="font-semibold mb-2">主要功能：</h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {tool.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center">
                              <Zap className="w-4 h-4 text-purple-500 mr-2 flex-shrink-0" />
                              <span className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        <a 
                          href={tool.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white transition-all duration-200"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          访问官网
                        </a>
                        <a 
                          href={`/tools/${tool.name.toLowerCase().replace(/\s+/g, '-')}`}
                          className={`inline-flex items-center px-4 py-2 rounded-lg ${
                            theme === 'dark' 
                              ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                              : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                          } transition-all duration-200`}
                        >
                          <Book className="w-4 h-4 mr-2" />
                          详细文档
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={`p-8 rounded-xl ${theme === 'dark' ? 'bg-gray-800 border border-gray-700' : 'bg-white shadow-lg'} mb-16`}>
          <h2 className="text-3xl font-bold mb-6 text-center">
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              工具选择指南
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className={`p-5 rounded-lg ${theme === 'dark' ? 'bg-gray-700/50' : 'bg-gray-50'}`}>
              <h3 className="font-bold mb-3 flex items-center">
                <Laptop className="w-5 h-5 mr-2 text-purple-500" />
                初学者
              </h3>
              <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                如果你是编程初学者，推荐使用：
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>ChatGPT - 易于使用的对话界面</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Replit - 在线环境，无需本地配置</span>
                </li>
              </ul>
            </div>
            
            <div className={`p-5 rounded-lg ${theme === 'dark' ? 'bg-gray-700/50' : 'bg-gray-50'}`}>
              <h3 className="font-bold mb-3 flex items-center">
                <Code className="w-5 h-5 mr-2 text-blue-500" />
                专业开发者
              </h3>
              <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                对于专业开发者，推荐使用：
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>GitHub Copilot - 深度集成到开发流程</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Cursor - 强大的代码生成和编辑功能</span>
                </li>
              </ul>
            </div>
            
            <div className={`p-5 rounded-lg ${theme === 'dark' ? 'bg-gray-700/50' : 'bg-gray-50'}`}>
              <h3 className="font-bold mb-3 flex items-center">
                <Settings className="w-5 h-5 mr-2 text-green-500" />
                团队协作
              </h3>
              <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                对于团队协作场景，推荐使用：
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>GitHub Copilot + VSCode - 标准化工具链</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Replit - 实时协作功能</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              还有疑问？
            </span>
          </h2>
          <p className={`mb-8 max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            如果你对 AI 编程工具有任何疑问，或者需要更详细的信息，请随时联系我们。
          </p>
          <Link 
            href="/contact"
            className="px-8 py-3 rounded-lg font-medium bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg transform transition-all duration-200 hover:scale-105 inline-block"
          >
            联系我们
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ToolsPage;