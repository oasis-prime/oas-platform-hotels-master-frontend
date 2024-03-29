import '@styles/globals.css'
import '@styles/datepicker.css'
import '@styles/pentagon.css'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

import { ApolloProviderWithJWT } from '@graphql/apollo'
import type { AppProps } from 'next/app'
import { AuthProvider } from '@auth/auth'
import { MainLayout } from '@components/layout'
import { NextPage } from 'next'
import { appWithTranslation } from 'next-i18next'
import dynamic from 'next/dynamic'
import useModal from '@store/useModal'

const SigninModal = dynamic(() => import('@components/member/signin.modal'), { ssr: false })
const SignupModal = dynamic(() => import('@components/member/signup.modal'), { ssr: false })


export type NextPageWithLayout = NextPage & {
  Layout?: React.FC<unknown>
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout): JSX.Element {
  const { signIn, signUp } = useModal()
  const Layout = Component.Layout || MainLayout

  return (
    <ApolloProviderWithJWT>
      <AuthProvider>
        <Layout>
          <>
            <Component {...pageProps} />
            { signIn && <SigninModal /> }
            { signUp && <SignupModal /> }
          </>
        </Layout>
      </AuthProvider>
    </ApolloProviderWithJWT>
  )
}

export default appWithTranslation(MyApp)
