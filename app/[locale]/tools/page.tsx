import type { Metadata } from 'next'
import ToolsPage from '@/pages/ToolsPage'

type Props = {
  params: {locale: string};
};

export function generateMetadata({
  params: {locale}
}: Props): Metadata {
  const isZh = locale === 'zh';
  const translations = isZh ? require('../../../messages/zh.json') : require('../../../messages/en.json');
  const t = translations.pages.tools;

  return {
    title: t.title,
    description: t.description,
    keywords: locale === 'zh' ? ['AI编程工具', '开发工具', '编程助手'] : ['AI programming tools', 'development tools', 'programming assistants'],
  }
}

export default function Tools() {
  return <ToolsPage />
}