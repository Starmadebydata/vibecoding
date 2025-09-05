'use client';

import React from 'react';
import { useSafeTheme } from '@/hooks/useSafeTheme';
import { Users, Sparkles, Library } from 'lucide-react';

const QuickNavigation: React.FC = () => {
  const { theme } = useSafeTheme();

  return (
    <div className={`p-6 rounded-xl ${
      theme === 'dark' 
        ? 'bg-gray-800/50 border border-gray-700' 
        : 'bg-white border border-gray-200 shadow-md'
    }`}>
      <h2 className="text-2xl font-bold mb-4">Quick Navigation</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className={`p-4 rounded-lg ${
          theme === 'dark' ? 'bg-gray-700/50' : 'bg-gray-50'
        }`}>
          <h3 className="font-bold mb-2 flex items-center">
            <Library className="w-5 h-5 mr-2" />
            Hot Topics
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="/topics/prompt-engineering" className="hover:text-purple-500">
                Prompt Engineering
              </a>
            </li>
            <li>
              <a href="/topics/code-generation" className="hover:text-purple-500">
                Code Generation
              </a>
            </li>
            <li>
              <a href="/topics/refactoring" className="hover:text-purple-500">
                Refactoring
              </a>
            </li>
          </ul>
        </div>
        
        <div className={`p-4 rounded-lg ${
          theme === 'dark' ? 'bg-gray-700/50' : 'bg-gray-50'
        }`}>
          <h3 className="font-bold mb-2 flex items-center">
            <Sparkles className="w-5 h-5 mr-2" />
            Latest Updates
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="/updates/v2-features" className="hover:text-purple-500">
                V2 Features
              </a>
            </li>
            <li>
              <a href="/updates/tool-comparison" className="hover:text-purple-500">
                Tool Comparison
              </a>
            </li>
            <li>
              <a href="/updates/community" className="hover:text-purple-500">
                Community
              </a>
            </li>
          </ul>
        </div>
        
        <div className={`p-4 rounded-lg ${
          theme === 'dark' ? 'bg-gray-700/50' : 'bg-gray-50'
        }`}>
          <h3 className="font-bold mb-2 flex items-center">
            <Users className="w-5 h-5 mr-2" />
            Community Resources
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="/community/showcase" className="hover:text-purple-500">
                Showcase
              </a>
            </li>
            <li>
              <a href="/community/discussions" className="hover:text-purple-500">
                Discussions
              </a>
            </li>
            <li>
              <a href="/community/contribute" className="hover:text-purple-500">
                Contribute
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default QuickNavigation;