import { Provider } from "react-redux";
import "tailwindcss/tailwind.css";
import "../styles/globals.css";

import Head from "next/head";
import store from "@/api/store";
import TopSearch from "@/components/home/search";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <meta
          name="viewport"
          content="maximum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
      </Head>

      <main className="container mx-auto">
        <div>
          <TopSearch />
          <Component {...pageProps} />
        </div>
      </main>
    </Provider>
  );
}
