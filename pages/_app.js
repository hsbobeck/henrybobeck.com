import '../styles/globals.css'
import React, { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    /* dynamic page background color */
    var isDark = pageProps.isDark ? 'dark-mode' : 'light-mode';
    var enableScroll = pageProps.disableScroll ? 'disable-scroll' : 'enable-scroll';
    document.body.className = `${isDark} ${enableScroll}`;
  });


  return <Component {...pageProps} />
}

export default MyApp
