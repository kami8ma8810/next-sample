// pages/_document.tsxはカスタムドキュメントと呼ばれるしくみで、デフォルトで生成されるページ設定のうち、html/head/body要素に関わる部分を上書きするためのもの

// デフォルトのDocumentをMyDocumentで上書き
import Document, { DocumentContext, DocumentInitialProps } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      // 初期値を流用
      const initialProps = await Document.getInitialProps(ctx);

      // initialPropsに加えて、stylesを追加して返す
      return {
        ...initialProps,
        styles: [
          <>
            {/* 元々のstyle */}
            {initialProps.styles}
            {/* styled-componentsのstyle */}
            {sheet.getStyleElement()}
          </>,
        ],
      };
    } finally {
      sheet.seal();
    }
  }
}
