import '@styles/globals.css'
import '@styles/datepicker.css'
import '@styles/pentagon.css'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

import { SigninModal, SignupModal } from '@components/member'

import { ApolloProviderWithJWT } from '@graphql/apollo'
import type { AppProps } from 'next/app'
import { AuthProvider } from '@auth/auth'
import Head from 'next/head'
import { MainLayout } from '@components/layout'
import { NextPage } from 'next'
import { Provider } from 'react-redux'
import { appWithTranslation } from 'next-i18next'
import { reduxStoreMain } from '@store/core'
import useModal from '@store/useModal'

export type NextPageWithLayout = NextPage & {
  Layout?: React.FC<unknown>
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const { signIn } = useModal()
  const Layout = Component.Layout || MainLayout

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
      </Head>

      <Provider store={reduxStoreMain}>
        <AuthProvider>
          <ApolloProviderWithJWT>
            <Layout>
              <>
                <Component {...pageProps} />
                <SigninModal />
                <SignupModal />
              </>
            </Layout>
          </ApolloProviderWithJWT>
        </AuthProvider>
      </Provider>
    </>
  )
}

export default appWithTranslation(MyApp)
