import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Head from 'next/head'
import React from 'react';
import { ServerStyleSheets, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Menu from './menu'
import theme from '../theme';

import '../styles/globals.css'

const useStyles = makeStyles((theme) => ({
  footer: {
    width: '100%',
    height: 100,
    borderTop: '1px solid #eaeaea',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
}));

function MyApp({ Component, pageProps }) {
  const styles = useStyles();

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
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Menu />
        <Component {...pageProps} />
        <footer className={styles.footer}>
          <a href="https://aranair.github.io" target="_blank" rel="noopener noreferrer">
            Copyright © 2020 Boa Ho Man. All rights reserved.
          </a>
        </footer>
      </ThemeProvider>
    </React.Fragment>
  )
}

export default MyApp
