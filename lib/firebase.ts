import { getApp, getApps, initializeApp, type FirebaseOptions } from 'firebase/app'
import { getAnalytics, isSupported, type Analytics } from 'firebase/analytics'

const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyAJgfSbwlAkyCNwO9YO9mhxWT5m3UJONo8",
  authDomain: "offerclub-loanpeoffer.firebaseapp.com",
  projectId: "offerclub-loanpeoffer",
  storageBucket: "offerclub-loanpeoffer.firebasestorage.app",
  messagingSenderId: "859970077300",
  appId: "1:859970077300:web:2dc7a9b6c367c3649f4721",
  measurementId: "G-SRQDYMNSMP"
}

const hasFirebaseConfig = Boolean(
  firebaseConfig.apiKey &&
    firebaseConfig.authDomain &&
    firebaseConfig.projectId &&
    firebaseConfig.appId &&
    firebaseConfig.measurementId,
)

let analyticsPromise: Promise<Analytics | null> | null = null

export function getFirebaseAnalytics() {
  if (typeof window === 'undefined' || !hasFirebaseConfig) {
    return Promise.resolve(null)
  }

  analyticsPromise ??= isSupported().then((supported) => {
    if (!supported) {
      return null
    }

    const app = getApps().length ? getApp() : initializeApp(firebaseConfig)

    return getAnalytics(app)
  })

  return analyticsPromise
}
