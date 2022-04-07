import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="scroll-smooth">
        <Head>
          <meta name="google-site-verification" content="JKVyi3BBSq744RDL7GjbV4PnS8NyES3hY93rQMu-QsE" />
          <meta name="description" content="Michael Kubín career web" />
          <meta property="og:description" content="Michael Kubín, react, next, nuxt, javascript, typescript" />
          <link rel="icon" type="image/png" href="/favicon.png" />
        </Head>
        <body className="bg-white dark:bg-gray900 ease-in-out duration-700 text-gray500">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
