import type { Metadata } from 'next'
import ProfilePage from '@/pages/ProfilePage'

export const metadata: Metadata = {
  title: '个人资料 - Vibe Coding',
  description: '管理你的个人资料和学习进度',
  keywords: ['个人资料', '学习进度', '用户中心'],
}

export default function Profile() {
  return <ProfilePage />
}