'use client';

import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { MessageCircle, Share2, Users, Github, Twitter, Bot, BookOpen, Globe } from 'lucide-react';

const Community: React.FC = () => {
  const { theme } = useTheme();
  
  const discussions = [
    {
      id: 1,
      user: {
        name: 'Andrej Karpathy',
        avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=2'
      },
      title: '如何使用 AI 重构遗留代码',
      topic: 'AI 重构',
      description: '分享一个使用 Vibe Coding 工具重构大型遗留项目的实践经验，包括工具选择和最佳实践。',
      likes: 324,
      comments: 56,
      shares: 89
    },
    {
      id: 2,
      user: {
        name: '张工',
        avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=2'
      },
      title: 'Cursor vs Copilot 深度对比',
      topic: '工具对比',
      description: '详细对比两款主流 AI 编程助手的优缺点，帮助开发者选择合适的工具。',
      likes: 256,
      comments: 43,
      shares: 67
    },
    {
      id: 3,
      user: {
        name: '李明',
        avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=2'
      },
      title: 'v0.dev 开发实战分享',
      topic: '实战经验',
      description: '使用 v0.dev 快速开发企业级应用的经验分享，包括提示工程技巧。',
      likes: 198,
      comments: 35,
      shares: 45
    }
  ];
  
  const platforms = [
    {
      name: 'X.com',
      icon: <Twitter className="w-5 h-5" />,
      description: '关注最新的 Vibe Coding 动态和工具更新',
      link: 'https://x.com/search?q=vibecoding'
    },
    {
      name: 'Reddit',
      icon: <Globe className="w-5 h-5" />,
      description: '加入 r/vibecoding 社区讨论和经验分享',
      link: 'https://reddit.com/r/vibecoding'
    },
    {
      name: 'Slack',
      icon: <MessageCircle className="w-5 h-5" />,
      description: '实时交流和问题解答',
      link: 'https://vibecoding.slack.com'
    },
    {
      name: 'GitHub',
      icon: <Github className="w-5 h-5" />,
      description: '开源项目和工具集合',
      link: 'https://github.com/topics/vibe-coding'
    }
  ];
  
  return (
    <section id="community" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              社区交流
            </span>
          </h2>
          <p className={`mt-2 max-w-2xl mx-auto text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            加入 Vibe Coding 社区，分享经验，探讨最佳实践
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {discussions.map((discussion) => (
            <div 
              key={discussion.id}
              className={`rounded-xl overflow-hidden border transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg ${
                theme === 'dark' 
                  ? 'bg-gray-800 border-gray-700' 
                  : 'bg-white border-gray-200 shadow-sm'
              }`}
            >
              <div className="p-4">
                <div className="flex items-center">
                  <img 
                    src={discussion.user.avatar} 
                    alt={discussion.user.name}
                    className="w-10 h-10 rounded-full object-cover mr-3"
                  />
                  <div>
                    <h4 className="font-medium">{discussion.user.name}</h4>
                    <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                      {discussion.topic}
                    </p>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mt-4 mb-2">{discussion.title}</h3>
                <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mb-4`}>
                  {discussion.description}
                </p>
                
                <div className="flex justify-between">
                  <button className={`flex items-center text-sm ${theme === 'dark' ? 'text-gray-400 hover:text-gray-300' : 'text-gray-600 hover:text-gray-800'} transition-colors duration-200`}>
                    <MessageCircle className="w-4 h-4 mr-1" />
                    {discussion.comments}
                  </button>
                  <button className={`flex items-center text-sm ${theme === 'dark' ? 'text-gray-400 hover:text-gray-300' : 'text-gray-600 hover:text-gray-800'} transition-colors duration-200`}>
                    <Share2 className="w-4 h-4 mr-1" />
                    {discussion.shares}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className={`p-6 rounded-xl ${
            theme === 'dark' 
              ? 'bg-gray-800 border border-gray-700' 
              : 'bg-white border border-gray-200 shadow-md'
          }`}>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                <Bot className="text-purple-500" />
              </div>
              <h3 className="text-xl font-bold ml-4">学习资源</h3>
            </div>
            
            <p className={`mb-6 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              探索丰富的学习资源，掌握 Vibe Coding 技巧，提升开发效率。
            </p>
            
            <a
              href="/resources"
              className="w-full py-3 rounded-lg font-medium bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 flex items-center justify-center"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              浏览资源
            </a>
          </div>
          
          <div className={`p-6 rounded-xl ${
            theme === 'dark' 
              ? 'bg-gray-800 border border-gray-700' 
              : 'bg-white border border-gray-200 shadow-md'
          }`}>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                <Users className="text-blue-500" />
              </div>
              <h3 className="text-xl font-bold ml-4">社区平台</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {platforms.map((platform, index) => (
                <a
                  key={index}
                  href={platform.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 rounded-lg border transition-all duration-200 hover:shadow-md ${
                    theme === 'dark'
                      ? 'border-gray-700 hover:bg-gray-700'
                      : 'border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center mb-2">
                    {platform.icon}
                    <span className="ml-2 font-medium">{platform.name}</span>
                  </div>
                  <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    {platform.description}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;