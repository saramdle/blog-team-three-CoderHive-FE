import "@/styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";

import { Provider } from "react-redux";
import wrapper from "@/store";
import { Fetcher, SWRConfig } from "swr";
import HttpRequest from "@/api/httpRequest";
import Layout from "@/components/Layout/layout";

export default function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);

  const fetcher: Fetcher = (url: string) => {
    return HttpRequest.get(url).then((res) => {
      if (res.status !== 200) {
        const error = new Error("서버와의 통신 중에 오류가 발생했습니다.");
        throw error;
      }

      return res.data;
    });
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Provider store={store}>
        <SWRConfig value={{ fetcher }}>
          <Layout>
            <Component {...props.pageProps} />
          </Layout>
        </SWRConfig>
      </Provider>
    </>
  );
}
