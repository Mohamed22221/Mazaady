import { Provider } from "react-redux";
import "tailwindcss/tailwind.css";
import "../../src/styles/globals/globals.css";
import Head from "next/head";
import store from "@/api/store";
import TopSearch from "@/components/layout/search";
import Navbar from "@/components/layout/navbar/navBar";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <meta
          name="viewport"
          content="maximum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
      </Head>

      <main>
        <div>
          <TopSearch />
          <Navbar />
          <Component {...pageProps} />
        </div>
      </main>
    </Provider>
    
  );
}
