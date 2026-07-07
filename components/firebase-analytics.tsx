'use client'

import { useEffect } from 'react'
import { logEvent } from 'firebase/analytics'
import { usePathname } from 'next/navigation'
import { getFirebaseAnalytics } from '@/lib/firebase'

export default function FirebaseAnalytics() {
  const pathname = usePathname()

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      void getFirebaseAnalytics().then((analytics) => {
        if (!analytics) {
          return
        }

        logEvent(analytics, 'page_view', {
          page_path: pathname,
          page_location: window.location.href,
          page_title: document.title,
        })
      })
    }, 0)

    return () => window.clearTimeout(timeout)
  }, [pathname])

  return null
}
