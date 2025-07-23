import {redirect} from 'next/navigation';

export default function RootLayout() {
  // 重定向到默认语言路由
  redirect('/zh');
  
  // 这个返回永远不会被执行，但需要满足 TypeScript 类型检查
  return null;
}