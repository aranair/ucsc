import Container from '@mui/material/Container';
import { ThemeProvider as StylesThemeProvider } from '@mui/styles';
import Head from 'next/head'
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import Navbar from './navbar'
import theme from '../theme';

import '../styles/globals.css'

const mainStyles = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  overflow: 'hidden',
  backgroundColor: '#fff',
};

const footerStyles = {
  width: '100%',
  height: 150,
  color: 'white',
  background: '#002846',
  borderTop: '1px solid #eaeaea',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const footerLinkStyles = {
  textDecoration: 'none',
};

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
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;300;700&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@700&display=swap" rel="stylesheet"/>
      </Head>
      <StylesThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar />
          <main style={mainStyles}>
            <Component {...pageProps} />
          </main>
          <footer style={footerStyles}>
            <a style={footerLinkStyles} href="https://aranair.github.io" target="_blank" rel="noopener noreferrer">
              Crafted by Boa Ho Man (2025)
            </a>
          </footer>
        </ThemeProvider>
      </StylesThemeProvider>
    </React.Fragment>
  )
}

export default MyApp
