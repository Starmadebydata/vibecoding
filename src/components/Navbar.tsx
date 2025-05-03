import React, { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Menu, X, Sun, Moon, Code, Bot, Users, Sparkles } from 'lucide-react';
import Search from './Search';
import UserMenu from './auth/UserMenu';

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? `${theme === 'dark' ? 'bg-gray-900/90 backdrop-blur-md' : 'bg-white/90 backdrop-blur-md shadow-sm'}` 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent flex items-center">
              <Bot className="mr-2" />
              Vibe Coding
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="hover:text-purple-400 transition-colors duration-200 flex items-center">
              <Sparkles className="w-4 h-4 mr-1" />
              特性
            </a>
            <a href="#editor" className="hover:text-purple-400 transition-colors duration-200 flex items-center">
              <Code className="w-4 h-4 mr-1" />
              示例
            </a>
            <a href="#community" className="hover:text-purple-400 transition-colors duration-200 flex items-center">
              <Users className="w-4 h-4 mr-1" />
              社区
            </a>
            <Search />
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-800/20 transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <UserMenu />
          </div>
          
          <div className="md:hidden flex items-center space-x-4">
            <Search />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {isMobileMenuOpen && (
        <div className={`md:hidden ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} shadow-lg`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a 
              href="#features" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800/20 transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              特性
            </a>
            <a 
              href="#editor" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800/20 transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              示例
            </a>
            <a 
              href="#community" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800/20 transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              社区
            </a>
            <button 
              onClick={toggleTheme}
              className="flex items-center w-full px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800/20 transition-colors duration-200"
            >
              {theme === 'dark' ? (
                <>
                  <Sun className="w-5 h-5 mr-2" />
                  切换至亮色模式
                </>
              ) : (
                <>
                  <Moon className="w-5 h-5 mr-2" />
                  切换至暗色模式
                </>
              )}
            </button>
            <div className="px-3 py-2">
              <UserMenu />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;