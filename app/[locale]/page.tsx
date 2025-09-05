import {notFound} from 'next/navigation'

export default function Page() {
  // Localized routes are deprecated; always 404
  notFound()
}
