import React from 'react';
import Link from 'next/link';
import {useTranslations} from 'next-intl';

export default function FooterV2() {
  const t = useTranslations('pages.homeV2.footer');
  return (
    <footer className="mt-24 border-t border-white/10 pt-8 pb-12">
      <p className="text-white/80">{t('tagline')}</p>
      <div className="mt-4 flex flex-wrap gap-4 text-sm">
        <Link href="/about" className="text-white/70 hover:text-white">{t('links.about')}</Link>
        <Link href="/changelog" className="text-white/70 hover:text-white">{t('links.changelog')}</Link>
        <Link href="/privacy" className="text-white/70 hover:text-white">{t('links.privacy')}</Link>
        <Link href="/terms" className="text-white/70 hover:text-white">{t('links.terms')}</Link>
        <Link href="/contact" className="text-white/70 hover:text-white">{t('links.contact')}</Link>
      </div>
      <p className="mt-6 text-xs text-white/50">© {new Date().getFullYear()} {t('copyright')}</p>
    </footer>
  );
}
