import Head from 'next/head';
import Footer from '@components/Footer';
import Header from '@components/Header';

export default function Page({ children }) {
  return (
    <div className="container" id="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header title="Blue" />
      <main id="page-wrap">
        {/*<div className="main-first-child">*/}
        {children}
        {/*</div>*/}
      </main>

      <Footer />
    </div>
  );
}
