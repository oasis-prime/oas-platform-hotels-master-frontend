export const AppConfig = {
  firebase: {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
  },
  graphqlBaseUrl: process.env.NEXT_PUBLIC_API_GRAPHQL,
  locale: '',
  site_name: '',
  default_translations: ['footer', 'header', 'layout', 'misc', 'common'],
}

export const AppHotelbeds = {
  standard: 'http://photos.hotelbeds.com/giata/',
  medium: 'http://photos.hotelbeds.com/giata/xl/',
  full: 'http://photos.hotelbeds.com/giata/xxl/',
}

export const AppUrl = {
  hotels: '/hotels',
}
