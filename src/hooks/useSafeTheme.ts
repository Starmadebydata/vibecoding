'use client';

import { useTheme } from '@/contexts/ThemeContext';

// 安全的 useTheme hook，在服务端渲染时提供默认值
export const useSafeTheme = () => {
  try {
    return useTheme();
  } catch (error) {
    // 在服务端渲染或 ThemeProvider 不可用时返回默认值
    return { 
      theme: 'light' as const,
      toggleTheme: () => {} 
    };
  }
};