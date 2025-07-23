import type { Metadata } from 'next'
import SubmitProject from '@/pages/SubmitProject'

export const metadata: Metadata = {
  title: '提交项目 - Vibe Coding',
  description: '分享你的编程项目，与社区一起交流学习',
  keywords: ['项目分享', '代码展示', '编程社区'],
}

export default function SubmitProjectPage() {
  return <SubmitProject />
}