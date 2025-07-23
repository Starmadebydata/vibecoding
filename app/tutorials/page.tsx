import type { Metadata } from 'next'
import TutorialsPage from '@/pages/TutorialsPage'

export const metadata: Metadata = {
  title: '教程 - Vibe Coding',
  description: '实用的编程学习资源和详细教程',
  keywords: ['编程教程', '学习资源', 'AI编程课程'],
}

export default function Tutorials() {
  return <TutorialsPage />
}