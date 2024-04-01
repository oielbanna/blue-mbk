import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Home from './home';

export default function Index() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Home />
      </main>

      <Footer />
    </div>
  );
}
