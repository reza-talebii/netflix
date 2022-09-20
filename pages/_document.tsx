import Document, { Html, Head, Main, NextScript } from "next/document";
import Meta from "../components/meta/meta";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <Meta title="netflix" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
