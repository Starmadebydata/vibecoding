'use client';

import React from 'react';
import { useSafeTheme } from '@/hooks/useSafeTheme';
import { useLocalization } from '@/hooks/useLocalization';
import { Users, Sparkles, Library } from 'lucide-react';

const QuickNavigation: React.FC = () => {
  const { theme } = useSafeTheme();
  const { t } = useLocalization('pages.home.quickNav');

  return (
    <div className={`p-6 rounded-xl ${
      theme === 'dark' 
        ? 'bg-gray-800/50 border border-gray-700' 
        : 'bg-white border border-gray-200 shadow-md'
    }`}>
      <h2 className="text-2xl font-bold mb-4">{t('title')}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className={`p-4 rounded-lg ${
          theme === 'dark' ? 'bg-gray-700/50' : 'bg-gray-50'
        }`}>
          <h3 className="font-bold mb-2 flex items-center">
            <Library className="w-5 h-5 mr-2" />
            {t('hotTopics.title')}
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="/topics/prompt-engineering" className="hover:text-purple-500">
                {t('hotTopics.promptEngineering')}
              </a>
            </li>
            <li>
              <a href="/topics/code-generation" className="hover:text-purple-500">
                {t('hotTopics.codeGeneration')}
              </a>
            </li>
            <li>
              <a href="/topics/refactoring" className="hover:text-purple-500">
                {t('hotTopics.refactoring')}
              </a>
            </li>
          </ul>
        </div>
        
        <div className={`p-4 rounded-lg ${
          theme === 'dark' ? 'bg-gray-700/50' : 'bg-gray-50'
        }`}>
          <h3 className="font-bold mb-2 flex items-center">
            <Sparkles className="w-5 h-5 mr-2" />
            {t('latestUpdates.title')}
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="/updates/v2-features" className="hover:text-purple-500">
                {t('latestUpdates.v2Features')}
              </a>
            </li>
            <li>
              <a href="/updates/tool-comparison" className="hover:text-purple-500">
                {t('latestUpdates.toolComparison')}
              </a>
            </li>
            <li>
              <a href="/updates/community" className="hover:text-purple-500">
                {t('latestUpdates.community')}
              </a>
            </li>
          </ul>
        </div>
        
        <div className={`p-4 rounded-lg ${
          theme === 'dark' ? 'bg-gray-700/50' : 'bg-gray-50'
        }`}>
          <h3 className="font-bold mb-2 flex items-center">
            <Users className="w-5 h-5 mr-2" />
            {t('communityResources.title')}
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="/community/showcase" className="hover:text-purple-500">
                {t('communityResources.showcase')}
              </a>
            </li>
            <li>
              <a href="/community/discussions" className="hover:text-purple-500">
                {t('communityResources.discussions')}
              </a>
            </li>
            <li>
              <a href="/community/contribute" className="hover:text-purple-500">
                {t('communityResources.contribute')}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default QuickNavigation;