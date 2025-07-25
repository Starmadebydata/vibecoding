import type { Metadata } from 'next'
import ProfilePage from '@/pages/ProfilePage'

type Props = {
  params: {locale: string};
};

export function generateMetadata({
  params: {locale}
}: Props): Metadata {
  const isZh = locale === 'zh';
  
  return {
    title: isZh ? '个人资料 - Vibe Coding' : 'Profile - Vibe Coding',
    description: isZh ? '管理您的 Vibe Coding 个人资料和设置' : 'Manage your Vibe Coding profile and settings',
    keywords: isZh ? ['个人资料', '用户设置', '账户管理'] : ['profile', 'user settings', 'account management'],
  }
}

export default function Profile() {
  return <ProfilePage />
}