import type { Metadata } from 'next'
import TutorialsPage from '@/pages/TutorialsPage'

type Props = {
  params: {locale: string};
};

export function generateMetadata({
  params: {locale}
}: Props): Metadata {
  const isZh = locale === 'zh';
  const translations = isZh ? require('../../../messages/zh.json') : require('../../../messages/en.json');
  const t = translations.pages.tutorials;

  return {
    title: t.title,
    description: t.description,
    keywords: locale === 'zh' ? ['AI编程教程', '学习资源', '编程学习'] : ['AI programming tutorials', 'learning resources', 'programming learning'],
  }
}

export default function Tutorials() {
  return <TutorialsPage />
}