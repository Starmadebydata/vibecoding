import {redirect} from 'next/navigation';

export default function RootPage() {
  // 默认重定向到英文页面（中间件仍会做语言检测）
  redirect('/en');
}
