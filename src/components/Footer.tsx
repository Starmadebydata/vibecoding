'use client';

import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { Bot, Github, Twitter, Globe, MessageCircle, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <footer className={`py-12 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center">
              <Bot className="w-6 h-6 text-purple-500" />
              <span className="ml-2 text-xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                Vibe Coding
              </span>
            </div>
            
            <p className={`mt-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              重新定义编程方式，让 AI 处理繁重工作，开发者专注创意。
            </p>
            
            <div className="mt-6 flex space-x-4">
              <a href="https://github.com/topics/vibe-coding" className={`p-2 rounded-full ${theme === 'dark' ? 'hover:bg-gray-800' : 'hover:bg-gray-200'} transition-colors duration-200`} aria-label="GitHub">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://x.com/search?q=vibecoding" className={`p-2 rounded-full ${theme === 'dark' ? 'hover:bg-gray-800' : 'hover:bg-gray-200'} transition-colors duration-200`} aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://reddit.com/r/vibecoding" className={`p-2 rounded-full ${theme === 'dark' ? 'hover:bg-gray-800' : 'hover:bg-gray-200'} transition-colors duration-200`} aria-label="Reddit">
                <Globe className="w-5 h-5" />
              </a>
              <a href="https://vibecoding.slack.com" className={`p-2 rounded-full ${theme === 'dark' ? 'hover:bg-gray-800' : 'hover:bg-gray-200'} transition-colors duration-200`} aria-label="Slack">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-3">工具</h3>
            <ul className={`space-y-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              <li><a href="#" className="hover:underline">Cursor</a></li>
              <li><a href="#" className="hover:underline">Windsurf</a></li>
              <li><a href="#" className="hover:underline">bolt.new</a></li>
              <li><a href="#" className="hover:underline">v0.dev</a></li>
              <li><a href="#" className="hover:underline">MCP</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-3">资源</h3>
            <ul className={`space-y-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              <li><a href="#" className="hover:underline">文档</a></li>
              <li><a href="#" className="hover:underline">教程</a></li>
              <li><a href="#" className="hover:underline">博客</a></li>
              <li><a href="#" className="hover:underline">社区</a></li>
              <li><a href="#" className="hover:underline">支持</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-3">关于</h3>
            <ul className={`space-y-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              <li><a href="#" className="hover:underline">关于我们</a></li>
              <li><a href="#" className="hover:underline">加入我们</a></li>
              <li><a href="#" className="hover:underline">隐私政策</a></li>
              <li><a href="#" className="hover:underline">服务条款</a></li>
              <li><a href="#" className="hover:underline">联系我们</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              &copy; {new Date().getFullYear()} Vibe Coding. 保留所有权利。
            </p>
            
            <p className={`text-sm mt-4 md:mt-0 flex items-center ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              用 <Heart className="w-4 h-4 mx-1 text-red-500" /> 和 AI 制作
            </p>
          </div>
          
          <div className="mt-6">
            <form className="flex max-w-md mx-auto md:mx-0 md:ml-auto">
              <input 
                type="email" 
                placeholder="订阅 Vibe Coding 最新动态" 
                className={`flex-1 px-4 py-2 rounded-l-lg focus:outline-none ${
                  theme === 'dark' 
                    ? 'bg-gray-800 border-gray-700 text-white' 
                    : 'bg-white border-gray-300 text-gray-900'
                } border`}
              />
              <button 
                type="submit"
                className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-r-lg flex items-center"
              >
                <Mail className="w-4 h-4 mr-1" />
                订阅
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;