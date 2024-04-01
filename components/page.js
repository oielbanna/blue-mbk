import Head from 'next/head';
import Home from '../pages/home';
import Footer from '@components/Footer';
import Header from '@components/Header';
import TitleCard from '@components/title-card';

export default function Page({ children }) {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header title={'NAVIGATION GOES HERE'}></Header>
      <main>{children}</main>

      <Footer />
    </div>
  );
}
