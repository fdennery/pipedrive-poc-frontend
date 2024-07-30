import '../styles/globals.css';
import Head from 'next/head';
import { AuthProvider } from '../context/AuthContext';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Next.js App</title>
      </Head>
      <AuthProvider>
      <Component {...pageProps} />
      </AuthProvider>
    </>
  );
}

export default App;
