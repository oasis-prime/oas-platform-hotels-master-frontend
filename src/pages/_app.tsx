import '@styles/globals.css'
import '@styles/datepicker.css'

import type { AppProps } from 'next/app'
import { AuthProvider } from '@auth/auth'
import Head from 'next/head'
import { MainLayout } from '@components/layout'
import { Provider } from 'react-redux'
import { appWithTranslation } from 'next-i18next'
import { reduxStoreMain } from '@store/core'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Provider store={reduxStoreMain}>
        <AuthProvider>
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </AuthProvider>
      </Provider>
    </>
  )
}

export default appWithTranslation(MyApp)
