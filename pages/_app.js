import Layout from '../components/common_components/Layout';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
