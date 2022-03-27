import '../styles/output.css'
import { Provider } from 'react-redux'
import store from '../services/redux/store/store'
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default MyApp
