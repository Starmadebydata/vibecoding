import type { Metadata } from 'next'
import SubmitProject from '@/pages/SubmitProject'

type Props = {
  params: {locale: string};
};

export function generateMetadata({
  params: {locale}
}: Props): Metadata {
  const isZh = locale === 'zh';
  
  return {
    title: isZh ? '提交项目 - Vibe Coding' : 'Submit Project - Vibe Coding',
    description: isZh ? '分享您的项目到 Vibe Coding 社区' : 'Share your project with the Vibe Coding community',
    keywords: isZh ? ['提交项目', '分享代码', '开源项目'] : ['submit project', 'share code', 'open source project'],
  }
}

export default function SubmitProjectPage() {
  return <SubmitProject />
}