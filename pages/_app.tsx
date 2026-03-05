import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../layout';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Component {...pageProps} />
        </div>
      </div>
    </Layout>
  );
}

export default MyApp;