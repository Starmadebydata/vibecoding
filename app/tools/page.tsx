import type { Metadata } from 'next'
import ToolsPage from '@/pages/ToolsPage'

export const metadata: Metadata = {
  title: '工具文档 - Vibe Coding',
  description: '详细的 AI 编程工具使用说明和配置指南',
  keywords: ['编程工具', 'AI工具', '开发工具文档'],
}

export default function Tools() {
  return <ToolsPage />
}