import React from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import 'katex/dist/katex.min.css';
import 'react-quill/dist/quill.snow.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
