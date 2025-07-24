'use client';

import React from 'react';
import { useLocalization } from '@/hooks/useLocalization';
import { useSafeTheme } from '@/hooks/useSafeTheme';
import { Globe } from 'lucide-react';

interface LanguageSwitcherProps {
  className?: string;
}

/**
 * 语言切换组件
 * 允许用户在中文和英文之间切换
 */
const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ className = '' }) => {
  const { locale, switchLocale, t } = useLocalization('common.language');
  const { theme } = useSafeTheme();
  
  const isDark = theme === 'dark';
  
  return (
    <div className={`relative inline-block text-left ${className}`}>
      <button
        type="button"
        className={`inline-flex items-center justify-center rounded-md border ${
          isDark 
            ? 'border-gray-600 bg-gray-800 text-gray-200 hover:bg-gray-700' 
            : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
        } px-3 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors`}
        onClick={() => switchLocale(locale === 'zh' ? 'en' : 'zh')}
        aria-label={t('switchTo')}
      >
        <Globe size={16} className="mr-2" />
        {locale === 'zh' ? 'English' : '中文'}
      </button>
    </div>
  );
};

export default LanguageSwitcher;