import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';

// Can be imported from a shared config
const locales = ['en', 'zh'];

export default getRequestConfig(async ({locale}) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  // 缺省改为英文
  const safeLocale = locale || 'en';

  return {
    locale: safeLocale,
    messages: (await import(`../messages/${safeLocale}.json`)).default,
    // 时区可按需调整（默认保留）
    timeZone: 'Asia/Shanghai'
  };
});
