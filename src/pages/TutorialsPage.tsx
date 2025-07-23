'use client';

import React from 'react';
import { useSafeTheme } from '@/hooks/useSafeTheme';
import { ArrowLeft, Book, Code, Terminal, Play, Clock, User, Tag, Eye, ThumbsUp, BookOpen, Bookmark, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const TutorialsPage: React.FC = () => {
  const { theme } = useSafeTheme();
  
  const tutorials = [
    {
      id: 1,
      title: "AI 编程入门：从零开始的 Vibe Coding",
      description: "本教程将带你了解 AI 编程的基础知识，以及如何开始使用 Vibe Coding 方法进行开发。",
      level: "初学者",
      duration: "45 分钟",
      author: "张工",
      category: "入门指南",
      views: 1245,
      likes: 89,
      image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 2,
      title: "使用 AI 构建响应式 Web 应用",
      description: "学习如何利用 AI 工具快速构建现代、响应式的 Web 应用，包括前端界面和后端 API。",
      level: "中级",
      duration: "60 分钟",
      author: "李明",
      category: "Web 开发",
      views: 982,
      likes: 76,
      image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 3,
      title: "AI 辅助代码重构：最佳实践",
      description: "探索如何使用 AI 工具有效地重构遗留代码，提高代码质量和可维护性。",
      level: "高级",
      duration: "75 分钟",
      author: "王晓",
      category: "代码质量",
      views: 756,
      likes: 62,
      image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 4,
      title: "提示工程进阶：编写高效 AI 提示词",
      description: "深入了解提示工程的原理和技巧，学习如何编写能够产生高质量代码的提示词。",
      level: "中级",
      duration: "50 分钟",
      author: "陈思",
      category: "提示工程",
      views: 1089,
      likes: 94,
      image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 5,
      title: "使用 AI 构建移动应用：React Native 实战",
      description: "学习如何利用 AI 工具加速 React Native 移动应用的开发过程。",
      level: "中级",
      duration: "90 分钟",
      author: "刘强",
      category: "移动开发",
      views: 823,
      likes: 71,
      image: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 6,
      title: "AI 驱动的测试自动化",
      description: "探索如何使用 AI 工具生成测试用例、编写测试代码并自动化测试流程。",
      level: "高级",
      duration: "65 分钟",
      author: "赵明",
      category: "测试",
      views: 645,
      likes: 53,
      image: "https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];

  const categories = [
    { name: "全部", count: tutorials.length },
    { name: "入门指南", count: 1 },
    { name: "Web 开发", count: 1 },
    { name: "移动开发", count: 1 },
    { name: "代码质量", count: 1 },
    { name: "提示工程", count: 1 },
    { name: "测试", count: 1 }
  ];

  const levels = [
    { name: "初学者", count: 1 },
    { name: "中级", count: 3 },
    { name: "高级", count: 2 }
  ];

  const featuredTutorial = tutorials[0];

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
              AI 编程教程
            </span>
          </h1>
          <p className={`mt-4 text-xl max-w-3xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            从入门到精通，全面的 AI 编程学习资源
          </p>
        </div>

        <div className="mb-16">
          <div className={`rounded-xl overflow-hidden ${theme === 'dark' ? 'bg-gray-800 border border-gray-700' : 'bg-white shadow-lg'}`}>
            <div className="md:flex">
              <div className="md:w-2/3 relative">
                <img 
                  src={featuredTutorial.image} 
                  alt={featuredTutorial.title} 
                  className="w-full h-64 md:h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                  <span className="px-3 py-1 bg-purple-600 text-white text-sm rounded-full w-fit mb-3">
                    精选教程
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {featuredTutorial.title}
                  </h2>
                  <p className="text-white/90 mb-4 max-w-xl">
                    {featuredTutorial.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-white/80 text-sm">
                    <span className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {featuredTutorial.author}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {featuredTutorial.duration}
                    </span>
                    <span className="flex items-center">
                      <Tag className="w-4 h-4 mr-1" />
                      {featuredTutorial.category}
                    </span>
                    <span className="flex items-center">
                      <BookOpen className="w-4 h-4 mr-1" />
                      {featuredTutorial.level}
                    </span>
                  </div>
                </div>
              </div>
              <div className="md:w-1/3 p-6 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-lg mb-4">为什么选择这个教程？</h3>
                  <ul className={`space-y-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      <span>全面介绍 AI 编程基础概念</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      <span>包含实用的代码示例和演示</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      <span>适合没有 AI 编程经验的初学者</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      <span>提供完整的项目实战练习</span>
                    </li>
                  </ul>
                </div>
                <Link 
                  href={`/tutorials/${featuredTutorial.id}`}
                  className="mt-6 w-full px-4 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium text-center transition-all duration-200"
                >
                  开始学习
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16">
          <div className="lg:col-span-1">
            <div className={`sticky top-8 p-6 rounded-xl ${theme === 'dark' ? 'bg-gray-800 border border-gray-700' : 'bg-white shadow-lg'}`}>
              <h2 className="text-xl font-bold mb-4">筛选教程</h2>
              
              <div className="mb-6">
                <h3 className="font-medium mb-3">分类</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <a 
                        href="#"
                        className={`flex items-center justify-between p-2 rounded ${
                          category.name === "全部" 
                            ? theme === 'dark' 
                              ? 'bg-purple-900/30 text-purple-300' 
                              : 'bg-purple-100 text-purple-700'
                            : theme === 'dark' 
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
              </div>
              
              <div className="mb-6">
                <h3 className="font-medium mb-3">难度级别</h3>
                <ul className="space-y-2">
                  {levels.map((level, index) => (
                    <li key={index}>
                      <a 
                        href="#"
                        className={`flex items-center justify-between p-2 rounded ${
                          theme === 'dark' 
                            ? 'hover:bg-gray-700' 
                            : 'hover:bg-gray-100'
                        } transition-colors duration-200`}
                      >
                        <span>{level.name}</span>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          theme === 'dark' 
                            ? 'bg-gray-700 text-gray-300' 
                            : 'bg-gray-200 text-gray-700'
                        }`}>{level.count}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <h3 className="font-medium mb-3">时长</h3>
                <div className={`p-2 ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'} rounded-lg`}>
                  <input 
                    type="range" 
                    min="0" 
                    max="90" 
                    defaultValue="90" 
                    className="w-full"
                  />
                  <div className="flex justify-between mt-2 text-sm">
                    <span>0 分钟</span>
                    <span>90 分钟</span>
                  </div>
                </div>
              </div>
              
              <button 
                className={`w-full py-2 rounded-lg font-medium ${
                  theme === 'dark' 
                    ? 'bg-gray-700 hover:bg-gray-600' 
                    : 'bg-gray-200 hover:bg-gray-300'
                } transition-colors duration-200`}
              >
                重置筛选
              </button>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="mb-8 flex justify-between items-center">
              <h2 className="text-2xl font-bold">所有教程</h2>
              <div className="flex items-center">
                <span className={`mr-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>排序：</span>
                <select className={`p-2 rounded-lg ${
                  theme === 'dark' 
                    ? 'bg-gray-700 border-gray-600' 
                    : 'bg-white border-gray-200'
                } border focus:outline-none focus:ring-2 focus:ring-purple-500`}>
                  <option>最新发布</option>
                  <option>最受欢迎</option>
                  <option>难度（低到高）</option>
                  <option>难度（高到低）</option>
                </select>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tutorials.slice(1).map((tutorial) => (
                <div 
                  key={tutorial.id}
                  className={`rounded-xl overflow-hidden transition-all duration-300 hover:transform hover:scale-105 ${
                    theme === 'dark' 
                      ? 'bg-gray-800 border border-gray-700' 
                      : 'bg-white shadow-md'
                  }`}
                >
                  <div className="relative h-48">
                    <img 
                      src={tutorial.image} 
                      alt={tutorial.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute top-3 right-3 px-2 py-1 rounded text-xs font-medium ${
                      tutorial.level === '初学者' 
                        ? 'bg-green-500 text-white' 
                        : tutorial.level === '中级'
                          ? 'bg-yellow-500 text-white'
                          : 'bg-red-500 text-white'
                    }`}>
                      {tutorial.level}
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center mb-2">
                      <Tag className="w-4 h-4 text-purple-500 mr-1" />
                      <span className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                        {tutorial.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold mb-2 line-clamp-2">
                      <Link href={`/tutorials/${tutorial.id}`} className="hover:text-purple-500 transition-colors duration-200">
                        {tutorial.title}
                      </Link>
                    </h3>
                    <p className={`mb-4 text-sm line-clamp-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                      {tutorial.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 text-gray-400 mr-1" />
                        <span className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                          {tutorial.duration}
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="flex items-center text-xs text-gray-400">
                          <Eye className="w-4 h-4 mr-1" />
                          {tutorial.views}
                        </span>
                        <span className="flex items-center text-xs text-gray-400">
                          <ThumbsUp className="w-4 h-4 mr-1" />
                          {tutorial.likes}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10 flex justify-center">
              <nav className="flex items-center">
                <a 
                  href="#" 
                  className={`px-4 py-2 mx-1 rounded-lg ${
                    theme === 'dark' 
                      ? 'bg-gray-700 text-white' 
                      : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  1
                </a>
                <a 
                  href="#" 
                  className={`px-4 py-2 mx-1 rounded-lg ${
                    theme === 'dark' 
                      ? 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white' 
                      : 'bg-white text-gray-700 hover:bg-gray-200'
                  } transition-colors duration-200`}
                >
                  2
                </a>
                <a 
                  href="#" 
                  className={`px-4 py-2 mx-1 rounded-lg ${
                    theme === 'dark' 
                      ? 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white' 
                      : 'bg-white text-gray-700 hover:bg-gray-200'
                  } transition-colors duration-200`}
                >
                  3
                </a>
                <span className="mx-2">...</span>
                <a 
                  href="#" 
                  className={`px-4 py-2 mx-1 rounded-lg ${
                    theme === 'dark' 
                      ? 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white' 
                      : 'bg-white text-gray-700 hover:bg-gray-200'
                  } transition-colors duration-200`}
                >
                  8
                </a>
              </nav>
            </div>
          </div>
        </div>

        <div className={`p-8 rounded-xl ${theme === 'dark' ? 'bg-gray-800 border border-gray-700' : 'bg-white shadow-lg'} mb-16`}>
          <div className="md:flex items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
              <h2 className="text-2xl font-bold mb-4">想要贡献教程？</h2>
              <p className={`mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                我们欢迎社区成员分享自己的 AI 编程经验和知识。如果你有兴趣贡献教程，请查看我们的投稿指南。
              </p>
              <Link 
                href="/contribute"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white transition-all duration-200"
              >
                查看投稿指南
                <ChevronRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
            <div className="md:w-1/3">
              <div className={`p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'}`}>
                <h3 className="font-bold mb-3">投稿福利</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span>获得社区认证徽章</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span>有机会获得专家认证</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span>参与社区活动的优先权</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              订阅教程更新
            </span>
          </h2>
          <p className={`mb-8 max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            订阅我们的更新，第一时间获取最新的 AI 编程教程和资源。
          </p>
          <form className="max-w-md mx-auto flex">
            <input 
              type="email" 
              placeholder="your@email.com" 
              className={`flex-1 px-4 py-3 rounded-l-lg ${
                theme === 'dark' 
                  ? 'bg-gray-700 border-gray-600' 
                  : 'bg-white border-gray-200'
              } border focus:outline-none focus:ring-2 focus:ring-purple-500`}
            />
            <button 
              type="submit"
              className="px-6 py-3 rounded-r-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white transition-all duration-200"
            >
              订阅
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TutorialsPage;