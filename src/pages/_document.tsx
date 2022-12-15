import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="h-full scroll-smooth bg-blue">
        <Head />
        <body className="flex flex-1 flex-col">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
