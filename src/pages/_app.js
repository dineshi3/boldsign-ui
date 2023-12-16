
import AuthLayout from '@/components/AuthLayout';

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import '@/styles/index.scss';

export default function App({ Component, pageProps }) {


  return (
    <>
      <AuthLayout>
        <Component {...pageProps} />
      </AuthLayout>
      <ToastContainer />
    </>
  );
}
