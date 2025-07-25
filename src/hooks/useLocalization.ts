'use client';

import { useCallback, useMemo } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';

/**
 * 自定义本地化 hook，提供翻译和语言切换功能
 * @param namespace 可选的命名空间，用于组织翻译键
 * @returns 本地化工具对象
 */
export function useLocalization(namespace?: string) {
  // 使用 next-intl 提供的基础 hooks
  const t = useTranslations(namespace);
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  
  // 语言判断辅助变量
  const isZh = locale === 'zh';
  const isEn = locale === 'en';
  
  /**
   * 切换语言
   * @param newLocale 新的语言代码
   */
  const switchLocale = useCallback((newLocale: string) => {
    // 从当前路径中提取非语言部分
    const pathWithoutLocale = pathname ? pathname.replace(/^\/[^\/]+/, '') : '';
    router.push(`/${newLocale}${pathWithoutLocale || ''}`);
  }, [pathname, router]);
  
  /**
   * 获取当前语言的文本
   * @param zhText 中文文本
   * @param enText 英文文本
   * @returns 根据当前语言返回相应的文本
   */
  const getLocalizedText = useCallback((zhText: string, enText: string) => {
    return isZh ? zhText : enText;
  }, [isZh]);
  
  /**
   * 格式化翻译文本，支持变量替换
   * @param key 翻译键
   * @param params 替换参数
   * @returns 格式化后的翻译文本
   */
  const formatMessage = useCallback((key: string, params?: Record<string, string | number>) => {
    try {
      if (!params) return t(key);
      
      let message = t(key);
      Object.entries(params).forEach(([paramKey, paramValue]) => {
        message = message.replace(new RegExp(`{${paramKey}}`, 'g'), String(paramValue));
      });
      
      return message;
    } catch (error) {
      console.warn(`Translation key not found: ${key}`);
      return key;
    }
  }, [t]);
  
  return {
    t,
    formatMessage,
    locale,
    isZh,
    isEn,
    switchLocale,
    getLocalizedText
  };
}