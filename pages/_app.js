import '../styles/globals.css'
import Layout from "../component/layout"
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return( 
      <Layout>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-11087720521"></Script>
        <Script>
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

export default MyApp
