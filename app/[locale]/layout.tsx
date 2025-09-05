import {notFound} from 'next/navigation'

// Neutralize localized layout; no longer used. Keep minimal wrapper to avoid build-time imports.
export default function LocaleLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
