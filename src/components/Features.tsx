'use client';

import React from 'react';
import { useSafeTheme } from '@/hooks/useSafeTheme';
import { Bot, Book, Code, MessageSquare, Share2, Zap, Brain, LayoutGrid, Terminal, Puzzle, FileCode, Users, Settings, Workflow } from 'lucide-react';

const Features: React.FC = () => {
  const { theme } = useSafeTheme();
  
  const categories = [
    {
      icon: <Bot className="w-6 h-6 text-purple-500" />,
      title: 'AI Basics',
      description: 'Fundamental concepts of AI-powered development',
      subcategories: ['ChatGPT Integration', 'Code Completion', 'Smart Suggestions']
    },
    {
      icon: <Terminal className="w-6 h-6 text-blue-500" />,
      title: 'Development Tools',
      description: 'Essential tools for modern development',
      subcategories: ['IDE Extensions', 'CLI Tools', 'Debugging Aids']
    },
    {
      icon: <Brain className="w-6 h-6 text-green-500" />,
      title: 'Prompt Engineering',
      description: 'Master the art of effective AI communication',
      subcategories: ['Prompt Templates', 'Best Practices', 'Advanced Techniques']
    },
    {
      icon: <Code className="w-6 h-6 text-yellow-500" />,
      title: 'Code Generation',
      description: 'Automated code creation and optimization',
      subcategories: ['Template Generation', 'Code Refactoring', 'Documentation']
    },
    {
      icon: <Puzzle className="w-6 h-6 text-red-500" />,
      title: 'Integration',
      description: 'Seamless workflow integration',
      subcategories: ['API Integration', 'Webhook Setup', 'Third-party Tools']
    },
    {
      icon: <FileCode className="w-6 h-6 text-indigo-500" />,
      title: 'Project Templates',
      description: 'Ready-to-use project structures',
      subcategories: ['Starter Kits', 'Boilerplates', 'Example Projects']
    },
    {
      icon: <Settings className="w-6 h-6 text-amber-500" />,
      title: 'Tool Configuration',
      description: 'Optimized development setups',
      subcategories: ['Environment Setup', 'Config Templates', 'Performance Tips']
    },
    {
      icon: <Workflow className="w-6 h-6 text-teal-500" />,
      title: 'Workflow Optimization',
      description: 'Streamlined development processes',
      subcategories: ['Automation Scripts', 'CI/CD Pipelines', 'Team Collaboration']
    }
  ];
  
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-transparent to-purple-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              Explore Our Features
            </span>
          </h2>
          <p className={`mt-4 max-w-2xl mx-auto text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            Discover tools and resources to accelerate your AI-powered development journey
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