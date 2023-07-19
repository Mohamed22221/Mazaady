import { useState } from "react";
import { Noto_Sans_Arabic } from "next/font/google";
import { Provider } from "react-redux";

//custom
//style
import Head from "next/head";
import store from "@/api/store";

const font = Noto_Sans_Arabic({
  style: ["normal"],
  subsets: ["arabic"],
  weight: ["200", "400", "500", "700"],
});

export default function App({ Component, pageProps }) {

  return (
    <Provider store={store}>
      <Head>
        <meta
          name="viewport"
          content="maximum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
      </Head>
      
      <main className={font.className}>
        <div className="main-margin">
          <Component {...pageProps} />
        </div>
      </main>
      </Provider>
  );
}
