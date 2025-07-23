import type { Metadata } from 'next'
import BestPracticesPage from '@/pages/BestPracticesPage'

export const metadata: Metadata = {
  title: '最佳实践 - Vibe Coding',
  description: 'AI 编程的推荐方法和行业最佳实践指南',
  keywords: ['编程最佳实践', 'AI编程规范', '代码质量'],
}

export default function BestPractices() {
  return <BestPracticesPage />
}