import '../styles/globals.css'
import Layout from "../component/layout"
import Navbar from "../component/Navbar"

function MyApp({ Component, pageProps }) {
  return( 
      <Layout>
        <Component {...pageProps} /> 
      </Layout>
      // <Navbar>
      //   <Component {...pageProps} />
      // </Navbar>
)
}

export default MyApp
