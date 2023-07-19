import { Html, Head, Main, NextScript } from "next/document";
export default function Document() {
  return (
    <Html lang="ar">
      <Head>
        <meta name="application-name" content="Michanes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Michanes" />
        <meta name="description" content="Michanes real estate directory" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#077b7a" />
        <meta name="description" content="مشنص للعقارات" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
