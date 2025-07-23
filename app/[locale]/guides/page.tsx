import type { Metadata } from 'next'
import GuidePage from '@/pages/GuidePage'
import {getTranslations} from 'next-intl/server';

type Props = {
  params: {locale: string};
};

export async function generateMetadata({
  params: {locale}
}: Props): Promise<Metadata> {
  const t = await getTranslations({locale, namespace: 'pages.guides'});

  return {
    title: t('title'),
    description: t('description'),
    keywords: locale === 'zh' ? ['AI编程入门', '编程指南', '开发教程'] : ['AI programming basics', 'programming guide', 'development tutorial'],
  }
}

export default function Guides() {
  return <GuidePage />
}