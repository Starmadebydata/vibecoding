'use client';

import React, { useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { Search as SearchIcon, X } from 'lucide-react';

const Search: React.FC = () => {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const toggleSearch = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setTimeout(() => {
        document.getElementById('search-input')?.focus();
      }, 100);
    }
  };
  
  return (
    <>
      <button
        onClick={toggleSearch}
        className={`p-2 rounded-full transition-colors duration-200 ${
          theme === 'dark' ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
        }`}
        aria-label="搜索"
      >
        <SearchIcon className="w-5 h-5" />
      </button>
      
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4 sm:px-6">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={toggleSearch}></div>
          
          <div className={`relative w-full max-w-2xl rounded-xl shadow-2xl ${
            theme === 'dark' ? 'bg-gray-800' : 'bg-white'
          }`}>
            <div className="flex items-center p-4">
              <SearchIcon className="w-5 h-5 text-gray-400 mr-3" />
              <input
                id="search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="搜索工具、教程和资源..."
                className={`flex-1 bg-transparent border-none focus:outline-none text-lg ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}
              />
              <button
                onClick={toggleSearch}
                className={`p-2 rounded-full transition-colors duration-200 ${
                  theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                }`}
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            {searchQuery && (
              <div className={`border-t ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
                <div className="p-4">
                  <div className="text-sm text-gray-500 mb-2">
                    搜索结果将在这里显示...
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Search;