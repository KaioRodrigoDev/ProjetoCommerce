import '../styles/output.css'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
