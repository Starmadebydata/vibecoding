import React from 'react';
import Link from 'next/link';

export default function FooterV2() {
  return (
    <footer className="mt-24 border-t border-white/10 pt-8 pb-12">
      <p className="text-white/80">Vibe Coding — Build with AI, ship with speed.</p>
      <div className="mt-4 flex flex-wrap gap-4 text-sm">
        <Link href="/about" className="text-white/70 hover:text-white">About</Link>
        <Link href="/changelog" className="text-white/70 hover:text-white">Changelog</Link>
        <Link href="/privacy" className="text-white/70 hover:text-white">Privacy</Link>
        <Link href="/terms" className="text-white/70 hover:text-white">Terms</Link>
        <Link href="/contact" className="text-white/70 hover:text-white">Contact</Link>
      </div>
      <p className="mt-6 text-xs text-white/50">© {new Date().getFullYear()} All rights reserved.</p>
    </footer>
  );
}
