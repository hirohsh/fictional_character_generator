import 'src/styles/globals.css';
import { Footer } from 'src/components/Footer';
import { Header } from 'src/components/Header';
import { ChakraProvider } from '@chakra-ui/react';
import { DataProvider } from 'src/components/Context';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>架空人物ジェネレーター</title>
        <meta
          name="description"
          content="最大1000件の架空の人物情報を作成し、JSONファイルでダウンロード可能なジェネレーターです。"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@49Hiiro" />
        <meta name="twitter:title" content="架空人物ジェネレーター" />
        <meta
          name="twitter:description"
          content="最大1000件の架空の人物情報を作成し、JSONファイルでダウンロード可能なジェネレーターです。"
        />
        <meta name="twitter:image" content="https://fictional-character-generator.vercel.app/TwitterCard.png" />
      </Head>
      <ChakraProvider>
        <Header />
        <DataProvider>
          <Component {...pageProps} />
        </DataProvider>
        <Footer />
      </ChakraProvider>
    </>
  );
}
