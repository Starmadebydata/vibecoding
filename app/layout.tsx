export default function RootLayout() {
  // 根布局不再做任何重定向，避免与中间件/页面级重定向造成循环
  // 该文件仅为满足 Next.js 对 app 根布局的要求
  return null;
}
