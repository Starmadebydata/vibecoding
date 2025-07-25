'use client';

import React from 'react';
import { useSafeTheme } from '@/hooks/useSafeTheme';
import { useLocalization } from '@/hooks/useLocalization';
import { Bot, Book, Code, MessageSquare, Share2, Zap, Brain, LayoutGrid, Terminal, Puzzle, FileCode, Users, Settings, Workflow } from 'lucide-react';

const Features: React.FC = () => {
  const { theme } = useSafeTheme();
  const { t } = useLocalization('pages.home.features');
  
  const categories = [
    {
      icon: <Bot className="w-6 h-6 text-purple-500" />,
      title: t('categories.aiBasics.title'),
      description: t('categories.aiBasics.description'),
      subcategories: t.raw('categories.aiBasics.subcategories') as string[]
    },
    {
      icon: <Terminal className="w-6 h-6 text-blue-500" />,
      title: t('categories.devTools.title'),
      description: t('categories.devTools.description'),
      subcategories: t.raw('categories.devTools.subcategories') as string[]
    },
    {
      icon: <Brain className="w-6 h-6 text-green-500" />,
      title: t('categories.promptEngineering.title'),
      description: t('categories.promptEngineering.description'),
      subcategories: t.raw('categories.promptEngineering.subcategories') as string[]
    },
    {
      icon: <Code className="w-6 h-6 text-yellow-500" />,
      title: t('categories.codeGeneration.title'),
      description: t('categories.codeGeneration.description'),
      subcategories: t.raw('categories.codeGeneration.subcategories') as string[]
    },
    {
      icon: <Puzzle className="w-6 h-6 text-red-500" />,
      title: t('categories.integration.title'),
      description: t('categories.integration.description'),
      subcategories: t.raw('categories.integration.subcategories') as string[]
    },
    {
      icon: <FileCode className="w-6 h-6 text-indigo-500" />,
      title: t('categories.projectTemplates.title'),
      description: t('categories.projectTemplates.description'),
      subcategories: t.raw('categories.projectTemplates.subcategories') as string[]
    },
    {
      icon: <Settings className="w-6 h-6 text-amber-500" />,
      title: t('categories.toolConfig.title'),
      description: t('categories.toolConfig.description'),
      subcategories: t.raw('categories.toolConfig.subcategories') as string[]
    },
    {
      icon: <Workflow className="w-6 h-6 text-teal-500" />,
      title: t('categories.workflow.title'),
      description: t('categories.workflow.description'),
      subcategories: t.raw('categories.workflow.subcategories') as string[]
    }
  ];
  
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-transparent to-purple-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              {t('title')}
            </span>
          </h2>
          <p className={`mt-4 max-w-2xl mx-auto text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            {t('subtitle')}
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