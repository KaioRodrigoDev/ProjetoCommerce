import '../styles/output.css'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import { AuthProvider } from '../context/AuthContext'

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </AuthProvider>
  )
}

export default MyApp
