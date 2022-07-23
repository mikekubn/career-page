import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="scroll-smooth">
        <Head>
          <meta name="google-site-verification" content="JKVyi3BBSq744RDL7GjbV4PnS8NyES3hY93rQMu-QsE" />
          <meta name="description" content="Michael Kubín career web" />
          <meta property="og:description" content="Michael Kubín, react, next, nuxt, javascript, typescript" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
        </Head>
        <body className="dark-mode">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
