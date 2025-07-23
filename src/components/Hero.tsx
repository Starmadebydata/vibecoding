'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from '@/contexts/ThemeContext';
import { Bot, Book, Code, Users, Sparkles, BookOpen, Compass, Library } from 'lucide-react';

const Hero: React.FC = () => {
  const { theme } = useTheme();
  const [typedText, setTypedText] = useState('');
  const fullText = '探索 • 学习 • 分享';
  
  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setTypedText(fullText.substring(0, index));
      index++;
      
      if (index > fullText.length) {
        clearInterval(intervalId);
      }
    }, 100);
    
    return () => clearInterval(intervalId);
  }, []);

  const categories = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: '入门指南',
      description: '从这里开始了解 AI 编程',
      link: '/guides'
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: '工具文档',
      description: '详细的工具使用说明',
      link: '/tools'
    },
    {
      icon: <Book className="w-6 h-6" />,
      title: '最佳实践',
      description: 'AI 编程的推荐方法',
      link: '/best-practices'
    },
    {
      icon: <Compass className="w-6 h-6" />,
      title: '教程',
      description: '实用的学习资源',
      link: '/tutorials'
    }
  ];
  
  return (
    <section className="pt-20 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
            <span className="block">Vibe Coding</span>
            <span className="block mt-2 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              知识库
            </span>
          </h1>
          
          <div className="mt-8 h-8">
            <p className="text-xl sm:text-2xl font-medium">
              {typedText}
              <span className="animate-pulse">|</span>
            </p>
          </div>
          
          <p className={`mt-6 text-lg max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            探索 AI 驱动的编程方法，发现效率提升的最佳实践
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <Link
              key={index}
              href={category.link}
              className={`p-6 rounded-xl transition-all duration-300 transform hover:scale-105 ${
                theme === 'dark' 
                  ? 'bg-gray-800/50 hover:bg-gray-800 border border-gray-700' 
                  : 'bg-white border border-gray-200 shadow-sm hover:shadow-md'
              }`}
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
                theme === 'dark' ? 'bg-purple-900/30' : 'bg-purple-100'
              }`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{category.title}</h3>
              <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                {category.description}
              </p>
            </Link>
          ))}
        </div>
        
        <div className="mt-16">
          <div className={`p-6 rounded-xl ${
            theme === 'dark' 
              ? 'bg-gray-800/50 border border-gray-700' 
              : 'bg-white border border-gray-200 shadow-md'
          }`}>
            <h2 className="text-2xl font-bold mb-4">快速导航</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className={`p-4 rounded-lg ${
                theme === 'dark' ? 'bg-gray-700/50' : 'bg-gray-50'
              }`}>
                <h3 className="font-bold mb-2 flex items-center">
                  <Library className="w-5 h-5 mr-2" />
                  热门主题
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a href="/topics/prompt-engineering" className="hover:text-purple-500">提示工程</a>
                  </li>
                  <li>
                    <a href="/topics/code-generation" className="hover:text-purple-500">代码生成</a>
                  </li>
                  <li>
                    <a href="/topics/refactoring" className="hover:text-purple-500">代码重构</a>
                  </li>
                </ul>
              </div>
              
              <div className={`p-4 rounded-lg ${
                theme === 'dark' ? 'bg-gray-700/50' : 'bg-gray-50'
              }`}>
                <h3 className="font-bold mb-2 flex items-center">
                  <Sparkles className="w-5 h-5 mr-2" />
                  最新更新
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a href="/updates/v2-features" className="hover:text-purple-500">V2 新特性</a>
                  </li>
                  <li>
                    <a href="/updates/tool-comparison" className="hover:text-purple-500">工具对比</a>
                  </li>
                  <li>
                    <a href="/updates/community" className="hover:text-purple-500">社区动态</a>
                  </li>
                </ul>
              </div>
              
              <div className={`p-4 rounded-lg ${
                theme === 'dark' ? 'bg-gray-700/50' : 'bg-gray-50'
              }`}>
                <h3 className="font-bold mb-2 flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  社区资源
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a href="/community/showcase" className="hover:text-purple-500">项目展示</a>
                  </li>
                  <li>
                    <a href="/community/discussions" className="hover:text-purple-500">讨论</a>
                  </li>
                  <li>
                    <a href="/community/contribute" className="hover:text-purple-500">贡献指南</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;