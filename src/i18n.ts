import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';

// Can be imported from a shared config
const locales = ['zh', 'en'];

export default getRequestConfig(async ({locale}) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  // 确保 locale 不是 undefined
  const safeLocale = locale || 'zh';

  return {
    locale: safeLocale,
    messages: (await import(`../messages/${safeLocale}.json`)).default,
    // 添加时区配置
    timeZone: 'Asia/Shanghai'
  };
});