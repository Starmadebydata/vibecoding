import {getRequestConfig} from 'next-intl/server';
 
export default getRequestConfig(async ({locale}) => {
  // 确保 locale 不是 undefined
  const safeLocale = locale || 'zh';
  
  return {
    locale: safeLocale,
    messages: (await import(`../../messages/${safeLocale}.json`)).default,
    timeZone: 'Asia/Shanghai'
  };
});