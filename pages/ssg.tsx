import { GetStaticProps, NextPage, NextPageContext } from 'next';

// Next.jsの組み込みのコンポーネント
import Head from 'next/head';

// ページコンポーネントのpropsの型定義
type SSGProps = {
  message: string;
};

//SSGはgetStaticPropsが返したpropsを受け取ることができる
// NextPage<SSGProps>はmessage:stringのみを受け取って生成されるページの型
const SSG: NextPage<SSGProps> = (props) => {
  const { message } = props;
  return (
    <div>
      {/* Headコンポーネントで囲むと、その要素は<head>タグに配置される */}
      <Head>
        <title>Static Site Generation</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <p>このページは静的サイト生成によってビルド時に生成されたページです</p>
        <p>{message}</p>
      </main>
    </div>
  );
};

//getStaticPropsはビルド時に実行される
// ページコンポーネントはexport defaultでエクスポートする
export const getStaticProps: GetStaticProps<SSGProps> = async (context) => {
  const timestamp = new Date().toLocaleString();
  const message = `${timestamp}にgetStaticPropsが実行されました。`;
  console.log(message);
  return {
    // ここで返したpropsを元にページコンポーネントを描画する
    props: {
      message,
    },
  };
};

export default SSG;
