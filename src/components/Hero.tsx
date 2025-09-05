'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSafeTheme } from '@/hooks/useSafeTheme';
import { Bot, Book, Code, Users, Sparkles, BookOpen, Compass, Library } from 'lucide-react';
import QuickNavigation from './QuickNavigation';

const Hero: React.FC = () => {
  const { theme } = useSafeTheme();
  const [typedText, setTypedText] = useState('');
  const fullText = 'Build faster with AI-powered coding tools';
  
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
      title: 'Programming Guides',
      description: 'Step-by-step guides for modern development',
      link: '/guides'
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Development Tools',
      description: 'Essential tools for productive coding',
      link: '/tools'
    },
    {
      icon: <Book className="w-6 h-6" />,
      title: 'Best Practices',
      description: 'Industry standards and proven methods',
      link: '/best-practices'
    },
    {
      icon: <Compass className="w-6 h-6" />,
      title: 'Tutorials',
      description: 'Learn through hands-on examples',
      link: '/tutorials'
    }
  ];
  
  return (
    <section className="pt-20 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
            <span className="block">Welcome to</span>
            <span className="block mt-2 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              Vibe Coding
            </span>
          </h1>
          
          <div className="mt-8 h-8">
            <p className="text-xl sm:text-2xl font-medium">
              {typedText}
              <span className="animate-pulse">|</span>
            </p>
          </div>
          
          <p className={`mt-6 text-lg max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            Discover AI-powered coding tools, best practices, and resources to accelerate your development workflow.
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
          <QuickNavigation />
        </div>
      </div>
    </section>
  );
};

export default Hero;