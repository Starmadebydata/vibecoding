import type { Metadata } from 'next'
import BestPracticesPage from '@/pages/BestPracticesPage'

type Props = {
  params: {locale: string};
};

export function generateMetadata({
  params: {locale}
}: Props): Metadata {
  const isZh = locale === 'zh';
  const translations = isZh ? require('../../../messages/zh.json') : require('../../../messages/en.json');
  const t = translations.pages.bestPractices;

  return {
    title: t.title,
    description: t.description,
    keywords: locale === 'zh' ? ['AI编程最佳实践', '效率提升', '编程技巧'] : ['AI programming best practices', 'efficiency improvement', 'programming tips'],
  }
}

export default function BestPractices() {
  return <BestPracticesPage />
}