import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Landing from './landing';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
          <Landing />
        {/*<Header title="We are making Blue's website!" />*/}
        {/*<p className="description">*/}
        {/*   <code>pages/index.js</code>*/}
        {/*</p>*/}
      </main>

      <Footer />
    </div>
  )
}
