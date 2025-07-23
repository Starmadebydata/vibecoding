import type { Metadata } from 'next'
import GuidePage from '@/pages/GuidePage'

export const metadata: Metadata = {
  title: '入门指南 - Vibe Coding',
  description: '从这里开始了解 AI 编程的基础知识和核心概念',
  keywords: ['AI编程入门', '编程指南', '开发教程'],
}

export default function Guides() {
  return <GuidePage />
}