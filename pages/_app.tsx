import React from 'react';
import Head from 'next/head'
import { globalCss } from '../styles/global';
import type { AppProps } from 'next/app'
import wrapper from '../src/lib/store/configureStore';

function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    <>
        <Head>
          <title>Hello Quiz</title>
          <link rel="icon" href="/favicon.ico" />
          <style>{globalCss}</style>
        </Head>
        <Component {...pageProps} />
    </>
  )
}

export default wrapper.withRedux(MyApp) 
