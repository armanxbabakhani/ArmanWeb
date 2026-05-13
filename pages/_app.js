import '../styles/globals.css'
import React from "react"
import Head from 'next/head'
import Layout from "../component/layout"
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return( 
      <Layout>
        <Head>
            <title>Arman Babakhani — Quantum Algorithms Researcher</title>
            <meta name="description" content="Arman Babakhani is a quantum algorithms researcher at JP Morgan Chase. Publications in Physical Review Letters, Physical Review A, Optica, and Communications in Mathematical Physics." />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="icon" href="/Armanlogo.png"/>
        </Head> 
        <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-11087720521"></Script>
        <Script id="google-analytics">
        {
            `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-11087720521');
            `
        }
        </Script>
        <Component {...pageProps} /> 
      </Layout>
)
}

export default MyApp;
