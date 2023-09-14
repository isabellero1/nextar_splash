import NavBar from '@/components/NavBar'
import '@/styles/globals.css'
import {Montserrat} from "next/font/google"
import Head from 'next/head'
import Home from '.'

//initialize to use font
/*
<Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
*/

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont"
})


export default function App({ Component, pageProps }) {
  return (
    <main className={`${montserrat.variable} font-mont`}>
        <Component {... pageProps}/> 
    </main>
   
  )
}
