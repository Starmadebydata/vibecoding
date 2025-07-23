import type { Metadata } from 'next'
import '../globals.css'
import { ThemeProvider } from '@/contexts/ThemeContext'
import { AuthProvider } from '@/contexts/AuthContext'
import {NextIntlClientProvider} from 'next-intl';

// 定义 Props 类型
type Props = {
  children: React.ReactNode;
  params: {
    locale: string;
  };
};

// 生成元数据
export function generateMetadata({
  params: {locale}
}: {
  params: {locale: string}
}): Metadata {
  const isZh = locale === 'zh';
  
  return {
    title: isZh ? 'Vibe Coding - 提升你的编程体验' : 'Vibe Coding - Enhance Your Programming Experience',
    description: isZh 
      ? '探索 AI 驱动的编程方法，发现效率提升的最佳实践'
      : 'Explore AI-driven programming methods and discover best practices for efficiency improvement',
    keywords: isZh 
      ? ['编程', 'AI编程', '开发工具', '编程教程', '最佳实践']
      : ['programming', 'AI programming', 'development tools', 'programming tutorials', 'best practices'],
    authors: [{ name: 'Vibe Coding Team' }],
    openGraph: {
      title: isZh ? 'Vibe Coding - 提升你的编程体验' : 'Vibe Coding - Enhance Your Programming Experience',
      description: isZh 
        ? '探索 AI 驱动的编程方法，发现效率提升的最佳实践'
        : 'Explore AI-driven programming methods and discover best practices for efficiency improvement',
      type: 'website',
      locale: locale === 'zh' ? 'zh_CN' : 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: isZh ? 'Vibe Coding - 提升你的编程体验' : 'Vibe Coding - Enhance Your Programming Experience',
      description: isZh 
        ? '探索 AI 驱动的编程方法，发现效率提升的最佳实践'
        : 'Explore AI-driven programming methods and discover best practices for efficiency improvement',
    },
  }
}

export default function LocaleLayout({
  children,
  params: {locale}
}: Props) {
  // 获取对应语言的翻译消息
  const messages = locale === 'zh' 
    ? require('../../messages/zh.json')
    : require('../../messages/en.json');

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider>
            <AuthProvider>
              {children}
            </AuthProvider>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}