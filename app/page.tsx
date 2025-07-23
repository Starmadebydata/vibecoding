import {redirect} from 'next/navigation';

export default function RootPage() {
  // 默认重定向到中文页面
  // 在实际应用中，中间件会处理语言检测和重定向
  redirect('/zh');
}