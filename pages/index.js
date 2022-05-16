import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero'


export default function Home() {
  return (<>
    
      <Head>
        <title>Next App</title>
        <meta name="description" content="Generated Hitansh" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Hero/>
  
      </>
  )
}
