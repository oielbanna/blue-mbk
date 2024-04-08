import Head from 'next/head';
import Footer from '@components/Footer';
import Header from '@components/Header';
import TitleCard from '@components/title-card';
import Home from '../pages/home';

export default function Page({ children }) {
  return (
    <div className="container" id="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header title="" />
      <main id="page-wrap">{children}</main>

      <Footer />
    </div>
  );
}
