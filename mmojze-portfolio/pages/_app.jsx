import '../styles/index.css'
import Head from 'next/head'

function Home({ Component, pageProps }) {
  return (
  <div>
    <Head>
      <title>Matias Mojzeszowicz - Fullstack Dev</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Component {...pageProps} />
  </div> 
  )
}

export default Home
