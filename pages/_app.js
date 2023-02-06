import '../styles/globals.css'
import Layout from "../component/layout"
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return( 
      <Layout>
        <Component {...pageProps} /> 
      </Layout>
)
}

export default MyApp;
