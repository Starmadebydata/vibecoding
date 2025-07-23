'use client';

import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { Bot, Book, Code, MessageSquare, Share2, Zap, Brain, LayoutGrid, Terminal, Puzzle, FileCode, Users, Settings, Workflow } from 'lucide-react';

const Features: React.FC = () => {
  const { theme } = useTheme();
  
  const categories = [
    {
      icon: <Bot className="w-6 h-6 text-purple-500" />,
      title: 'AI 基础知识',
      description: '了解 AI 编程的核心概念和基本原理。',
      subcategories: ['模型介绍', '工作原理', '应用场景']
    },
    {
      icon: <Terminal className="w-6 h-6 text-blue-500" />,
      title: '开发工具',
      description: '探索各种 AI 编程工具的详细使用指南。',
      subcategories: ['编辑器', '插件', '命令行工具']
    },
    {
      icon: <Brain className="w-6 h-6 text-green-500" />,
      title: '提示工程',
      description: '学习如何编写高效的提示词以提升 AI 输出质量。',
      subcategories: ['提示模式', '最佳实践', '示例集']
    },
    {
      icon: <Code className="w-6 h-6 text-yellow-500" />,
      title: '代码生成',
      description: '掌握使用 AI 生成高质量代码的技巧。',
      subcategories: ['代码补全', '重构建议', '注释生成']
    },
    {
      icon: <Puzzle className="w-6 h-6 text-red-500" />,
      title: '集成指南',
      description: '了解如何将 AI 工具集成到开发流程中。',
      subcategories: ['工作流配置', 'CI/CD', '团队协作']
    },
    {
      icon: <FileCode className="w-6 h-6 text-indigo-500" />,
      title: '项目模板',
      description: '快速开始的项目模板和最佳实践指南。',
      subcategories: ['架构示例', '配置模板', '代码规范']
    },
    {
      icon: <Settings className="w-6 h-6 text-amber-500" />,
      title: '工具配置',
      description: '详细的工具配置和自定义设置指南。',
      subcategories: ['环境配置', '个性化设置', '性能优化']
    },
    {
      icon: <Workflow className="w-6 h-6 text-teal-500" />,
      title: '工作流程',
      description: '优化的 AI 辅助开发工作流程指南。',
      subcategories: ['开发流程', '协作模式', '效率技巧']
    }
  ];
  
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-transparent to-purple-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              知识体系
            </span>
          </h2>
          <p className={`mt-4 max-w-2xl mx-auto text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            系统化的 AI 编程知识分类，助您快速找到所需资源
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div 
              key={index}
              className={`p-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                theme === 'dark' 
                  ? 'bg-gray-800/50 hover:bg-gray-800 border border-gray-700' 
                  : 'bg-white border border-gray-200 shadow-sm hover:shadow-md'
              }`}
            >
              <div className="mb-4">{category.icon}</div>
              <h3 className="text-xl font-bold mb-2">{category.title}</h3>
              <p className={`mb-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                {category.description}
              </p>
              <ul className={`space-y-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                {category.subcategories.map((sub, idx) => (
                  <li key={idx} className="flex items-center">
                    <div className="w-1 h-1 rounded-full bg-purple-500 mr-2"></div>
                    {sub}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;