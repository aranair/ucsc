import Head from 'next/head'
import React from 'react';
import { ServerStyleSheets, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import theme from '../theme';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>UCSC</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@700&display=swap" rel="stylesheet"/>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  )
}

export default MyApp
