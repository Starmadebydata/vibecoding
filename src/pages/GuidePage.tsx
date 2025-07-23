'use client';

import React from 'react';
import Link from 'next/link';
import { useSafeTheme } from '@/hooks/useSafeTheme';
import { Bot, Book, Code, Sparkles, Terminal, Brain, MessageSquare, Zap, ArrowLeft } from 'lucide-react';

const GuidePage: React.FC = () => {
  const { theme } = useSafeTheme();
  
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
              Vibe Coding 入门指南
            </span>
          </h1>
          <p className={`mt-4 text-xl max-w-3xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            探索 AI 驱动的编程方法，让开发更高效、更有创意
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className={`p-8 rounded-xl ${theme === 'dark' ? 'bg-gray-800 border border-gray-700' : 'bg-white shadow-lg'}`}>
            <div className="flex items-start mb-6">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${theme === 'dark' ? 'bg-purple-900/30' : 'bg-purple-100'} mr-4`}>
                <Bot className="w-6 h-6 text-purple-500" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">什么是 Vibe Coding？</h2>
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  Vibe Coding 是一种新型的编程方法，它结合了人类的创造力和 AI 的能力，让开发者专注于想法和架构设计，而将繁重的编码工作交给 AI 处理。
                </p>
              </div>
            </div>
            <ul className={`space-y-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              <li className="flex items-start">
                <Sparkles className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>专注于创意和解决问题，而不是语法和样板代码</span>
              </li>
              <li className="flex items-start">
                <Sparkles className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>通过自然语言描述需求，让 AI 生成代码实现</span>
              </li>
              <li className="flex items-start">
                <Sparkles className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>提高开发效率，减少重复性工作</span>
              </li>
            </ul>
          </div>

          <div className={`p-8 rounded-xl ${theme === 'dark' ? 'bg-gray-800 border border-gray-700' : 'bg-white shadow-lg'}`}>
            <div className="flex items-start mb-6">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${theme === 'dark' ? 'bg-blue-900/30' : 'bg-blue-100'} mr-4`}>
                <Zap className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">为什么选择 Vibe Coding？</h2>
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  传统编程方法需要开发者处理大量细节，而 Vibe Coding 让你可以更专注于创意和解决方案，大幅提升开发效率。
                </p>
              </div>
            </div>
            <ul className={`space-y-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              <li className="flex items-start">
                <Sparkles className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>减少 40-60% 的开发时间</span>
              </li>
              <li className="flex items-start">
                <Sparkles className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>降低入门门槛，让更多人能够参与软件开发</span>
              </li>
              <li className="flex items-start">
                <Sparkles className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>快速原型开发和迭代，加速产品上市时间</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              入门步骤
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`p-6 rounded-xl transition-all duration-300 transform hover:scale-105 ${theme === 'dark' ? 'bg-gray-800 border border-gray-700' : 'bg-white shadow-md'}`}>
              <div className="mb-4 text-center">
                <div className={`w-16 h-16 rounded-full mx-auto flex items-center justify-center ${theme === 'dark' ? 'bg-purple-900/30' : 'bg-purple-100'}`}>
                  <Terminal className="w-8 h-8 text-purple-500" />
                </div>
                <h3 className="text-xl font-bold mt-4 mb-2">1. 选择 AI 工具</h3>
              </div>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                选择一个支持 Vibe Coding 的 AI 编程助手，如 Cursor、GitHub Copilot、Claude 或 ChatGPT。这些工具能够理解自然语言并生成代码。
              </p>
            </div>
            
            <div className={`p-6 rounded-xl transition-all duration-300 transform hover:scale-105 ${theme === 'dark' ? 'bg-gray-800 border border-gray-700' : 'bg-white shadow-md'}`}>
              <div className="mb-4 text-center">
                <div className={`w-16 h-16 rounded-full mx-auto flex items-center justify-center ${theme === 'dark' ? 'bg-blue-900/30' : 'bg-blue-100'}`}>
                  <Brain className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold mt-4 mb-2">2. 学习提示工程</h3>
              </div>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                掌握如何编写清晰、精确的提示词是 Vibe Coding 的关键。好的提示应该包含功能需求、技术栈、代码风格等信息，以获得最佳结果。
              </p>
            </div>
            
            <div className={`p-6 rounded-xl transition-all duration-300 transform hover:scale-105 ${theme === 'dark' ? 'bg-gray-800 border border-gray-700' : 'bg-white shadow-md'}`}>
              <div className="mb-4 text-center">
                <div className={`w-16 h-16 rounded-full mx-auto flex items-center justify-center ${theme === 'dark' ? 'bg-green-900/30' : 'bg-green-100'}`}>
                  <Code className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-xl font-bold mt-4 mb-2">3. 迭代与优化</h3>
              </div>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                与 AI 进行多轮对话，逐步完善你的代码。审查 AI 生成的代码，提供反馈，并要求进行必要的修改和优化。
              </p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              最佳实践
            </span>
          </h2>
          
          <div className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-gray-800 border border-gray-700' : 'bg-white shadow-lg'} mb-8`}>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <MessageSquare className="w-5 h-5 mr-2 text-purple-500" />
              编写有效的提示词
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2 text-lg">做法：</h4>
                <ul className={`space-y-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>明确指定功能需求和预期输出</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>提供技术栈、框架和库的信息</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>分享代码风格偏好和命名约定</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>提供相关上下文和已有代码</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-lg">避免：</h4>
                <ul className={`space-y-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    <span>模糊不清的需求描述</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    <span>过于宽泛的请求（如"写一个网站"）</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    <span>忽略重要的技术约束或要求</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    <span>一次请求过多功能</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-gray-800 border border-gray-700' : 'bg-white shadow-lg'}`}>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Book className="w-5 h-5 mr-2 text-blue-500" />
              提示词模板
            </h3>
            <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'} font-mono text-sm`}>
              <p>我需要开发一个[应用类型]，功能包括[详细功能描述]。</p>
              <p className="mt-2">技术要求：</p>
              <p>- 前端：[框架/库]</p>
              <p>- 后端：[框架/语言]</p>
              <p>- 数据库：[数据库类型]</p>
              <p>- 其他要求：[性能/安全/兼容性等]</p>
              <p className="mt-2">代码风格偏好：</p>
              <p>- [命名约定]</p>
              <p>- [架构模式]</p>
              <p>- [其他偏好]</p>
              <p className="mt-2">请首先生成[组件/功能]的代码。</p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              常见工具
            </span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className={`p-6 rounded-xl transition-all duration-300 transform hover:scale-105 ${theme === 'dark' ? 'bg-gray-800 border border-gray-700' : 'bg-white shadow-md'}`}>
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${theme === 'dark' ? 'bg-purple-900/30' : 'bg-purple-100'} mb-4`}>
                <Terminal className="w-6 h-6 text-purple-500" />
              </div>
              <h3 className="text-lg font-bold mb-2">Cursor</h3>
              <p className={`mb-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                基于 AI 的代码编辑器，集成了强大的代码生成和编辑功能。
              </p>
              <a href="https://cursor.sh" target="_blank" rel="noopener noreferrer" className="text-purple-500 hover:text-purple-600 font-medium">
                了解更多 →
              </a>
            </div>
            
            <div className={`p-6 rounded-xl transition-all duration-300 transform hover:scale-105 ${theme === 'dark' ? 'bg-gray-800 border border-gray-700' : 'bg-white shadow-md'}`}>
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${theme === 'dark' ? 'bg-blue-900/30' : 'bg-blue-100'} mb-4`}>
                <Code className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-lg font-bold mb-2">GitHub Copilot</h3>
              <p className={`mb-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                由 OpenAI 和 GitHub 合作开发的 AI 代码助手，集成于多种编辑器。
              </p>
              <a href="https://github.com/features/copilot" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 font-medium">
                了解更多 →
              </a>
            </div>
            
            <div className={`p-6 rounded-xl transition-all duration-300 transform hover:scale-105 ${theme === 'dark' ? 'bg-gray-800 border border-gray-700' : 'bg-white shadow-md'}`}>
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${theme === 'dark' ? 'bg-green-900/30' : 'bg-green-100'} mb-4`}>
                <Bot className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="text-lg font-bold mb-2">ChatGPT</h3>
              <p className={`mb-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                OpenAI 的对话式 AI 模型，可用于代码生成、调试和解释。
              </p>
              <a href="https://chat.openai.com" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-600 font-medium">
                了解更多 →
              </a>
            </div>
            
            <div className={`p-6 rounded-xl transition-all duration-300 transform hover:scale-105 ${theme === 'dark' ? 'bg-gray-800 border border-gray-700' : 'bg-white shadow-md'}`}>
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${theme === 'dark' ? 'bg-amber-900/30' : 'bg-amber-100'} mb-4`}>
                <Bot className="w-6 h-6 text-amber-500" />
              </div>
              <h3 className="text-lg font-bold mb-2">Claude</h3>
              <p className={`mb-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                Anthropic 开发的 AI 助手，擅长理解复杂指令和生成高质量代码。
              </p>
              <a href="https://claude.ai" target="_blank" rel="noopener noreferrer" className="text-amber-500 hover:text-amber-600 font-medium">
                了解更多 →
              </a>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              学习资源
            </span>
          </h2>
          
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            <div className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-gray-800 border border-gray-700' : 'bg-white shadow-md'}`}>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Book className="w-5 h-5 mr-2 text-purple-500" />
                文章与教程
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="https://community.box.com/api-6/vibe-coding-3874" target="_blank" rel="noopener noreferrer" className={`flex items-center hover:${theme === 'dark' ? 'text-purple-400' : 'text-purple-600'}`}>
                    <span className="mr-2">•</span>
                    <span>Vibe Coding：AI 驱动的编程新范式</span>
                  </a>
                </li>
                <li>
                  <a href="https://discourse.jupyter.org/t/vibe-coding-in-jupyter/34333" target="_blank" rel="noopener noreferrer" className={`flex items-center hover:${theme === 'dark' ? 'text-purple-400' : 'text-purple-600'}`}>
                    <span className="mr-2">•</span>
                    <span>在 Jupyter 中使用 Vibe Coding</span>
                  </a>
                </li>
                <li>
                  <a href="https://visualstudiomagazine.com/Articles/2025/03/20/AIs-Takeover-of-Software-Development-Gets-a-Name-Vibe-Coding.aspx" target="_blank" rel="noopener noreferrer" className={`flex items-center hover:${theme === 'dark' ? 'text-purple-400' : 'text-purple-600'}`}>
                    <span className="mr-2">•</span>
                    <span>AI 接管软件开发：Vibe Coding 的崛起</span>
                  </a>
                </li>
                <li>
                  <a href="https://en.wikipedia.org/wiki/Vibe_coding" target="_blank" rel="noopener noreferrer" className={`flex items-center hover:${theme === 'dark' ? 'text-purple-400' : 'text-purple-600'}`}>
                    <span className="mr-2">•</span>
                    <span>Vibe Coding 维基百科</span>
                  </a>
                </li>
                <li>
                  <a href="https://blog.replit.com/what-is-vibe-coding" target="_blank" rel="noopener noreferrer" className={`flex items-center hover:${theme === 'dark' ? 'text-purple-400' : 'text-purple-600'}`}>
                    <span className="mr-2">•</span>
                    <span>什么是 Vibe Coding？Replit 官方解析</span>
                  </a>
                </li>
              </ul>
            </div>
            
            <div className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-gray-800 border border-gray-700' : 'bg-white shadow-md'}`}>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Terminal className="w-5 h-5 mr-2 text-blue-500" />
                视频与课程
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="https://www.merriam-webster.com/slang/vibe-coding" target="_blank" rel="noopener noreferrer" className={`flex items-center hover:${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>
                    <span className="mr-2">•</span>
                    <span>Vibe Coding 术语解析</span>
                  </a>
                </li>
                <li>
                  <a href="https://simonwillison.net/2025/Mar/19/vibe-coding/" target="_blank" rel="noopener noreferrer" className={`flex items-center hover:${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>
                    <span className="mr-2">•</span>
                    <span>Simon Willison 的 Vibe Coding 实战指南</span>
                  </a>
                </li>
                <li>
                  <a href="https://dev.to/nakrani/what-is-vibe-coding-who-made-this-viral-7om" target="_blank" rel="noopener noreferrer" className={`flex items-center hover:${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>
                    <span className="mr-2">•</span>
                    <span>Vibe Coding 是什么？为什么它会病毒式传播？</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.reddit.com/r/ClaudeAI/comments/1j6z4ft/what_is_the_exact_definition_of_vibe_coding/" target="_blank" rel="noopener noreferrer" className={`flex items-center hover:${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>
                    <span className="mr-2">•</span>
                    <span>Vibe Coding 的确切定义是什么？</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.reddit.com/r/OutOfTheLoop/comments/1jozshg/whats_up_with_vibe_coding/" target="_blank" rel="noopener noreferrer" className={`flex items-center hover:${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>
                    <span className="mr-2">•</span>
                    <span>Vibe Coding 是怎么回事？</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={`p-8 rounded-xl ${theme === 'dark' ? 'bg-gray-800 border border-gray-700' : 'bg-white shadow-lg'} mb-16`}>
          <h2 className="text-3xl font-bold mb-6 text-center">
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              开始你的 Vibe Coding 之旅
            </span>
          </h2>
          <p className={`text-center text-lg mb-8 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            准备好体验 AI 驱动的编程了吗？选择一个工具，开始你的第一个项目！
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="https://cursor.sh" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-lg font-medium bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg transform transition-all duration-200 hover:scale-105 text-center">
              下载 Cursor
            </a>
            <a href="https://chat.openai.com" target="_blank" rel="noopener noreferrer" className={`px-8 py-3 rounded-lg font-medium ${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-900'} shadow-lg transform transition-all duration-200 hover:scale-105 text-center`}>
              使用 ChatGPT
            </a>
          </div>
        </div>

        <div className={`p-8 rounded-xl ${theme === 'dark' ? 'bg-gray-800/50 border border-gray-700' : 'bg-gray-50 border border-gray-200'}`}>
          <h2 className="text-2xl font-bold mb-4 text-center">常见问题</h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            <div>
              <h3 className={`font-bold mb-2 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>Vibe Coding 适合初学者吗？</h3>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                非常适合！Vibe Coding 降低了编程的入门门槛，让初学者可以更快地实现自己的想法，同时在与 AI 的互动中学习编程概念和最佳实践。
              </p>
            </div>
            <div>
              <h3 className={`font-bold mb-2 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>我需要了解编程基础知识吗？</h3>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                虽然 Vibe Coding 可以帮助生成代码，但了解基本的编程概念仍然很重要，这样你才能有效地与 AI 沟通并评估生成的代码。随着使用经验的积累，你的编程知识也会不断提升。
              </p>
            </div>
            <div>
              <h3 className={`font-bold mb-2 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>Vibe Coding 会取代传统编程吗？</h3>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                Vibe Coding 不是要取代传统编程，而是提供了一种补充方法。它特别适合快速原型开发、学习新技术和处理重复性任务，但深入理解编程原理和手写代码的能力仍然很重要。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuidePage;