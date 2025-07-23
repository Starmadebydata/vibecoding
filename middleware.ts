import createMiddleware from 'next-intl/middleware';
 
// 这个中间件将处理语言检测和路由
export default createMiddleware({
  // 支持的语言列表
  locales: ['zh', 'en'],
  
  // 默认语言
  defaultLocale: 'zh',
  
  // 自动从浏览器设置中检测用户的语言
  localeDetection: true
});
 
export const config = {
  // 匹配所有应该国际化的路径
  // 跳过不需要国际化的路径（如API路由、静态文件等）
  matcher: ['/((?!api|_next|.*\\..*).*)']
};