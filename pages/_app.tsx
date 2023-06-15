import type { AppProps } from 'next/app'
import '@/styles/globals.css'

import Layout from '@/components/Layout';
import LoginModel from '@/components/models/LoginModel';
import RegisterModel from '@/components/models/RegisterModel';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <RegisterModel />
      <LoginModel />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
