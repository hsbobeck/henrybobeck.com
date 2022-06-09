import '../styles/globals.css'
import React, { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    document.body.className = pageProps.isDark ? 'dark-mode' : 'light-mode';
  });
  return <Component {...pageProps} />
}

export default MyApp
