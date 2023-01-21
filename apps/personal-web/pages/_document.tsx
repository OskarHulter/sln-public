/* eslint-disable */
import { CssBaseline } from '@nextui-org/react'
import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document'
import React from 'react'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)

    return {
      ...initialProps,
      styles: [...React.Children.toArray(initialProps.styles)],
    }
  }
  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta charSet='utf-8' />
          {CssBaseline.flush()}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
