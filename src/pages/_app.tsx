import "@/styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

import wrapper from "@/store";
import Layout from "@/components/Layout/layout";

export default function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Provider store={store}>
        <Layout>
          <Component {...props.pageProps} />
        </Layout>
      </Provider>
    </>
  );
}
