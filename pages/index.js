import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import IndexPage from './main/indexPage'


const inter = Inter({ subsets: ['latin'] })

export default function Home({}) {
  return (
    <main>
      <Head>
        <title>Eventium</title>
        <meta name="keywords" content='v, Drel, Genius'/>
      </Head>
      <IndexPage />
    </main>
  )
}
