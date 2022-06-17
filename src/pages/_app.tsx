import "@styles/globals.css";

import type { AppProps } from "next/app";
import { AuthProvider } from "@auth/auth";
import Head from "next/head";
import { Provider } from "react-redux";
import { reduxStoreMain } from "@store/core";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Provider store={reduxStoreMain}>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </Provider>
    </>
  );
}

export default MyApp;
