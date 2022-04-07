import '../styles/output.css'
import { Provider } from 'react-redux'
import store from '../services/redux/store/store'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </Provider>
    </>
  )
}

export default MyApp
